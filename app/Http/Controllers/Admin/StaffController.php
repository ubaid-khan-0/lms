<?php

namespace App\Http\Controllers\Admin;

use App\DataTables\StaffDataTable;
use App\Http\Controllers\Controller;
use App\Traits\FileUploadTrait;
use App\Http\Requests\SubmitStaffRequest;
use App\Http\Requests\UpdateStaffRequeat;
use App\Models\city;
use App\Models\Company;
use App\Models\country;
use App\Models\Department;
use App\Models\Designation;
use Spatie\Permission\Models\Role;
use App\Models\Staff;
use Illuminate\Support\Facades\DB;
use App\Models\StaffEducationDocument;
use App\Models\state;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Support\Facades\Auth;


class StaffController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view_users', only: ['index']),
            new Middleware('permission:add_users', only: ['create', 'store']),
            new Middleware('permission:edit_users', only: ['edit', 'update']),
            new Middleware('permission:delete_users', only: ['destroy']),
        ];
    }
    use FileUploadTrait;
    /**
     * Display a listing of the resource.
     */
    public function index(StaffDataTable $datatable)
    {
        $data['title'] = 'LoanJar :: Users';
        return $datatable->render('admin.staff.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $data['title'] = 'LoanJar :: Create User';
        $data['countries'] = country::get();
        $data['companies'] = Company::where('status', 1)->get();
        $data['departments'] = Department::where('status', 1)->get();
        if (Auth::user()->role_id == 2) {
            $data['roles'] = Role::where('status', 1)
                                 ->whereNotIn('id', [1, 2])
                                 ->get();
        } else {
            $data['roles'] = Role::where('status', 1)->get();
        }
        return view('admin.staff.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(SubmitStaffRequest $request)
    {

        // dd(Auth::user()->id);
        DB::beginTransaction();
        try {
            // Upload files
            $iconPath = $request->hasFile('icon') ? $this->uploadFile($request->file('icon'), 'admin') : null;
            $aadharPath = $request->hasFile('aadhar') ? $this->uploadFile($request->file('aadhar'), 'personaldocument') : null;
            $pancardPath = $request->hasFile('pancard') ? $this->uploadFile($request->file('pancard'), 'personaldocument') : null;
            $domicilePath = $request->hasFile('domicile') ? $this->uploadFile($request->file('domicile'), 'personaldocument') : null;
            $bankdoc1Path = $request->hasFile('bankdoc1') ? $this->uploadFile($request->file('bankdoc1'), 'bankdocument') : null;
            $bankdoc2Path = $request->hasFile('bankdoc2') ? $this->uploadFile($request->file('bankdoc2'), 'bankdocument') : null;
            $experienceletterPath = $request->hasFile('experience_letter') ? $this->uploadFile($request->file('experience_letter'), 'companydocument') : null;
            $offerletterPath = $request->hasFile('offer_letter') ? $this->uploadFile($request->file('offer_letter'), 'companydocument') : null;
            $revealingletterPath = $request->hasFile('revealing_letter') ? $this->uploadFile($request->file('revealing_letter'), 'companydocument') : null;
            $joiningletterPath = $request->hasFile('joining_letter') ? $this->uploadFile($request->file('joining_letter'), 'companydocument') : null;

            // Step 1: Create User
            $user = new User();
            $user->name = $request->first_name . ' ' . ($request->last_name ?? '');
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->mobile = $request->mobile;
            $user->address = $request->address;
            $user->role_id = $request->role_id;
            // $user->icon = $iconPath ?? '';
            $role = Role::findOrFail($request->role_id) ?? '';
            $user->assignRole($role->name); // Directly assign the role by role ID
            $user->save();

            $staff = new Staff();
            $staff->user_id = $user->id;
            $staff->created_by = Auth::user()->id;
            $employee_id = 'emp_' . now()->format('Ymd') . $user->id;
            $staff->employee_id = $employee_id;
            $staff->first_name = $request->first_name;
            $staff->last_name = $request->last_name ?? '';
            $staff->email = $request->email;
            $staff->password = bcrypt($request->password);
            $staff->mobile = $request->mobile;
            $staff->alternate_mobile = $request->alternate_mobile ?? '';
            $staff->gender = $request->gender;
            $staff->dob = $request->dob ?? '';
            $staff->marital_status = $request->marital_status;
            // $staff->p_country = $request->pcountry_id;
            // $staff->p_state = $request->pstate_id;
            // $staff->p_city = $request->pcity_id;
            // $staff->p_pincode = $request->permanent_pincode;
            // $staff->p_address = $request->permanentaddress;
            // $staff->r_country = $request->country_id;
            // $staff->r_state = $request->state_id;
            // $staff->r_city = $request->city_id;
            // $staff->r_pincode = $request->pincode;
            // $staff->r_address = $request->address;
            // $staff->company_id = $request->company_id;
            // $staff->department_id = $request->department_id;
            // $staff->designation_id = $request->designation_id;
            $staff->role_id = $request->role_id;
            // $staff->joining_date = $request->joindate;
            // $staff->confirmation_date = $request->confirmationdate;
            // $staff->exit_date = $request->exitdate ?? '';
            // $staff->icon = $iconPath ?? '';
            $staff->aadhar_number = $request->aadharnumber ?? '';
            // $staff->aadhar_certificate = $aadharPath ?? '';
            $staff->pan_number = $request->pannumber ?? '';
            // $staff->pan_certificate = $pancardPath ?? '';
            // $staff->domicile = $domicilePath ?? '';
            $staff->employee_category = $request->employee_category;
            // $staff->experience_letter = $experienceletterPath ?? '';
            // $staff->offer_letter = $offerletterPath ?? '';
            // $staff->revealing_letter = $revealingletterPath ?? '';
            // $staff->joining_letter = $joiningletterPath ?? '';
            $staff->bankname = $request->bankname;
            $staff->accountnumber = $request->accountnumber;
            $staff->ifsccode = $request->ifsccode;
            $staff->bankaddress = $request->bankaddress;
            $staff->upi_id = $request->upi_id;
            // $staff->bankdoc1 = $bankdoc1Path ?? '';
            // $staff->bankdoc2 = $bankdoc2Path ?? '';
            $staff->save();

            // Step 3: Create StaffEducationDocuments if any
            if ($request->hasFile('certificate')) {
                $documentTypes = $request->document_type;
                $documentNames = $request->document_name;
                foreach ($request->file('certificate') as $key => $file) {
                    $path = $this->uploadFile($file, 'educationdocument');

                    $doc = new StaffEducationDocument();
                    $doc->user_id = $user->id;
                    $doc->document_type = $documentTypes[$key];
                    $doc->document_name = $documentNames[$key] ?? '';
                    $doc->certificate = $path;
                    $doc->save();
                }
            }

            DB::commit();
            Session::flash('success', 'Staff added successfully!');
            return redirect()->route('admin.users.index');
        } catch (\Exception $e) {
            DB::rollBack();

            if (!empty($iconPath) && Storage::disk('public')->exists($iconPath)) {
                Storage::disk('public')->delete($iconPath);
            }

            if (!empty($aadharPath) && Storage::disk('public')->exists($aadharPath)) {
                Storage::disk('public')->delete($aadharPath);
            }

            if (!empty($pancardPath) && Storage::disk('public')->exists($pancardPath)) {
                Storage::disk('public')->delete($pancardPath);
            }

            if (!empty($domicilePath) && Storage::disk('public')->exists($domicilePath)) {
                Storage::disk('public')->delete($domicilePath);
            }

            if (!empty($experienceletterPath) && Storage::disk('public')->exists($experienceletterPath)) {
                Storage::disk('public')->delete($experienceletterPath);
            }

            if (!empty($offerletterPath) && Storage::disk('public')->exists($offerletterPath)) {
                Storage::disk('public')->delete($offerletterPath);
            }

            if (!empty($revealingletterPath) && Storage::disk('public')->exists($revealingletterPath)) {
                Storage::disk('public')->delete($revealingletterPath);
            }

            if (!empty($joiningletterPath) && Storage::disk('public')->exists($joiningletterPath)) {
                Storage::disk('public')->delete($joiningletterPath);
            }
            Session::flash('error', 'Failed to add staff: ' . $e->getMessage());
            return redirect()->back()->withInput();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data['title'] = 'LoanJar :: Edit User';
        $data['editstaff'] = Staff::findOrFail($id);
        $data['countries'] = country::get();
        $data['states'] = state::get();
        $data['cities'] = city::get();
        $data['companies'] = Company::where('status', 1)->get();
        $data['departments'] = Department::where('status', 1)->get();
        $data['designations'] = Designation::where('status', 1)->get();
        if (Auth::user()->role_id == 2) {
            $data['roles'] = Role::where('status', 1)
                                 ->whereNotIn('id', [1, 2])
                                 ->get();
        } else {
            $data['roles'] = Role::where('status', 1)->get();
        }        $data['staffEducationDocuments'] = StaffEducationDocument::where('user_id', $data['editstaff']->user_id)->get();
        return view('admin.staff.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStaffRequeat $request, string $id)
    {
        DB::beginTransaction();

        try {
            // Fetch the existing staff and user
            // dd($id);
            // $user = User::findOrFail($id);
            $staff = Staff::where('user_id', $id)->first();
            if ($staff) {

                // Proceed with your file upload logic
                $aadharPath = $request->hasFile('aadhar')
                    ? $this->uploadOrReplaceFile($request->file('aadhar'), 'personaldocument', $staff->aadhar_certificate)
                    : $staff->aadhar_certificate;
            } else {
                // Handle the case when the staff doesn't exist
                // You can redirect, throw an error, or set $aadharPath to null
                $aadharPath = null;

                // Optionally log the error or take other actions
                // throw new \Exception('Staff not found');
            }
            // dd($staff);
            // Upload or replace files
            // $iconPath = $request->hasFile('icon') ? $this->uploadOrReplaceFile($request->file('icon'), 'admin', $user->icon) : $user->icon;
            // $aadharPath = $request->hasFile('aadhar') ? $this->uploadOrReplaceFile($request->file('aadhar'), 'personaldocument', $staff->aadhar_certificate) : $staff->aadhar_certificate;
            // $pancardPath = $request->hasFile('pancard') ? $this->uploadOrReplaceFile($request->file('pancard'), 'personaldocument', $staff->pan_certificate) : $staff->pan_certificate;
            // $domicilePath = $request->hasFile('domicile') ? $this->uploadOrReplaceFile($request->file('domicile'), 'personaldocument', $staff->domicile) : $staff->domicile;
            // $bankdoc1Path = $request->hasFile('bankdoc1') ? $this->uploadOrReplaceFile($request->file('bankdoc1'), 'bankdocument', $staff->bankdoc1) : $staff->bankdoc1;
            // $bankdoc2Path = $request->hasFile('bankdoc2') ? $this->uploadOrReplaceFile($request->file('bankdoc2'), 'bankdocument', $staff->bankdoc2) : $staff->bankdoc2;
            // $experienceletterPath = $request->hasFile('experience_letter') ? $this->uploadOrReplaceFile($request->file('experience_letter'), 'companydocument', $staff->experience_letter) : $staff->experience_letter;
            // $offerletterPath = $request->hasFile('offer_letter') ? $this->uploadOrReplaceFile($request->file('offer_letter'), 'companydocument', $staff->offer_letter) : $staff->offer_letter;
            // $revealingletterPath = $request->hasFile('revealing_letter') ? $this->uploadOrReplaceFile($request->file('revealing_letter'), 'companydocument', $staff->revealing_letter) : $staff->revealing_letter;
            // $joiningletterPath = $request->hasFile('joining_letter') ? $this->uploadOrReplaceFile($request->file('joining_letter'), 'companydocument', $staff->joining_letter) : $staff->joining_letter;

            // Update User Information
            // $user->name = $request->first_name . ' ' . ($request->last_name ?? '');
            // $user->email = $request->email;
            // $user->password = $request->has('password') ? bcrypt($request->password) : $user->password;
            // $user->mobile = $request->mobile;
            // $user->address = $request->address;
            // $user->icon = $iconPath ?? $user->icon;
            // $user->role_id = $request->role_id;
            // $role = Role::findOrFail($request->role_id) ?? '';

            // $user->assignRole($role->name); 
            // $user->save();

            // Update Staff Information
            $staff->first_name = $request->first_name;
            $staff->last_name = $request->last_name ?? '';
            // $staff->email = $request->email;
            $staff->password = $request->has('password') ? bcrypt($request->password) : $staff->password;
            $staff->mobile = $request->mobile;
            $staff->alternate_mobile = $request->alternate_mobile ?? '';
            $staff->gender = $request->gender;
            $staff->dob = $request->dob ?? '';
            $staff->marital_status = $request->marital_status;
            // $staff->p_country = $request->pcountry_id;
            // $staff->p_state = $request->pstate_id;
            // $staff->p_city = $request->pcity_id;
            // $staff->p_pincode = $request->permanent_pincode;
            // $staff->p_address = $request->permanentaddress;
            // $staff->r_country = $request->country_id;
            // $staff->r_state = $request->state_id;
            // $staff->r_city = $request->city_id;
            // $staff->r_pincode = $request->pincode;
            // $staff->r_address = $request->address;
            // $staff->company_id = $request->company_id;
            // $staff->department_id = $request->department_id;
            // $staff->designation_id = $request->designation_id;
            $staff->role_id = $request->role_id;
            // $staff->joining_date = $request->joindate;
            // $staff->confirmation_date = $request->confirmationdate;
            // $staff->exit_date = $request->exitdate ?? '';
            // $staff->icon = $iconPath ?? $staff->icon;
            $staff->aadhar_number = $request->aadharnumber ?? '';
            // $staff->aadhar_certificate = $aadharPath ?? $staff->aadhar_certificate;
            $staff->pan_number = $request->pannumber ?? '';
            // $staff->pan_certificate = $pancardPath ?? $staff->pan_certificate;
            // $staff->domicile = $domicilePath ?? $staff->domicile;
            $staff->employee_category = $request->employee_category;
            // $staff->experience_letter = $experienceletterPath ?? $staff->experience_letter;
            // $staff->offer_letter = $offerletterPath ?? $staff->offer_letter;
            // $staff->revealing_letter = $revealingletterPath ?? $staff->revealing_letter;
            // $staff->joining_letter = $joiningletterPath ?? $staff->joining_letter;
            $staff->bankname = $request->bankname;
            $staff->accountnumber = $request->accountnumber;
            $staff->ifsccode = $request->ifsccode;
            $staff->bankaddress = $request->bankaddress;
            $staff->ifsccode = $request->ifsccode;
            $staff->upi_id = $request->upi_id;
            // $staff->bankdoc1 = $bankdoc1Path ?? $staff->bankdoc1;
            // $staff->bankdoc2 = $bankdoc2Path ?? $staff->bankdoc2;
            $staff->save();

            // Step 3: Update StaffEducationDocuments if any
            if ($request->hasFile('certificate')) {
                $documentTypes = $request->document_type;
                $documentNames = $request->document_name;
                foreach ($request->file('certificate') as $key => $file) {
                    $path = $this->uploadOrReplaceFile($file, 'educationdocument');

                    $doc = new StaffEducationDocument();
                    $doc->user_id = $user->id;
                    $doc->document_type = $documentTypes[$key];
                    $doc->document_name = $documentNames[$key] ?? '';
                    $doc->certificate = $path;
                    $doc->save();
                }
            }

            DB::commit();
            Session::flash('success', 'User updated successfully!');
            return redirect()->route('admin.users.index');
        } catch (\Exception $e) {
            DB::rollBack();
            dd($e);

            // Delete any files that were uploaded before rollback
            $this->deleteUploadedFiles([
                $iconPath,
                $aadharPath,
                $pancardPath,
                $domicilePath,
                $experienceletterPath,
                $offerletterPath,
                $revealingletterPath,
                $joiningletterPath
            ]);

            // Optionally log the error or flash a session message for failure
            // Session::flash('error', 'Failed to update staff: ' . $e->getMessage());
            // return redirect()->back()->withInput();
        }
    }

    public function deleteUploadedFiles($paths = [])
    {
        foreach ($paths as $path) {
            if (!empty($path) && Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $loan = Staff::findOrFail($id);
        $loan->delete(); 
        Session::flash('success', 'Loan deleted successfully!');
        return redirect()->route('admin.users.index');
    }
}
