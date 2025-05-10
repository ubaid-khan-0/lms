<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use App\Models\Loan;
use App\Models\Staff;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use App\DataTables\LoanDataTable;
use Illuminate\Support\Facades\Auth;
use App\Models\LoanInstallment;
use DataTables;



class LoanController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:view_loans', only: ['index']),
            new Middleware('permission:add_loans', only: ['create', 'store', 'history']),
            new Middleware('permission:edit_loans', only: ['edit', 'update', 'history']),
            new Middleware('permission:delete_loans', only: ['destroy']),
        ];
    }

    public function index(LoanDataTable $datatable)
    {
        $data['title'] = 'LoanJar :: Loans';
        return $datatable->render('admin.loan.index', $data);
    }

    public function historyUser()
    {

        $data['title'] = 'LoanJar :: Loan History';
        $data['loans'] = Loan::with('installments')->where('user_id', Auth::id())->get();

        return view('admin.loan.userhistory', $data);
    }
    public function create()
    {
        $data['title'] = 'LoanJar :: Apply for Loan';
        $managerId = Auth::user()->id;
        $data['users'] = Staff::where('created_by', $managerId)->get();
        return view('admin.loan.create', $data);
    }
    public function view_user(LoanDataTable $datatable)
    {

        $userId = Auth::user()->id;
        $loan = Loan::where('user_id', $userId)->get();
        $data['title'] = 'LoanJar :: Loan';
        $data['loan'] = $loan;
        return $datatable->render('admin.loan.userloan', $data);
    }

    public function history(string $id)
    {

        $loan = Loan::findOrFail($id);

        $data['title'] = 'LoanJar :: Loan history';
        $data['managerId'] = Auth::user()->id;
        $data['editloan'] = $loan;

        // Get previous installments (if any)
        $installments = $loan->installments()->where('loan_id', $loan->id)->orderBy('date', 'desc')->get();

        // Calculate total sum of installments
        $totalAmount = $installments->sum('amount');

        $data['installments'] = $installments->keyBy(function ($item, $key) {
            return $key + 1; // match with loop index
        });

        // Pass the total amount to the view
        $data['totalAmount'] = $totalAmount;

        // Get previous installments (if any)
        $data['installments'] = $loan->installments()->orderBy('date', 'desc')->get()->keyBy(function ($item, $key) {
            return $key + 1; // match with loop index
        });

        return view('admin.loan.history', $data);
    }


    public function saveHistory(Request $request, $loanId)
    {
        $userId = $request->input('user_id');

        foreach ($request->installments as $i => $installment) {
            // Skip incomplete rows
            if (empty($installment['date']) || empty($installment['amount'])) {
                continue;
            }

            $date = $installment['date'];
            $amount = $installment['amount'];

            // Check if we have an installment ID (this means we're updating an existing row)
            $installmentId = $installment['id'] ?? null;

            if ($installmentId) {
                // Update existing installment
                $loanInstallment = LoanInstallment::where('loan_id', $loanId)
                    ->where('id', $installmentId)
                    ->where('user_id', $userId)
                    ->first();

                if ($loanInstallment) {
                    // Handle screenshot upload if present
                    if ($request->hasFile("installments.{$i}.screenshot") && $request->file("installments.{$i}.screenshot")->isValid()) {
                        $screenshot = $request->file("installments.{$i}.screenshot");
                        $screenshotPath = $screenshot->store('screenshots', 'public');
                        $loanInstallment->screenshot = $screenshotPath;
                    }

                    // Update the data
                    $loanInstallment->date = \Carbon\Carbon::createFromFormat('d-m-Y', $installment['date']);
                    $loanInstallment->title = $installment['title'] ?? 'Installment';
                    $loanInstallment->description = $installment['description'] ?? '';
                    $loanInstallment->amount = $installment['amount'];
                    $loanInstallment->payment_method = $installment['payment_method'] ?? '';
                    $loanInstallment->save();
                }
            } else {
                // Create a new installment if there's no ID
                $exists = LoanInstallment::where('loan_id', $loanId)
                    ->where('user_id', $userId)
                    ->where('date', $date)
                    ->exists();

                if ($exists) {
                    continue; // Skip if already saved
                }

                // Handle screenshot upload
                $screenshotPath = null;
                if ($request->hasFile("installments.{$i}.screenshot") && $request->file("installments.{$i}.screenshot")->isValid()) {
                    $screenshot = $request->file("installments.{$i}.screenshot");
                    $screenshotPath = $screenshot->store('screenshots', 'public');
                }

                $date = $installment['date'];
                $amount = $installment['amount'];

                // Create new installment
                LoanInstallment::create([
                    'loan_id' => $loanId,
                    'user_id' => $userId,
                    'created_by' => Auth::user()->id,
                    'date' => $date,
                    'title' => $installment['title'] ?? 'Installment',
                    'description' => $installment['description'] ?? '',
                    'amount' => $installment['amount'],
                    'payment_method' => $installment['payment_method'] ?? '',
                    'screenshot' => $screenshotPath,
                ]);
            }
        }

        return redirect()->back()->with('success', 'Loan installments saved successfully.');
    }




    public function store(Request $request)
    {
        $request->validate([
            'user_id'            => 'required',
            'date'               => 'required|date_format:d/m/Y',
            'title'              => 'required|string|max:255',
            'notes'              => 'nullable|string',
            'amount'             => 'required|numeric|min:1000',
            'capital_interest'   => 'required|numeric|min:0',
            'loan_duration'      => 'required|string|max:10',
            'apply_interest_on'  => 'required|in:year,month,day,hour',
            'aadhar_card'        => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
            'pan_card'           => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        $loan = new Loan();
        $loan->user_id           = $request->user_id;
        $loan->created_by        = Auth::id() ?? 0;
        $loan->date              = \Carbon\Carbon::createFromFormat('d/m/Y', $request->date)->format('Y-m-d');
        $loan->title             = $request->title;
        $loan->notes             = $request->notes;
        $loan->amount            = $request->amount;
        $loan->capital_interest  = $request->capital_interest;
        $loan->loan_duration     = $request->loan_duration;
        $loan->apply_interest_on = $request->apply_interest_on;
        $loan->status            = 'pending';

        // Optional: calculate total_with_interest and store
        $loan->total_with_interest = $request->amount + ($request->amount * $request->capital_interest / 100);

        // Generate custom loan_id: first 2 chars of username + incrementing number
        $prefix = strtoupper(substr(Auth::user()->name, 0, 2));
        $latestId = Loan::max('id') + 1;
        $loan->loan_id = $prefix . str_pad($latestId, 4, '0', STR_PAD_LEFT);

        if ($request->hasFile('aadhar_card')) {
            $loan->aadhar_card = $request->file('aadhar_card')->store('documents', 'public');
        }
        if ($request->hasFile('pan_card')) {
            $loan->pan_card = $request->file('pan_card')->store('documents', 'public');
        }
        $loan->save();
        Session::flash('success', 'Loan application submitted successfully!');
        return redirect()->route('admin.loans.index');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email'     => 'required|email',
            'phone'     => 'required|string|max:15',
            'amount'    => 'required|numeric|min:1000',
            'term'      => 'required|integer|min:1',
            'purpose'   => 'required|string',
            'status'    => 'required|in:pending,approved,rejected',
            'user_id'   => 'required|exists:loans,id',
        ]);

        $loan = Loan::findOrFail($id);
        $loan->title = $request->title;
        $loan->loan_id = ''; // auto generate as Auth::user()->name; 2 characters then concatnate number from 0 to n in each new record
        $loan->email = '';
        $loan->phone = '';
        $loan->amount = $request->amount;
        $loan->term = $request->term;
        $loan->status = 'pending';
        $loan->user_id = $request->user_id;
        $loan->purpose = $request->purpose;
        $loan->notes = $request->notes;
        // $loan->updated_by = Auth::user()->id ?? 0;

        if ($request->hasFile('aadhar_card')) {
            // Optionally delete old document
            if ($loan->aadhar_card && \Storage::disk('public')->exists($loan->aadhar_card)) {
                \Storage::disk('public')->delete($loan->aadhar_card);
            }

            $loan->aadhar_card = $request->file('aadhar_card')->store('documents', 'public');
        }
        if ($request->hasFile('pan_card')) {
            // Optionally delete old document
            if ($loan->pan_card && \Storage::disk('public')->exists($loan->pan_card)) {
                \Storage::disk('public')->delete($loan->pan_card);
            }

            $loan->pan_card = $request->file('pan_card')->store('documents', 'public');
        }

        $loan->save();

        Session::flash('success', 'Loan application updated successfully!');
        return redirect()->route('admin.loans.index');
    }

    public function edit(string $id)
    {
        $data['title'] = 'LoanJar :: Edit Loan';
        $data['editrole'] = Loan::find($id);
        $data['users'] = Staff::all();
        return view('admin.loan.edit', $data);
    }
    public function destroy(string $id)
    {
        $loan = Loan::findOrFail($id);
        if ($loan->document) {
            Storage::disk('public')->delete($loan->document);
        }
        $loan->delete();
        Session::flash('success', 'Loan deleted successfully!');
        return redirect()->route('admin.loans.index');
    }

    public function report()
    {
        $data['title'] = 'LoanJar :: Loan Report';

        return view('admin.loan_report.index', $data);
    }

    public function getData(Request $request)
    {

        $user = Auth::user();

        // Start with a query builder
        $query = Loan::query()->with('user');


        // If not admin, restrict to their loans
        if ($user->role_id != 1) {
            $query->where('user_id', $user->id);
        } elseif ($user->role_id == 2) {
            $query->where('created_by', $user->id);
        }
        // Date filtering
        if ($request->filled('from') && $request->filled('to')) {
            try {
                $from = \Carbon\Carbon::createFromFormat('d/m/Y', request('from'))->startOfDay();
                $to = \Carbon\Carbon::createFromFormat('d/m/Y', request('to'))->endOfDay();
                $query->whereBetween('date', [$from, $to]);
            } catch (\Exception $e) {
            }
        }
        return DataTables::of($query)

            ->addColumn('user_name', fn($row) => $row->user->name ?? '-')
            ->editColumn('created_at', fn($row) => $row->created_at->format('Y-m-d H:i'))
            ->editColumn('status', fn($row) => ucfirst($row->status))
            ->addIndexColumn()
            ->addColumn('loan_period', function ($row) {
                return $row->loan_duration . '-' . strtoupper(substr($row->apply_interest_on, 0, 1));
            })
            ->addColumn('capital_interest', function ($row) {
                return $row->capital_interest . '%';
            })
            ->addColumn('document', function ($row) {
                return $row->document
                    ? '<a href="' . asset('storage/' . $row->document) . '" target="_blank">View</a>'
                    : 'No Doc';
            })
            ->rawColumns(['document']) // Allow HTML rendering
            ->make(true);
    }

    public function reportInstall()
    {
        $data['title'] = 'LoanJar :: Loan Installment Report';
        return view('admin.loan_report.loan_report_install', $data);
    }

    public function getDataInstall(Request $request)
    {

        $user = Auth::user();

        $query = LoanInstallment::get(); // Eager load if needed

        if ($user->role_id != 1) {
            // Only user's data for non-admin
            $query->where('user_id', $user->id);
        } elseif ($user->role_id == 2) {
            $query->where('created_by', $user->id);
        }

        return DataTables::of($query)
            ->addColumn('user_name', fn($row) => $row->user->name ?? '-')
            ->addColumn('loan_title', fn($row) => $row->loan->title ?? '-')
            ->editColumn('created_at', fn($row) => $row->created_at->format('Y-m-d H:i'))
            ->addColumn('screenshot', function ($row) {
                return $row->screenshot
                    ? '<img src="' . asset('storage/' . $row->screenshot) . '" height="40">'
                    : 'No Image';
            })
            ->rawColumns(['screenshot']) // Needed for rendering HTML
            ->make(true);
    }
}
