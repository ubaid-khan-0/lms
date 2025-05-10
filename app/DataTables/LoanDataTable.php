<?php

namespace App\DataTables;

use App\Models\Loan;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;
use Illuminate\Support\Facades\Auth;

class LoanDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        $roleId = Auth::user()->role_id;
        $tableName = (new Loan)->getTable();
        return (new EloquentDataTable($query))
            ->addIndexColumn()
            ->addColumn('loan_period', function ($row) {
                return $row->loan_duration . '-' . strtoupper(substr($row->apply_interest_on, 0, 1));
            })
            ->addColumn('capital_interest', function ($row) {
                return $row->capital_interest . '%';
            })
            ->editColumn('status', function ($query) use ($tableName, $roleId) {
                $statusMap = [
                    0 => ['label' => 'Pending', 'class' => 'bg-primary-subtle text-primary', 'next' => 1],
                    1 => ['label' => 'Approved', 'class' => 'bg-success-subtle text-success', 'next' => 2],
                    2 => ['label' => 'Rejected', 'class' => 'bg-danger-subtle text-danger', 'next' => 0],
                ];

                $currentStatus = $statusMap[$query->status] ?? $statusMap[0];
                $iconId = "statusSpin{$query->id}";

                // If role is 2 or 3, show static badge
                if (in_array($roleId, [2, 3])) {
                    return <<<HTML
                    <div class='badge {$currentStatus['class']} font-size-12'>
                        {$currentStatus['label']}
                    </div>
                    HTML;
                }

                // Else show editable dropdown
                $nextStatus = $statusMap[$currentStatus['next']];
                return <<<HTML
                <div class='dropdown d-inline-block user-dropdown'>
                    <button type='button' class='btn text-dark waves-effect' id='page-header-user-dropdown' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        <div class='badge {$currentStatus['class']} font-size-12'>
                            <i class='fa fa-spin fa-spinner' style='display:none' id='$iconId'></i> {$currentStatus['label']}
                        </div>
                        <i class='fa fa-angle-down'></i>
                    </button>
                    <div class='dropdown-menu dropdown-menu-end p-2'>
                        <a class='dropdown-item' style='cursor:pointer;' onclick="changeStatus('id', '{$query->id}', 'status', '{$currentStatus['next']}', '{$tableName}')">
                            Change to {$nextStatus['label']}
                        </a>
                    </div>
                </div>
                HTML;
            })
            ->addColumn('action', function ($query) use ($tableName, $roleId) {

                if ($roleId == 3) {
                    return view('admin.roles.partials.userloanaction', compact('query', 'tableName'))->render();
                } else {
                    return view('admin.roles.partials.loanaction', compact('query', 'tableName'))->render();
                }
            })

            ->setRowId('id')
            ->rawColumns(['status', 'action']);
    }

    /**
     * Get the query source of dataTable.
     */
    // public function query(Loan $model): QueryBuilder
    // {
    //     $roleId = Auth::user()->role_id;
    //     $loggedInID = Auth::user()->id;
    //     if($roleId == 3){
    //         return $model->newQuery()->where('user_id', $loggedInID);
    //     }else if($roleId == 1){
    //         return $model->newQuery();
    //     }else{
    //         return $model->newQuery()->where('created_by', $loggedInID);
    //     }
    // }
    public function query(Loan $model): QueryBuilder
    {
        $query = $model->newQuery();
        $roleId = Auth::user()->role_id;
        $loggedInID = Auth::user()->id;

        if ($roleId == 3) {
            $query->where('user_id', $loggedInID);
        } elseif ($roleId != 1) {
            $query->where('created_by', $loggedInID);
        }

        if (request()->filled('from') && request()->filled('to')) {
            $from = \Carbon\Carbon::createFromFormat('d/m/Y', request('from'))->startOfDay(); // e.g., 01/05/2025 → 2025-05-01 00:00:00
            $to = \Carbon\Carbon::createFromFormat('d/m/Y', request('to'))->endOfDay();       // e.g., 07/05/2025 → 2025-05-07 23:59:59
            $query->whereBetween('date', [$from, $to]);
        }

        return $query;
    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('loan-table')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->dom('Bfrtip')
            ->orderBy(1)
            ->selectStyleSingle()
            ->buttons([
                Button::make('copy'),
                Button::make('csv'),
                Button::make('pdf'),
                Button::make('print'),
            ]);
    }


    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('id')->data('id')->searchable(false)->orderable(false),
            Column::make('loan_id')->title('Loan Id'),
            Column::make('title')->title('Title'),
            Column::make('amount')->title('Amount'),
            Column::computed('loan_period')->title('Loan Duration'),
            Column::computed('capital_interest')->title('Captial Interest'),
            // Column::make('purpose')->title('Purpose'),
            Column::make('notes')->title('Notes'),
            Column::make('date')->title('Date'),
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
        return 'Loan_' . date('YmdHis');
    }
}
