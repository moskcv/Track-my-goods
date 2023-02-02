<?php

namespace App\Policies;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CustomerPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->can('view customers');
    }

    public function view(User $user, Customer $customer): bool
    {
        if ($user->customer_id === $customer->id) {
            return true;
        }

        return $user->can('view customers');
    }

    public function options(User $user): bool
    {
        return $user->can('view customers');
    }

    public function create(User $user): bool
    {
        return $user->can('create customers');
    }

    public function update(User $user, Customer $customer): bool
    {
        if ($user->customer_id === $customer->id) {
            return true;
        }

        return $user->can('update customers');
    }

    public function delete(User $user, Customer $customer): bool
    {
        return $user->can('delete customers');
    }
}
