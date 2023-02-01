<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerCreateUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required',
            'package_type' => 'required|integer|between:0,2',
            'pricing_plan' => 'required|integer|between:0,3',
            'status' => 'required|integer|between:0,2',
            'payed_at' => 'nullable|date',
            'next_payment_at' => 'nullable|date',
        ];
    }
}
