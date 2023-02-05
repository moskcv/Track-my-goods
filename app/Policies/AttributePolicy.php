<?php

namespace App\Policies;

use App\Models\Attribute;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AttributePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->can('view attributes');
    }

    public function view(User $user, Attribute $attribute): bool
    {
        if ($user->cannot('view attributes')) {
            return false;
        }

        return $user->customer_id === $attribute->customer_id;
    }

    public function create(User $user): bool
    {
        return $user->can('create attributes');
    }

    public function update(User $user, Attribute $attribute): bool
    {
        if ($user->cannot('update attributes')) {
            return false;
        }

        return $user->customer_id === $attribute->customer_id;
    }

    public function delete(User $user, Attribute $attribute): bool
    {
        if ($user->cannot('delete attributes')) {
            return false;
        }

        return $user->customer_id === $attribute->customer_id;
    }
}
