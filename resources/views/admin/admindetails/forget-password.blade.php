<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>:: BFC Group :: Login</title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Lucid HR & Project Admin Dashboard Template with Bootstrap 5x">
    <meta name="author" content="WrapTheme, design by: ThemeMakker.com">

    <link rel="icon" href="https://bfcsofttech.com/assets/img/logo.webp" type="image/x-icon">

    <!-- MAIN CSS -->
    <link rel="stylesheet" href="{{asset('assets/css/main.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/toastr.min.css')}}">
</head>

<body>

<div id="layout" class="theme-cyan">
    <!-- WRAPPER -->
    <div id="wrapper">
        <div class="d-flex h100vh align-items-center auth-main w-100">
            <div class="auth-box">
            <div class="top mb-4">
                        <div class="logo d-flex align-items-center">
                            <img src="{{asset('assets/images/favicon.png')}}" alt="logo-dark" height="60">&nbsp;
                            <h3 class="d-flex fw-bold" ><b style="color:#d44042;">BFC</b> &nbsp;<span class="text-light"> GROUP </span></h3>
                        </div>
                    </div>
                <div class="card shadow p-lg-4">
                    <div class="card-header">
                        <p class="fs-5 mb-0">Recover my password</p>
                    </div>
                    <div class="card-body">
                        <p>Please enter your email address below to receive instructions for resetting password.</p>
                        <form action="{{ route('admin.forget.password.post') }}" method="POST">
                        @csrf
                        @method('POST')    
                        <div class="form-floating mb-1">
                                <input type="email" name="email" class="form-control" placeholder="name@example.com">
                                <label>Email address</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 px-3 py-2">RESET PASSWORD</button>
                            <div class="text-center mt-3">
                                <span class="helper-text">Know your password? <a href="{{ route('admin.logindata') }}">Login</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END WRAPPER -->
</div>
</body>
<!-- core js file -->


<!-- page js file -->
<script src="{{asset('assets/bundles/mainscripts.bundle.js')}}"></script>
<script src="{{asset('assets/bundles/libscripts.bundle.js')}}"></script>
<script src="{{asset('assets/bundles/toastr.bundle.js')}}"></script>
<script src="{{asset('assets/js/pages/index.js')}}"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.20.0/jquery.validate.min.js" integrity="sha512-WMEKGZ7L5LWgaPeJtw9MBM4i5w5OSBlSjTjCtSnvFJGSVD26gE5+Td12qN5pvWXhuWaWcVwF++F7aqu9cvqP0A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
        $('input').keypress(function(e) {
            if (this.value.length === 0 && e.which === 32) e.preventDefault();
        });
        $('textarea').keypress(function(e) {
            if (this.value.length === 0 && e.which === 32) e.preventDefault();
        });
        $('input[name="mobile"]').on('input', function() {
            $(this).val($(this).val().replace(/\D/g, '')); // Remove non-digits
            if ($(this).val().length > 10) {
                $(this).val($(this).val().substr(0, 10)); // Limit to 10 digits
            }
        });
        $('form').validate({

            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5,
                    password: true

                },

            },
            errorElement: 'span',
            errorPlacement: function(error, element) {

                error.addClass('text-danger');
                error.insertAfter(element);

            },
            highlight: function(element) {
                $(element).addClass('is-invalid mb-1');
            },
            unhighlight: function(element) {
                $(element).removeClass('is-invalid mb-1');
            }
        });
    </script>

    <script>
        @if(Session::has('message'))
        var messageType = '{{ Session::get("status") }}';
        var message = '{{ Session::get("message") }}';

        toastr[messageType](message, '', {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": 300,
            "hideDuration": 1000,
            "timeOut": 5000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        });
        @endif


        @if(Session::has('success'))
        toastr.success('{{ Session::get("success") }}', '', {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": 300,
            "hideDuration": 1000,
            "timeOut": 5000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        });
        @endif


        @if(Session::has('error'))
        toastr.error('{{ Session::get("error") }}', '', {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": 300,
            "hideDuration": 1000,
            "timeOut": 5000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        });
        @endif
    </script>

</html>