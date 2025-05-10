<x-app-layout :title="$title">
    @push('css')
    <style>
        .dropify-wrapper {
            height: 150px !important;
        }

        .profile .dropify-wrapper {
            height: 200px !important;
        }

        .error {
            color: #fc5a69;
        }

        /* .upi-box {
            border: 1px dashed #aaa;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            margin-top: 10px;
        } */
    </style>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css" rel="stylesheet">

    @endpush
    <div id="main-content">
    <div class="page-content">
         <div class="container-fluid">
        <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Edit Loan</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Edit Loan</a></li>
                                    <li class="breadcrumb-item active">Edit Loan</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
            <div class="row clearfix">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <form id="loanForm" action="{{ route('admin.loans.update', $editrole->id) }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <div class="row g-3 clearfix">
                                    <div class="col-sm-12 col-md-12">
                                        <div class="row">
                                            <!-- User Selection -->
                                            <div class="col-6 mt-3">
                                                <label class="form-label">Select User <small class="text-danger">*</small></label>
                                                <select class="form-control select1" name="user_id">
                                                    <option value="">-- Select User --</option>
                                                    @foreach($users as $user)
                                                    <option value="{{ $user->id }}" {{ old('user_id', $editrole->user_id) == $user->id ? 'selected' : '' }}>
                                                        {{ $user->first_name }} {{ $user->last_name }}
                                                    </option>
                                                    @endforeach
                                                </select>
                                                @error('user_id') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Date -->
                                            <div class="mb-3 mt-3 col-6">
                                                <label class="form-label">Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true"
                                                    class="form-control" name="date" placeholder="dd/mm/yyyy"
                                                    data-date-format="dd/mm/yyyy"
                                                    value="{{ old('date', $editrole->date ? \Carbon\Carbon::parse($editrole->date)->format('d/m/Y') : '') }}" required>
                                                @error('date') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Loan Title -->
                                            <div class="col-12">
                                                <label class="form-label">Loan Title <small class="text-danger">*</small></label>
                                                <input type="text" class="form-control" name="title" value="{{ old('title', $editrole->title) }}" placeholder="Loan Title">
                                                @error('title') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Loan Description -->
                                            <div class="col-12 mt-3">
                                                <label class="form-label">Loan Description</label>
                                                <textarea class="form-control" name="notes" rows="3" placeholder="Loan description...">{{ old('notes', $editrole->notes) }}</textarea>
                                                @error('notes') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Capital Amount -->
                                            <div class="col-12 mt-3">
                                                <label class="form-label">Capital Amount (INR) <small class="text-danger">*</small></label>
                                                <input type="number" class="form-control" name="amount" id="capital_amount" value="{{ old('amount', $editrole->amount) }}" placeholder="Capital Amount" step="0.01" required>
                                                @error('amount') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Capital Interest -->
                                            <div class="col-12 mt-3">
                                                <label class="form-label">Capital Interest (%) <small class="text-danger">*</small></label>
                                                <input type="number" class="form-control" name="capital_interest" id="capital_interest" value="{{ old('capital_interest', $editrole->capital_interest) }}" placeholder="e.g. 5" step="0.01" required>
                                                @error('capital_interest') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Loan Duration -->
                                            <div class="col-12 mt-3">
                                                <label class="form-label">Loan Duration <small class="text-danger">*</small></label>
                                                <input type="text" class="form-control" name="loan_duration" value="{{ old('loan_duration', $editrole->loan_duration) }}" placeholder="e.g. 3M, 1Y" required>
                                                @error('loan_duration') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Apply Interest On -->
                                            <div class="col-12 mt-3">
                                                <label class="form-label">Apply Interest On <small class="text-danger">*</small></label>
                                                <select class="form-control" name="apply_interest_on" id="apply_interest_on" required>
                                                    <option value="">-- Select --</option>
                                                    <option value="year" {{ old('apply_interest_on', $editrole->apply_interest_on) == 'year' ? 'selected' : '' }}>Year</option>
                                                    <option value="month" {{ old('apply_interest_on', $editrole->apply_interest_on) == 'month' ? 'selected' : '' }}>Month</option>
                                                    <option value="day" {{ old('apply_interest_on', $editrole->apply_interest_on) == 'day' ? 'selected' : '' }}>Day</option>
                                                    <option value="hour" {{ old('apply_interest_on', $editrole->apply_interest_on) == 'hour' ? 'selected' : '' }}>Hour</option>
                                                </select>
                                                @error('apply_interest_on') <span class="text-danger">{{ $message }}</span> @enderror
                                            </div>

                                            <!-- Total Payable -->
                                            <div class="col-12 mt-3">
                                                <label class="form-label">Total Payable Amount (Auto Calculated)</label>
                                                <input type="text" class="form-control" id="total_with_interest" readonly name="total_with_interest" value="{{ old('total_with_interest', $editrole->total_with_interest) }}">
                                            </div>
                                        </div>
                                    </div>

                                   <div class="row mb-3 mt-3">
                                     <!-- Document Upload -->
                                     <div class="col-sm-12 col-md-4">
                                        <label class="form-label">Aadhar Card</label>
                                        @if($editrole->aadhar_card)
                                        <p>Current Document: <a href="{{ asset('storage/documents/' . $editrole->aadhar_card) }}" target="_blank">View</a></p>
                                        @endif
                                        <input type="file" id="dropify" class="dropify" name="aadhar_card">
                                        @error('aadhar_card') <span class="text-danger">{{ $message }}</span> @enderror
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <label class="form-label">PAN Card</label>
                                        @if($editrole->pan_card)
                                        <p>Current Document: <a href="{{ asset('storage/documents/' . $editrole->pan_card) }}" target="_blank">View</a></p>
                                        @endif
                                        <input type="file" id="dropify" class="dropify" name="pan_card">
                                        @error('pan_card') <span class="text-danger">{{ $message }}</span> @enderror
                                    </div>
                                   </div>

                                    <!-- Submit -->
                                    <div class="col-sm-12 mt-3">
                                        <button type="submit" class="btn btn-primary">Update</button>
                                        <a href="{{ route('admin.loans.index') }}" class="btn btn-outline-secondary">Cancel</a>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    @push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.select1').select2();
            $('.employeedoc').addClass('d-none');

        });
    </script>
    <script>
        function calculateTotalWithInterest() {
            const capital = parseFloat(document.getElementById('capital_amount').value) || 0;
            const interest = parseFloat(document.getElementById('capital_interest').value) || 0;

            const total = capital + (capital * interest / 100);
            document.getElementById('total_with_interest').value = total.toFixed(2);
        }

        document.getElementById('capital_amount').addEventListener('input', calculateTotalWithInterest);
        document.getElementById('capital_interest').addEventListener('input', calculateTotalWithInterest);
    </script>
    <script>
        $(document).on('input', 'input[name="mobile"]', function() {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });

        $(document).on('keypress', 'input, textarea', function(e) {
            if (this.value.length === 0 && e.which === 32) {
                e.preventDefault();
            }
        });
    </script>
    <script>
        $(document).on('input', 'input[name="alternate_mobile"]', function() {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });

        $(document).on('keypress', 'input, textarea', function(e) {
            if (this.value.length === 0 && e.which === 32) {
                e.preventDefault();
            }
        });
    </script>
    @endpush
</x-app-layout>