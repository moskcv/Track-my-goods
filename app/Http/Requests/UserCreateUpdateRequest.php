<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserCreateUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email,'.request('id'),
            'customer_id' => 'nullable|exists:customers,id',
            'role_id' => 'required|exists:roles,id',
        ];
    }
}
