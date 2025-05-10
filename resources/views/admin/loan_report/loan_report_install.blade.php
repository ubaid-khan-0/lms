<x-app-layout :title="$title">
    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->


    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Loan Installment History</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Loan Installment History</a></li>
                                <li class="breadcrumb-item active">Loan Installment History </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">

                            <!-- <h4 class="card-title">Loan Installment History</h4> -->
                            <div class="row mb-3">
                                <div class="col-12 col-md-3 mb-2">
                                    <div class="form-group">
                                        <!-- <label class="form-label">From</label> -->
                                        <input type="text" id="from_date" class="form-control" placeholder="From - dd/mm/yyyy" data-provide="datepicker" data-date-autoclose="true" data-date-format="dd/mm/yyyy">
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-2">
                                    <div class="form-group">
                                        <!-- <label class="form-label">To</label> -->
                                        <input type="text" id="to_date" class="form-control" placeholder="To - dd/mm/yyyy" data-provide="datepicker" data-date-autoclose="true" data-date-format="dd/mm/yyyy">
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 mb-2">
                                    <button id="filter" class="btn btn-md btn-success">Search</button>
                                </div>




                            </div>
                            <div class="table-responsive">
                                <table id="loanReportTable" class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Loan</th>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Amount</th>
                                            <th>Payment Method</th>
                                            <th>Screenshot</th>
                                            <th>User</th>
                                            <th>Created At</th>
                                        </tr>
                                    </thead>
                                </table>



                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- end row -->

        </div> <!-- container-fluid -->
    </div>


</x-app-layout>

@push('scripts')


<script>
    $(document).ready(function() {
        $('#loanReportTable').DataTable({
            processing: true,
            serverSide: true,
            ajax: '{{ route("admin.loan.report.data.install") }}',
            lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
            pageLength: 10,
            dom: 'Bfrtip',
            buttons: [
                'copy', // Copy to clipboard
                'csv', // Export to CSV
                'pdf', // Export to PDF
                'print', // Print the table
            ],
            columns: [{
                    data: 'id'
                },
                {
                    data: 'loan_title',
                    name: 'loan.title'
                },
                {
                    data: 'title'
                },
                {
                    data: 'description'
                },
                {
                    data: 'amount'
                },
                {
                    data: 'payment_method'
                },
                {
                    data: 'screenshot',
                    orderable: false,
                    searchable: false
                },
                {
                    data: 'user_name',
                    name: 'user.name'
                },
                {
                    data: 'created_at'
                }
            ]
        });
    });
</script>

<!-- Required datatable js -->
<script src="{{asset('assets/libs/datatables.net/js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
<!-- Buttons examples -->
<script src="{{asset('assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js')}}"></script>
<script src="{{asset('assets/libs/jszip/jszip.min.js')}}"></script>
<script src="{{asset('assets/libs/pdfmake/build/pdfmake.min.js')}}"></script>
<script src="{{asset('assets/libs/pdfmake/build/vfs_fonts.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-buttons/js/buttons.html5.min.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-buttons/js/buttons.print.min.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-buttons/js/buttons.colVis.min.js')}}"></script>

<script src="{{asset('assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-select/js/dataTables.select.min.js')}}"></script>

<!-- Responsive examples -->
<script src="{{asset('assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js')}}"></script>
<script src="{{asset('assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js')}}"></script>

<!-- Datatable init js -->
<script src="{{asset('assets/js/pages/datatables.init.js')}}"></script>