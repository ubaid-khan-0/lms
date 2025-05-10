<x-app-layout :title="$title">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" rel="stylesheet">

        <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Loan History</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Forms</a></li>
                                    <li class="breadcrumb-item active">Loan History</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end page title -->
                <div class="container mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <strong>Capital Amount:</strong> {{ number_format($editloan->amount / 1000, 1) }}K
                    </div>
                    <div class="col-md-4">
                        <strong>Total Amount:</strong> 7.5K
                    </div>
                    <div class="col-md-4">
                        <strong>Collected Amount:</strong> {{ number_format($totalAmount/ 1000, 1) }}K
                    </div>
                </div>


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">

                                <!-- <h4 class="card-title">Loan History</h4> -->

                                <div class="table-responsive">
                                @php
                                  $oldInstallments = $installments ?? [];
                                @endphp

                                <form action="{{ route('admin.loans.saveHistory', $editloan->id) }}" method="POST" enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" name="user_id" value="{{ $editloan->user_id }}">

                                    <table class="table table-editable table-nowrap align-middle table-edits">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Amount</th>
                                                <th>Through Pay</th>
                                                <th>Screenshot (SS)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        @for ($i = 1; $i <= $editloan->loan_duration; $i++)
    @php
        $old = $oldInstallments[$i] ?? null;
    @endphp
    <tr>
        <td>{{ $i }}</td>
        <td>
        <input type="text" name="installments[{{ $i }}][date]" data-provide="datepicker" class="form-control datepicker"
     value="{{ $old && $old->date ? \Carbon\Carbon::parse($old->date)->format('d-m-Y') : '' }}"
     placeholder="dd-mm-yyyy">

        </td>
        <td>
            <input type="text" name="installments[{{ $i }}][title]" class="form-control"
                value="{{ $old->title ?? '' }}">
        </td>
        <td>
            <textarea name="installments[{{ $i }}][description]" class="form-control" rows="1">{{ $old && $old->description ? $old->description : '' }}</textarea>
        </td>
        <td>
            <input type="number" step="0.01" name="installments[{{ $i }}][amount]" class="form-control"
                value="{{ $old && $old->amount ? $old->amount : '' }}">
        </td>
        <td>
            <select name="installments[{{ $i }}][payment_method]" class="form-control">
                <option value="UPI" {{ $old && $old->payment_method == 'UPI' ? 'selected' : '' }}>UPI</option>
                <option value="Bank Transfer" {{ $old && $old->payment_method == 'Bank Transfer' ? 'selected' : '' }}>Bank Transfer</option>
            </select>
        </td>
        <td>
            @if ($old && $old->screenshot)
                <a href="{{ asset('storage/' . $old->screenshot) }}" target="_blank">View</a><br>
            @endif
            <input type="file" name="installments[{{ $i }}][screenshot]" class="form-control" accept="image/*">
        </td>
        <input type="hidden" name="installments[{{ $i }}][id]" value="{{ $old->id ?? '' }}">
    </tr>
@endfor

                                </tbody>

                                    </table>

                                    <button type="submit" class="btn btn-primary mt-3">Save Installments</button>
                                </form>

                </div>

            </div>
        </div>
    </div>
</div>

                <!-- end row -->

            </div> <!-- container-fluid -->
        </div>

   
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>

</x-app-layout>