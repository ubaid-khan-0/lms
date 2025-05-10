<?php

namespace App\DataTables;

use App\Models\Staff;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;
use Illuminate\Support\Facades\Auth;


class StaffDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {

        $tableName = (new Staff)->getTable();
        return (new EloquentDataTable($query))
            ->addIndexColumn()
            ->addColumn('Name', function ($query) {
                return $query->first_name . ' ' . $query->last_name; // Concatenate first and last name
            })
            ->addColumn('company_name', function ($query) {
                return $query->company->company_name ?? 'N/A'; // Display company name or 'N/A' if not found
            })
            ->addColumn('department_name', function ($query) {
                return $query->department->department_name ?? 'N/A'; // Display department name or 'N/A' if not found
            })
            ->addColumn('designation_name', function ($query) {
                return $query->designation->designation_name ?? 'N/A'; // Display designation name or 'N/A' if not found
            })
            ->editColumn('status', function ($query) use ($tableName) {
                $status = $query->status == 1 ? 'Active' : 'Inactive';
                $badgeClass = $query->status == 1 ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger';
                $newStatus = $query->status == 1 ? 0 : 1;
                $iconId = $query->status == 1 ? "PendingSpin{$query->id}" : "publicationSpin{$query->id}";
                $statusText = $query->status == 1 ? 'Inactive' : 'Active';

                return <<<HTML
                <div class='dropdown d-inline-block user-dropdown'>
                    <button type='button' class='btn text-dark waves-effect' id='page-header-user-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        <div class='badge $badgeClass font-size-12'>
                            <i class='fa fa-spin fa-spinner' style='display:none' id='$iconId'></i> $status
                        </div>
                        <i class='fa fa-angle-down'></i>
                    </button>
                    <div class='dropdown-menu dropdown-menu-end p-2'>
                        <a class='dropdown-item' style='cursor:pointer;' onclick="changeStatus('id', '{$query->id}', 'status', '{$newStatus}', '{$tableName}')">
                            $statusText
                        </a>
                    </div>
                </div>
                HTML;
            })

            ->addColumn('action', function ($query) use ($tableName) {
                $actions = [
                    [
                        'label' => 'Edit',
                        'url'   => route('admin.users.edit', $query->id),
                        'icon'  => 'fa fa-edit',
                        'extra' => '',
                        'permission'  => 'edit_users'
                    ],
                    [
                        'label' => 'Delete',
                        'url'   => 'javascript:void(0)',
                        'icon'  => 'fa fa-trash',
                        'extra' => "onclick=\"deleteStaff('id', '$query->id', '$tableName')\"",
                        'permission'  => 'delete_users'
                    ]
                ];

                return renderActionDropdown($actions);
            })

            ->setRowId('id')
            ->rawColumns(['status', 'company_name', 'department_name', 'action']);
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(Staff $model): QueryBuilder
    {
        $loggedInID = Auth::user()->id;
        return $model->newQuery()->where('created_by',$loggedInID)->orderBy('id','desc');
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('staff-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            //->dom('Bfrtip')
            ->orderBy(1)
            ->selectStyleSingle()
            ->buttons([
                Button::make('excel'),
                Button::make('csv'),
                Button::make('pdf'),
                Button::make('print'),
                Button::make('reset'),
                Button::make('reload')
            ]);
    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('id')->data('DT_RowIndex')->searchable(false)->orderable(false),
            Column::make('first_name')->title('Name'),
            Column::make('email')->title('Email'),
            Column::make('mobile')->title('Mobile'),
            Column::make('pan_number')->title('PAN Number'),
            Column::make('aadhar_number')->title('Aadhar Name'),
            Column::make('dob')->title('DOB'),
            Column::make('status'),
            Column::computed('action')
                ->exportable(false)
                ->printable(false)
                ->width(60)
                ->addClass('text-start'),
        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'User_' . date('YmdHis');
    }
}
