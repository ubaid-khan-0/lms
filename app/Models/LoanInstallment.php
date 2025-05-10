<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;



class LoanInstallment extends Model
{
    use HasFactory;

    // Add the loan_id to the fillable array
    protected $fillable = [
        'loan_id',  
        'user_id',
        'create_by',
        'date',
        'title',
        'description',
        'amount',
        'payment_method',
        'screenshot',
    ];

    // Optionally, add any other attributes as needed


    public function loan()
{
    return $this->belongsTo(Loan::class);
}

}
