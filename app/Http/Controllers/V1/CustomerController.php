<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerCreateUpdateRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Collection;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Customer::class, 'customer');
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        $customers = Customer::orderBy($request->get('orderBy', 'created_at'), $request->get('sort', 'desc'));

        return CustomerResource::collection($customers->paginate(config('platform.max_per_page')));
    }

    public function store(CustomerCreateUpdateRequest $request): CustomerResource
    {
        try {
            $customer = new Customer($request->validated());
            $customer->save();
        } catch(Exception $e) {
            // TODO: Fix exceptions handling
            dd($e->getMessage());
        }

        return new CustomerResource($customer);
    }

    public function show(Customer $customer): CustomerResource
    {
        return new CustomerResource($customer);
    }

    public function update(CustomerCreateUpdateRequest $request, Customer $customer): CustomerResource
    {
        try {
            $customer->fill($request->validated());
            $customer->save();
        } catch(Exception $e) {
            // TODO: Fix exceptions handling
            dd($e->getMessage());
        }

        return new CustomerResource($customer);
    }

    public function destroy(Customer $customer): void
    {
        // TODO: Think on response
        $customer->delete();
    }

    public function options(): Collection
    {
        $this->authorize('view customers');

        return Customer::pluck('name', 'id');
    }
}
