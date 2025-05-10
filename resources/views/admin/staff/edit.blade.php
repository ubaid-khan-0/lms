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
    </style>
    @endpush
    <div id="main-content">

        <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Edit User</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Edit User</a></li>
                                    <li class="breadcrumb-item active">Edit User</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
         
            <div class="row clearfix">
                <div class="col-12">
                    <div class="card form-card">
                        <div class="card-body">
                            <form id="wizard_with_validation" class="form-validation" action="{{ route('admin.users.update', $editstaff->id) }}" method="post" enctype="multipart/form-data">
                                @csrf
                                @method('PUT')
                                <h3>Personal Information</h3>
                                <fieldset>
                                    <div class="row g-2">
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">First Name <small class="text-danger">*</small></label>
                                                <input type="text" name="first_name" placeholder="First Name *" class="form-control" value="{{ !empty($editstaff->first_name) ? $editstaff->first_name : old('first_name') }}" required>
                                                <input type="hidden" name="id"  value="{{$editstaff->id}}" >
                                                @error('first_name')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Last Name <small class="text-danger">*</small></label>
                                                <input type="text" name="last_name" placeholder="Last Name *" class="form-control" value="{{ !empty($editstaff->last_name) ? $editstaff->last_name : old('last_name') }}">
                                                @error('last_name')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Email ID <small class="text-danger">*</small></label>
                                                <input type="email" name="email" placeholder="Email ID  *" class="form-control" value="{{ !empty($editstaff->email) ? $editstaff->email : '' }}" required>
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
                                                    pattern="\d{10}" class="form-control" value="{{ !empty($editstaff->mobile) ? $editstaff->mobile : old('mobile') }}">
                                                @error('mobile')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Alternate Number <small class="text-danger">*</small></label>
                                                <input type="number" name="alternate_mobile" placeholder="Alternate Number *" class="form-control" value="{{ !empty($editstaff->alternate_mobile) ? $editstaff->alternate_mobile : old('alternate_mobile') }}">
                                                @error('alternate_mobile')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Gender <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" name="gender" required>
                                                    <option value="" disabled {{ old('gender', $editstaff->gender ?? '') == '' ? 'selected' : '' }}>Choose Gender</option>
                                                    <option value="m" {{ old('gender', $editstaff->gender ?? '') == 'm' ? 'selected' : '' }}>Male</option>
                                                    <option value="f" {{ old('gender', $editstaff->gender ?? '') == 'f' ? 'selected' : '' }}>Female</option>
                                                    <option value="o" {{ old('gender', $editstaff->gender ?? '') == 'o' ? 'selected' : '' }}>Other</option>
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
                                                    <option value="" disabled {{ old('marital_status', $editstaff->marital_status ?? '') == '' ? 'selected' : '' }}>Marital Status</option>
                                                    <option value="married" {{ old('marital_status', $editstaff->marital_status ?? '') == 'married' ? 'selected' : '' }}>Married</option>
                                                    <option value="unmarried" {{ old('marital_status', $editstaff->marital_status ?? '') == 'unmarried' ? 'selected' : '' }}>Unmarried</option>
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
                                                    <option value="" disabled {{ old('employee_category	', $editstaff->employee_category	 ?? '') == '' ? 'selected' : '' }}>User Category</option>
                                                    <option value="employee" {{ old('employee_category	', $editstaff->employee_category	 ?? '') == 'employee' ? 'selected' : '' }}>Employee</option>
                                                    <option value="student" {{ old('employee_category	', $editstaff->employee_category	 ?? '') == 'student' ? 'selected' : '' }}>Student</option>
                                                </select>
                                                @error('marital_status')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Aadhar Number <small class="text-danger">*</small></label>
                                                <input type="text" name="aadharnumber" placeholder="Aadhar Number *" class="form-control" value="{{ !empty($editstaff->aadhar_number) ? $editstaff->aadhar_number : old('aadharnumber') }}" required>
                                                @error('aadharnumber')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Pan Number <small class="text-danger">*</small></label>
                                                <input type="text" name="pannumber" placeholder="Pan Number *" class="form-control" value="{{ !empty($editstaff->pan_number) ? $editstaff->pan_number : old('pannumber') }}" required>
                                                @error('pannumber')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Date of Birth <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" name="dob" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" value="{{ !empty($editstaff->dob) ? $editstaff->dob : old('dob') }}" required>
                                                @error('dob')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <!-- <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Aadhar Card <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="aadhar" data-default-file="{{ !empty($editstaff->aadhar_certificate) ? asset('storage/'.$editstaff->aadhar_certificate) : '' }}">
                                                @error('aadhar')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Pan card <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="pancard" data-default-file="{{ !empty($editstaff->pan_certificate) ? asset('storage/'.$editstaff->pan_certificate) : '' }}">
                                                @error('pancard')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Domicile Certificate <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="domicile" data-default-file="{{ !empty($editstaff->domicile) ? asset('storage/'.$editstaff->domicile) : '' }}">
                                                @error('domicile')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Profile <small class="text-danger">*</small></label>
                                                <input type="file" id="dropify-event" class="dropify" name="icon" data-default-file="{{ !empty($editstaff->icon) ? asset('storage/'.$editstaff->icon) : '' }}" />
                                                @error('icon')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div> -->
                                    </div>
                                </fieldset>
                                <!-- <h3>Address Information</h3>
                                <fieldset>
                                    <div class="row g-2">
                                        <h6 class="card-title">Residential Address</h6>
                                        <div class="mb-3 col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Residential Address <small class="text-danger">*</small></label>
                                                <textarea name="address" id="residential_address" cols="30" rows="4" placeholder="Address *" class="form-control no-resize pt-3" required>{{ !empty($editstaff->r_address) ? $editstaff->r_address : old('address') }} </textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-lg-8">
                                            <div class="row g-2">
                                                <div class="mb-1 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Country <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="country_id" id="country_id" onchange="setStates()">
                                                            <option value="">Choose Country</option>
                                                            @foreach($countries as $country)
                                                            <option value="{{ $country->id }}" @if(!empty($editstaff) && $editstaff->r_country == $country->id) selected @endif>{{ $country->name }}</option>
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
                                                        <select class="form-select select1" aria-label="Default select example" name="state_id" id="state_id" onchange="setCities()">
                                                            <option selected>Choose Country First</option>
                                                            @forelse($states as $state)
                                                            <option value="{{ $state->id }}" @if(!empty($editstaff) && $editstaff->r_state == $state->id) selected @endif> {{ $state->name }} </option>
                                                            @empty
                                                            @endforelse
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
                                                            @forelse($cities as $city)
                                                            <option value="{{ $city->id }}" @if(!empty($editstaff) && $editstaff->r_city == $city->id) selected @endif> {{ $city->name }} </option>
                                                            @empty
                                                            @endforelse
                                                        </select>
                                                        @error('city_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Pincode <small class="text-danger">*</small></label>
                                                        <input type="number" class="form-control" name="pincode" id="pincode" placeholder="Pincode" value="{{ !empty($editstaff->r_pincode) ? $editstaff->r_pincode : old('pincode') }}">
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
                                                <textarea name="permanentaddress" id="permanent_address" cols="30" rows="4" placeholder="Address *" class="form-control no-resize pt-3" required>{{ !empty($editstaff->p_address) ? $editstaff->p_address : old('permanentaddress') }}</textarea>
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-8">
                                            <div class="row g-2">
                                                <div class="mb-1 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Country <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="pcountry_id" id="permanent_country_id" onchange="setPermanentstates()">
                                                            <option selected disabled value="">Choose Country</option>
                                                            @foreach($countries as $pcountry)
                                                            <option value="{{ $pcountry->id }}" @if(!empty($editstaff) && $editstaff->p_country == $pcountry->id) selected @endif>{{ $pcountry->name }}</option>
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
                                                        <select class="form-select select1" aria-label="Default select example" name="pstate_id" id="permanent_state_id" onchange="setPermanentcities()">
                                                            <option selected disabled value="">Choose Country First</option>
                                                            @forelse($states as $pstate)
                                                            <option value="{{ $pstate->id }}" @if(!empty($editstaff) && $editstaff->p_state == $pstate->id) selected @endif> {{ $pstate->name }} </option>
                                                            @empty
                                                            @endforelse
                                                        </select>
                                                        @error('pstate_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">City <small class="text-danger">*</small></label>
                                                        <select class="form-select select1" aria-label="Default select example" name="pcity_id" id="permanent_city_id">
                                                            <option selected disabled value="">Choose State First</option>
                                                            @forelse($cities as $pcity)
                                                            <option value="{{ $pcity->id }}" @if(!empty($editstaff) && $editstaff->p_city == $pcity->id) selected @endif> {{ $pcity->name }} </option>
                                                            @empty
                                                            @endforelse
                                                        </select>
                                                        @error('pcity_id')
                                                        <span class="text-danger">{{ $message }}</span>
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="mb-3 col-sm-12 col-lg-6">
                                                    <div class="form-group">
                                                        <label class="form-label">Pincode <small class="text-danger">*</small></label>
                                                        <input type="number" class="form-control" name="permanent_pincode" id="permanent_pincode" placeholder="Pincode" value="{{ !empty($editstaff->p_pincode) ? $editstaff->p_pincode : old('permanent_pincode') }}">
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
                                                <select id="company_id" class="form-select select1" aria-label="Default select example" name="company_id" onchange="setDepartment()">
                                                    <option value="">Choose Company Name</option>
                                                    @foreach($companies as $company)
                                                    <option value="{{ $company->id }}" @if(!empty($editstaff) && $editstaff->company_id == $company->id) selected @endif> {{ $company->company_name }} </option>
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
                                                <select id="department_id" class="form-select select1" aria-label="Default select example" name="department_id" onchange="setDesignation()">
                                                    <option value="">First Choose Company Name</option>
                                                    @forelse($departments as $department)
                                                    <option value="{{ $department->id }}" @if(!empty($editstaff) && $editstaff->department_id == $department->id) selected @endif> {{ $department->department_name }} </option>
                                                    @empty
                                                    @endforelse
                                                </select>
                                                @error('department_id')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-12">
                                            <div class="form-group">
                                                <label class="form-label">Designation Name <small class="text-danger">*</small></label>
                                                <select id="designation_id" class="form-select select1" aria-label="Default select example" name="designation_id">
                                                    <option value="">First Choose Department Name</option>
                                                    @forelse($designations as $designation)
                                                    <option value="{{ $designation->id }}" @if(!empty($editstaff) && $editstaff->designation_id == $designation->id) selected @endif> {{ $designation->designation_name }} </option>
                                                    @empty
                                                    @endforelse
                                                </select>
                                                @error('designation_id')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Join Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" name="joindate" value="{{ !empty($editstaff->joining_date) ? $editstaff->joining_date : old('joindate') }}">
                                                @error('joindate')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Confirmation Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" name="confirmationdate" value="{{ !empty($editstaff->confirmation_date) ? $editstaff->confirmation_date : old('confirmationdate') }}">
                                                @error('confirmationdate')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Exit Date <small class="text-danger">*</small></label>
                                                <input type="text" data-provide="datepicker" data-date-autoclose="true" class="form-control" placeholder="dd/mm/yyyy" data-date-format="dd/mm/yyyy" name="exitdate" value="{{ !empty($editstaff->exit_date) ? $editstaff->exit_date : old('exitdate') }}">
                                                @error('exitdate')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>-->
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Role <small class="text-danger">*</small></label>
                                                <select class="form-select select1" aria-label="Default select example" name="role_id">
                                                    <option value="">Choose Role</option>
                                                    @foreach($roles as $role)
                                                    <option value="{{ $role->name }}" @if(!empty($editstaff) && $editstaff->role_id == $role->id) selected @endif>{{ $role->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>

                                    <!--</div>
                                    <div class="row g-2 employeedoc">
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Experience Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="experience_letter" data-default-file="{{ !empty($editstaff->experience_letter) ? asset('storage/'.$editstaff->experience_letter) : '' }}">
                                                @error('experience_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Offer Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="offer_letter" data-default-file="{{ !empty($editstaff->offer_letter) ? asset('storage/'.$editstaff->offer_letter) : '' }}">
                                                @error('offer_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Revealing Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="revealing_letter" data-default-file="{{ !empty($editstaff->revealing_letter) ? asset('storage/'.$editstaff->revealing_letter) : '' }}">
                                                @error('revealing_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3 col-sm-12 col-lg-3">
                                            <div class="form-group">
                                                <label class="form-label">Joining Letter <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="joining_letter" data-default-file="{{ !empty($editstaff->joining_letter) ? asset('storage/'.$editstaff->joining_letter) : '' }}">
                                                @error('joining_letter')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </fieldset> -->
                                <h3>Bank Information</h3>
                                <fieldset>
                                    <div class="row g-2">
                                        <!-- <h6 class="card-title">Bank Information</h6> -->
                                        <div class="mb-3  col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Bank Name <small class="text-danger">*</small></label>
                                                <input type="text" class="form-control" placeholder="Bank Name  *" name="bankname" value="{{ !empty($editstaff->bankname) ? $editstaff->bankname : old('bankname') }}">
                                                @error('bankname') 
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Account Number <small class="text-danger">*</small></label>
                                                <input type="text" class="form-control" placeholder="Account Number*" name="accountnumber" value="{{ !empty($editstaff->accountnumber) ? $editstaff->accountnumber : old('accountnumber') }}">
                                                @error('accountnumber')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">IFSC code <small class="text-danger">*</small></label>
                                                <input type="text" class="form-control" placeholder="IFSC code*" name="ifsccode" value="{{ !empty($editstaff->ifsccode) ? $editstaff->ifsccode : old('ifsccode') }}">
                                                @error('ifsccode')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-12">
                                            <div class="form-group">
                                                <label class="form-label">Bank Address <small class="text-danger">*</small></label>
                                                <textarea name="bankaddress" placeholder=" Bank Address *" class="form-control no-resize" rows="5"> {{ !empty($editstaff->bankaddress) ? $editstaff->bankaddress : old('bankaddress') }}</textarea>
                                                @error('bankaddress')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>

                                        {{-- UPI Section --}}
                                            <div class="col-12 mt-4">
                                                <div >
                                                    <h6 class="mb-3 text-muted">OR enter UPI ID if bank details are not available</h6>
                                                    <div class="row">
                                                        <div class="mb-3 col-sm-12 col-lg-4">
                                                            <div class="form-group">
                                                                <label class="form-label">UPI ID</label>
                                                                <input type="text" class="form-control" placeholder="UPI ID" name="upi_id" value="{{ !empty($editstaff->upi_id) ? $editstaff->upi_id : old('upi_id') }}">
                                                                @error('upi_id')
                                                                <span class="text-danger">{{ $message }}</span>
                                                                @enderror
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <!-- <div class="mb-3  col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Bank Document1 <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="bankdoc1" data-default-file="{{ !empty($editstaff->bankdoc1) ? asset('storage/'.$editstaff->bankdoc1) : '' }}">
                                                @error('bankdoc1')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>

                                        </div>
                                        <div class="mb-3  col-sm-12 col-lg-4">
                                            <div class="form-group">
                                                <label class="form-label">Bank Document2 <small class="text-danger">*</small></label>
                                                <input type="file" class="dropify" name="bankdoc2" data-default-file="{{ !empty($editstaff->bankdoc2) ? asset('storage/'.$editstaff->bankdoc2) : '' }}">
                                                @error('bankdoc2')
                                                <span class="text-danger">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div> -->
                                        <!-- <h6 class="card-title">Education Information</h6>
                                        <div id="req_input" class="datainputs">
                                            @forelse ($staffEducationDocuments as $key => $doc)
                                            <div class="row g-2 required_inp">
                                                <div class="mb-3 col-sm-12 col-lg-4">
                                                    <div class="form-group">
                                                        <label class="form-label">Document Type <small class="text-danger">*</small></label>
                                                        <select class="form-select document-type-select" name="document_type[]">
                                                            <option value="">Document Type</option>
                                                            <option value="highschool" {{ $doc->document_type == 'highschool' ? 'selected' : '' }}>High School</option>
                                                            <option value="intermediate" {{ $doc->document_type == 'intermediate' ? 'selected' : '' }}>Intermediate</option>
                                                            <option value="graduation" {{ $doc->document_type == 'graduation' ? 'selected' : '' }}>Graduation</option>
                                                            <option value="others" {{ $doc->document_type == 'others' ? 'selected' : '' }}>Others</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-3 col-sm-12 col-lg-4 document-name-group {{ $doc->document_type == 'others' ? '' : 'd-none' }}">
                                                    <div class="form-group">
                                                        <label class="form-label">Document Name <small class="text-danger">*</small></label>
                                                        <input type="text" class="form-control" name="document_name[]" value="{{ $doc->document_name }}" placeholder="Enter Document Name">
                                                    </div>
                                                </div>

                                                <div class="mb-3 col-sm-11 col-lg-3">
                                                    <div class="form-group">
                                                        <label class="form-label">Certificate <small class="text-danger">*</small></label>
                                                        <input type="file" class="form-control" name="certificate[]">
                                                        @if($doc->certificate)
                                                        <small class="text-muted d-block mt-1">Uploaded:

                                                            <a href="{{ asset('storage/'.$doc->certificate) }}" target="_blank">
                                                                <img src="{{ asset('storage/'.$doc->certificate) }}" alt="Certificate" style="width: 50px; height: 50px; border-radius: 5px;">
                                                            </a>
                                                        </small>
                                                        @endif
                                                    </div>
                                                </div>

                                                <div class="mb-3 col-sm-1 col-lg-1 align-self-center">
                                                    <label class="form-label"></label>
                                                    <div class="form-group button-group d-flex">
                                                        <a class="btn btn-sm btn-outline-primary add_input" title="Add"><i class="fa fa-plus-circle"></i></a>
                                                        @if ($loop->index > 0)
                                                        <a class="btn btn-sm btn-outline-danger remove_input ms-1" title="Remove"><i class="fa fa-minus-circle"></i></a>
                                                        @endif
                                                    </div>
                                                </div>
                                            </div>
                                            @empty
                                            <div class="row g-2 required_inp">
                                                <div class="mb-3 col-sm-12 col-lg-4">
                                                    <div class="form-group">
                                                        <label class="form-label">Document Type <small class="text-danger">*</small></label>
                                                        <select class="form-select document-type-select" name="document_type[]">
                                                            <option value="">Document Type</option>
                                                            <option value="highschool">High School</option>
                                                            <option value="intermediate">Intermediate</option>
                                                            <option value="graduation">Graduation</option>
                                                            <option value="others">Others</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-3 col-sm-12 col-lg-4 document-name-group d-none">
                                                    <div class="form-group">
                                                        <label class="form-label">Document Name <small class="text-danger">*</small></label>
                                                        <input type="text" class="form-control" name="document_name[]" placeholder="Enter Document Name">
                                                    </div>
                                                </div>

                                                <div class="mb-3 col-sm-11 col-lg-3">
                                                    <div class="form-group">
                                                        <label class="form-label">Certificate <small class="text-danger">*</small></label>
                                                        <input type="file" class="form-control" name="certificate[]">
                                                    </div>
                                                </div>

                                                <div class="mb-3 col-sm-1 col-lg-1 align-self-center">
                                                    <label class="form-label"></label>
                                                    <div class="form-group button-group d-flex">
                                                        <a class="btn btn-sm btn-outline-primary add_input" title="Add"><i class="fa fa-plus-circle"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            @endforelse
                                        </div> -->

                                        <div class="row my-2">
                                            <div class="col-md-12">
                                                <button class="mt-3 btn btn-primary form-btn"  type="submit">UPDATE </button>
                                                <a class="text-white mt-3 btn btn-danger form-btn" href="{{ route('admin.users.index')}}">Cancel</a>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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