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
                    <h2 class="m-0 fs-5"><a href="javascript:void(0);" class="btn btn-sm btn-link ps-0 btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a>Add Role</h2>

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
                        <form id="addForm" action="{{ route('admin.role.update', $editrole->id) }}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="row g-2">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label class="form-label">Role Name <small class="text-danger">*</small></label>
                                        <input type="text" class="form-control" placeholder="Role Name" name="name" value="{{ !empty($editrole->name) ? $editrole->name : old('name') }}">
                                        @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                        @enderror
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
    $(document).ready(function() {
        $('#addForm').validate({
            ignore: ":hidden:not('.validate-hidden')",
            rules: {
                name: {
                    required: true,
                    remote: {
                        url: "{{ route('admin.checkRoleName') }}",
                        type: "post",
                        data: {
                            name: function() {
                                return $("input[name='name']").val();
                            },
                            id: function() {
                                return $("input[name='id']").val();
                            },
                            _token: "{{ csrf_token() }}"
                        },
                        dataFilter: function(response) {
                            var data = JSON.parse(response);
                            if (data.isDuplicate) {
                                return JSON.stringify("Role name alreadyy exists");
                            } else {
                                return true;
                            }
                        }
                    }
                },
            },
            messages: {
                name: {
                    required: "Please enter the role",
                    remote: "Role name already exists"
                },
            },
            errorElement: 'span',
            errorPlacement: function(error, element) {
                error.addClass('text-danger');
                if (element.attr("name") == "nametype") {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function(element) {
                $(element).addClass('is-invalid mb-1');
            },
            unhighlight: function(element) {
                $(element).removeClass('is-invalid mb-1');
            }
        });

    });
</script>
@endpush
</x-app-layout>