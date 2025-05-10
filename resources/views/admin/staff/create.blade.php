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
    @endpush
    <div id="main-content">


    <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Add User</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Add User</a></li>
                                    <li class="breadcrumb-item active">Add User</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <div class="card ">
                        <div class="card-body">
                            <form id="wizard_with_validation" class="form-validation" action="{{ route('admin.users.store') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <!-- <h3>Personal Information</h3> -->
                                <fieldset>
                                    <div class="row g-2">
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">First Name <small class="text-danger">*</small></label>
                                                <input type="text" name="first_name" placeholder="First Name *" class="form-control" value="{{ !empty($editemployee->first_name) ? $editemployee->first_name : old('first_name') }}" required>
                                                @error('first_name')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Last Name <small class="text-danger">*</small></label>
                                                <input type="text" name="last_name" placeholder="Last Name *" class="form-control" value="{{ !empty($editemployee->last_name) ? $editemployee->last_name : old('last_name') }}">
                                                @error('last_name')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Email ID <small class="text-danger">*</small></label>
                                                <input type="email" name="email" placeholder="Email ID  *" class="form-control" value="{{ !empty($editemployee->email) ? $editemployee->email : '' }}" required>
                                                @error('email')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Password<small class="text-danger">*</small></label>
                                                <input type="password" class="form-control" placeholder="Password *" name="password" id="password" value="old('password')" required>
                                                @error('password')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Mobile Number <small class="text-danger">*</small></label>
                                                <input type="number" name="mobile" placeholder="Mobile Number *" maxlength="10"
                                                    pattern="\d{10}" class="form-control" value="{{ !empty($editemployee->mobile) ? $editemployee->mobile : old('mobile') }}">
                                                @error('mobile')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Alternate Number <small class="text-danger">*</small></label>
                                                <input type="number" name="alternate_mobile" placeholder="Alternate Number *" class="form-control" value="{{ !empty($editemployee->alternate_mobile) ? $editemployee->alternate_mobile : old('alternate_mobile') }}">
                                                @error('alternate_mobile')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Gender <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" name="gender" required>
                                                    <option value="" disabled {{ old('gender', $editemployee->gender ?? '') == '' ? 'selected' : '' }}>Choose Gender</option>
                                                    <option value="m" {{ old('gender', $editemployee->gender ?? '') == 'm' ? 'selected' : '' }}>Male</option>
                                                    <option value="f" {{ old('gender', $editemployee->gender ?? '') == 'f' ? 'selected' : '' }}>Female</option>
                                                    <option value="o" {{ old('gender', $editemployee->gender ?? '') == 'o' ? 'selected' : '' }}>Other</option>
                                                </select>
                                                @error('gender')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Marital Status <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" name="marital_status" required>
                                                    <option value="" disabled {{ old('marital_status', $editemployee->marital_status ?? '') == '' ? 'selected' : '' }}>Marital Status</option>
                                                    <option value="married" {{ old('marital_status', $editemployee->marital_status ?? '') == 'married' ? 'selected' : '' }}>Married</option>
                                                    <option value="unmarried" {{ old('marital_status', $editemployee->marital_status ?? '') == 'unmarried' ? 'selected' : '' }}>Unmarried</option>
                                                </select>
                                                @error('marital_status')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">User Category <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" id="employee_category" name="employee_category" onchange="getCompanyDoc()" required>
                                                    <option value="" disabled {{ old('employee_category	', $editemployee->employee_category	 ?? '') == '' ? 'selected' : '' }}>User Category</option>
                                                    <option value="employee" {{ old('employee_category	', $editemployee->employee_category	 ?? '') == 'married' ? 'selected' : '' }}>Employee</option>
                                                    <option value="studdent" {{ old('employee_category	', $editemployee->employee_category	 ?? '') == 'unmarried' ? 'selected' : '' }}>Student</option>
                                                </select>
                                                @error('marital_status')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Aadhar Number <small class="text-danger">*</small></label>
                                                <input type="text" name="aadharnumber" placeholder="Aadhar Number *" class="form-control" value="{{ !empty($editemployee->aadharno) ? $editemployee->aadharno : old('aadharnumber') }}" required>
                                                @error('aadharnumber')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Pan Number <small class="text-danger">*</small></label>
                                                <input type="text" name="pannumber" placeholder="Pan Number *" class="form-control" value="{{ !empty($editemployee->pancardno) ? $editemployee->pancardno : old('pannumber') }}" required>
                                                @error('pannumber')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Date of Birth <small class="text-danger">*</small></label>
                                                <input type="date" data-provide="datepicker" data-date-autoclose="true" class="form-control" name="dob" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" value="{{ !empty($editemployee->dob) ? $editemployee->dob : old('dob') }}" required>
                                                @error('dob')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <!-- <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Aadhar Card <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="aadhar" required>
                                                @error('aadhar')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Pan card <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="pancard" required>
                                                @error('pancard')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Domicile Certificate <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="domicile" required>
                                                @error('domicile')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Profile <small class="text-danger">*</small></label>
                                                <input type="file" id="dropify-event" class="dropify" name="icon" data-default-file="{{ !empty($editemployee->icon) ? asset('storage/'.$editemployee->icon) : '' }}" required />
                                                @error('icon')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div> -->
                                        <div class="mb-3 col-sm-12 col-lg-12">
                                            <div class="form-group">
                                                <label class="form-label">Role <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" onchange="toggleDiv(this.value)" name="role_id" required>
                                                    <option value="">Choose Role</option>
                                                    @foreach($roles as $role)
                                                    <option value="{{ $role->id }}">{{ $role->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <!-- <h3>Address Information</h3>
                                <fieldset>
                                    <div class="row g-2">
                                        <h6 class="card-title">Residential Address</h6>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Residential Address <small class="text-danger">*</small></label>
                                                <textarea name="address" id="residential_address" cols="30" rows="4" placeholder="Address *" class="form-control no-resize pt-3" required>{{ !empty($editemployee->address) ? $editemployee->address : old('address') }} </textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-8">
                                            <div class="row g-2">
                                                <div class="mb-1 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Country <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="country_id" id="country_id" onchange="setStates()" required>
                                                            <option value="">Choose Country</option>
                                                            @foreach($countries as $country)
                                                            <option value="{{ $country->id }}" @if(!empty($editemployee) && $editemployee->country_id == $country->id) selected @endif>{{ $country->name }}</option>
                                                            @endforeach
                                                        </select>
                                                        @error('country_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>

                                                <div class="mb-1 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">State <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="state_id" id="state_id" onchange="setCities()" required>
                                                            <option selected>Choose Country First</option>
                                                        </select>
                                                        @error('state_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">City <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="city_id" id="city_id">
                                                            <option selected>Choose State First</option>
                                                        </select>
                                                        @error('city_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Pincode <small class="text-danger">*</small></label>
                                                        <input type="number" class="form-control" name="pincode" id="pincode" placeholder="Pincode" value="{{ !empty($editemployee->pincode) ? $editemployee->pincode : old('pincode') }}" required>
                                                        @error('pincode')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="card-title">Permanent Address</h6>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <div class="d-flex">
                                                    <div class="form-check">
                                                        <input type="checkbox" name="setaddress"
                                                            id="setaddress"
                                                            value="1" onclick="setpermanentaddress()"> Same as Residential Address
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Permanent Address <small class="text-danger">*</small></label>
                                                <textarea name="permanentaddress" id="permanent_address" cols="30" rows="4" placeholder="Address *" class="form-control no-resize pt-3" required>{{ !empty($editemployee->address) ? $editemployee->address : old('address') }}</textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-8">
                                            <div class="row g-2">
                                                <div class="mb-1 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Country <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="pcountry_id" id="permanent_country_id" onchange="setPermanentstates()" required>
                                                            <option selected disabled value="">Choose Country</option>
                                                            @foreach($countries as $pcountry)
                                                            <option value="{{ $pcountry->id }}" @if(!empty($editemployee) && $editemployee->pcountry_id == $pcountry->id) selected @endif>{{ $pcountry->name }}</option>
                                                            @endforeach
                                                        </select>
                                                        @error('pcountry_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-1 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">State <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="pstate_id" id="permanent_state_id" onchange="setPermanentcities()" required>
                                                            <option selected disabled value="">Choose Country First</option>
                                                        </select>
                                                        @error('pstate_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">City <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="pcity_id" id="permanent_city_id" required>
                                                            <option selected disabled value="">Choose State First</option>
                                                        </select>
                                                        @error('pcity_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Pincode <small class="text-danger">*</small></label>
                                                        <input type="number" class="form-control" name="permanent_pincode" id="permanent_pincode" placeholder="Pincode" value="{{ !empty($editemployee->pincode) ? $editemployee->pincode : old('pincode') }}" required>
                                                        @error('permanent_pincode')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <h3>Company Information</h3>
                                <fieldset>
                                    <div class="row g-2">
                                        <div class="col-md-4 col-sm-12">
                                            <div class="form-group">
                                                <label class="form-label">Company Name <small class="text-danger">*</small></label>
                                                <select id="company_id" class="form-select select1" aria-label="Default select example" name="company_id" onchange="setDepartment()" required>
                                                    <option value="">Choose Company Name</option>
                                                    @foreach($companies as $company)
                                                    <option value="{{ $company->id }}"> {{ $company->company_name }} </option>
                                                    @endforeach()
                                                </select>
                                                @error('company_id')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12">
                                            <div class="form-group">
                                                <label class="form-label">Department Name <small class="text-danger">*</small></label>
                                                <select id="department_id" class="form-select select1" aria-label="Default select example" name="department_id" onchange="setDesignation()" required>
                                                    <option value="">First Choose Company Name</option>
                                                </select>
                                                @error('department_id')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12">
                                            <div class="form-group">
                                                <label class="form-label">Designation Name <small class="text-danger">*</small></label>
                                                <select id="designation_id" class="form-select select1" aria-label="Default select example" name="designation_id" required>
                                                    <option value="">First Choose Department Name</option>
                                                </select>
                                                @error('designation_id')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Join Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" name="joindate" value="{{ old('joindate') }}" required>
                                                @error('joindate')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Confirmation Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" name="confirmationdate" value="{{ old('confirmationdate') }}" disabled>
                                                @error('confirmationdate')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Exit Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" name="exitdate" value="{{ old('exitdate') }}" required>
                                                @error('exitdate')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Role <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" name="role_id" required>
                                                    <option value="">Choose Role</option>
                                                    @foreach($roles as $role)
                                                    <option value="{{ $role->name }}" @if(!empty($editemployee) && $editemployee->role_id == $role->name) selected @endif>{{ $role->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row g-2 employeedoc">
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Experience Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="experience_letter" value="{{ old('experience_letter') }}">
                                                @error('experience_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Offer Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="offer_letter" value="{{ old('offer_letter') }}" required>
                                                @error('offer_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Revealing Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="revealing_letter">
                                                @error('revealing_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Joining Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="joining_letter">
                                                @error('joining_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </fieldset> -->
                                <div class="mb-3" style="display:none;" id="BankDetails">
                                    <h3>Bank Information</h3>
                                    <fieldset>
                                        <div class="row g-2">
                                            <!-- <h6 class="card-title">Bank Information</h6> -->

                                            {{-- Bank Name --}}
                                            <div class="mb-3 col-sm-12 col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Bank Name <small class="text-danger">*</small></label>
                                                    <input type="text" class="form-control" placeholder="Bank Name  *" name="bankname" value="{{ !empty($editemployee->bankname) ? $editemployee->bankname : old('bankname') }}">
                                                    @error('bankname')
                                                    <span class="text-danger">{{ $message }}</span>
                                                    @enderror
                                                </div>
                                            </div>

                                            {{-- Account Number --}}
                                            <div class="mb-3 col-sm-12 col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Account Number <small class="text-danger">*</small></label>
                                                    <input type="text" class="form-control" placeholder="Account Number*" name="accountnumber" value="{{ !empty($editemployee->accountnumber) ? $editemployee->accountnumber : old('accountnumber') }}">
                                                    @error('accountnumber')
                                                    <span class="text-danger">{{ $message }}</span>
                                                    @enderror
                                                </div>
                                            </div>

                                            {{-- IFSC Code --}}
                                            <div class="mb-3 col-sm-12 col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">IFSC code <small class="text-danger">*</small></label>
                                                    <input type="text" class="form-control" placeholder="IFSC code*" name="ifsccode" value="{{ old('ifsccode') }}">
                                                    @error('ifsccode')
                                                    <span class="text-danger">{{ $message }}</span>
                                                    @enderror
                                                </div>
                                            </div>

                                            {{-- Bank Address --}}
                                            <div class="mb-3 col-sm-12 col-lg-12">
                                                <div class="form-group">
                                                    <label class="form-label">Bank Address <small class="text-danger">*</small></label>
                                                    <textarea name="bankaddress" placeholder=" Bank Address *" class="form-control no-resize" rows="5">{{ old('bankaddress') }}</textarea>
                                                    @error('bankaddress')
                                                    <span class="text-danger">{{ $message }}</span>
                                                    @enderror
                                                </div>
                                            </div>

                                            {{-- UPI Section --}}
                                            <div class="col-12 mt-4">
                                                <div>
                                                    <h6 class="mb-3 text-muted">OR enter UPI ID if bank details are not available</h6>
                                                    <div class="row">
                                                        <div class="mb-3 col-sm-12 col-lg-4">
                                                            <div class="form-group">
                                                                <label class="form-label">UPI ID</label>
                                                                <input type="text" class="form-control" placeholder="UPI ID" name="upi_id" value="{{ !empty($editemployee->upi_id) ? $editemployee->upi_id : old('upi_id') }}">
                                                                @error('upi_id')
                                                                <span class="text-danger">{{ $message }}</span>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>
                                <div class="row my-2">
                                    <div class="col-md-12">
                                        <button class="mt-3 btn btn-primary form-btn" id="videoBtn" type="submit">SAVE <i class="fa fa-spin fa-spinner" id="videoSpin" style="display:none;"></i></button>
                                        <a class="text-white mt-3 btn btn-danger form-btn" href="{{ route('admin.users.index')}}">Cancel</a>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <!-- end row -->
            </div> <!-- container-fluid -->
        </div>


    </div>

    @push('scripts')
    <script>
        $(document).ready(function() {
            $('.select1').select2();
            $('.employeedoc').addClass('d-none');

        });
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






  