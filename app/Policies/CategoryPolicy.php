<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->can('view categories');
    }

    public function view(User $user, Category $category): bool
    {
        if ($user->cannot('view categories')) {
            return false;
        }

        return $user->customer_id === $category->customer_id;
    }

    public function create(User $user): bool
    {
        return $user->can('create categories');
    }

    public function update(User $user, Category $category): bool
    {
        if ($user->cannot('update categories')) {
            return false;
        }

        return $user->customer_id === $category->customer_id;
    }

    public function delete(User $user, Category $category): bool
    {
        if ($user->cannot('delete categories')) {
            return false;
        }

        return $user->customer_id === $category->customer_id;
    }
}
