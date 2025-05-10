<x-app-layout :title="$title">
@push('css')
<style>
    .dropify-wrapper {
        height: 150px !important;
    }

    .profile .dropify-wrapper {
        height: 200px !important;
    }
</style>
@endpush
<div id="main-content">
    <div class="container-fluid">

        <div class="block-header py-lg-4 py-3">
            <div class="row g-3">
                <div class="col-md-6 col-sm-12">
                    <h2 class="m-0 fs-5"><a href="javascript:void(0);" class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a>Role Permission</h2>

                </div>
                <div class="col-md-6 col-sm-12 text-md-end">
                    <div class="d-inline-flex text-start">
                        <div class="me-2">
                            <h6 class="mb-0"><i class="fa fa-user"></i> 1,784</h6>
                            <small>Visitors</small>
                        </div>
                        <span id="bh_visitors"></span>
                    </div>
                    <div class="d-inline-flex text-start ms-lg-3 me-lg-3 ms-1 me-1">
                        <div class="me-2">
                            <h6 class="mb-0"><i class="fa fa-globe"></i> 325</h6>
                            <small>Visits</small>
                        </div>
                        <span id="bh_visits"></span>
                    </div>
                    <div class="d-inline-flex text-start">
                        <div class="me-2">
                            <h6 class="mb-0"><i class="fa fa-comments"></i> 13</h6>
                            <small>Chats</small>
                        </div>
                        <span id="bh_chats"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-12">
                <div class="card form-card">
                    <div class="card-body">
                        <form id="addForm" action="{{ route('admin.rolepermissions.store') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="row g-2">

                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label class="form-label">Role Name</label>
                                        <input type="hidden" name="role_id" value="{{$roles->id}}">
                                        <input type="text" class="form-control" placeholder="Role Name" name="name" value="{{$roles->name}}" disabled>
                                        @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col-12">
                                    <h6 class="mt-4">Administrator Permission</h6>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="checkAllPermissions">
                                        <label class="form-check-label" for="checkAllPermissions">
                                            Select All Permissions
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-2">

                                <div class="col-12">
                                    <h6 class="mt-4">Module Permission</h6>
                                    <div class="table-responsive">
                                        @php
                                        $modules = config('custom_permissions.modules');
                                        $actions = config('custom_permissions.actions');
                                        @endphp

                                        <table class="table table-striped mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Module</th>
                                                    @foreach($actions as $action)
                                                    <th>{{ ucfirst($action) }}</th>
                                                    @endforeach
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($modules as $module)
                                                <tr>
                                                    <td>{{ ucfirst(str_replace('-', ' ', $module)) }}</td>
                                                    @foreach($actions as $action)
                                                    <td>
                                                        <input type="checkbox" name="permissions[]" value="{{ $action . '_' . $module }}"
                                                            {{ in_array($action . '_' . $module, $rolePermissions ?? []) ? 'checked' : '' }}>
                                                    </td>
                                                    @endforeach
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="col-md-12">
                                    <button class="mt-3 btn btn-primary form-btn" id="videoBtn" type="submit">SAVE <i class="fa fa-spin fa-spinner" id="videoSpin" style="display:none;"></i></button>
                                    <a class="text-white mt-3 btn btn-danger form-btn" href="{{ route('admin.role.index')}}">Cancel</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@push('scripts')
<script>
    // Select All / Deselect All Permissions
    document.getElementById('checkAllPermissions').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('input[name="permissions[]"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });

    // If all individual permissions are checked on load, mark the 'select all' checkbox
    window.addEventListener('DOMContentLoaded', () => {
        const checkboxes = document.querySelectorAll('input[name="permissions[]"]');
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        document.getElementById('checkAllPermissions').checked = allChecked;
    });
</script>

@endpush
</x-app-layout>