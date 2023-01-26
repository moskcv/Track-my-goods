<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        return Customer::with('users:name')->get();
    }

    public function store(Request $request)
    {
        $customer = new Customer($request->all());
        $customer->save();

        return $customer;
    }

    public function show(Customer $customer)
    {
        return $customer;
    }

    public function update(Request $request, Customer $customer)
    {
        $customer->update($request->all());

        return $customer;
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
    }
}
