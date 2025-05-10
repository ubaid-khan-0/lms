<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function index()
    {
        return view('admin.layout.adminlogin');
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return redirect()->route('admin.login')->with('error', 'Please enter correct email.');
        }
        if ($user->status != 1) {
            return redirect()->route('admin.login')->with('error', 'Your account is inactive.');
        }
        if (Auth::guard('admin')->attempt($request->only('email', 'password'), $request->has('remember'))) {
            session()->flash('success', 'Login successful.');
            return redirect()->route('admin.dashboard');
        }

        return redirect()->route('admin.login')->with('error', 'Invalid email or password.');
    }
}
