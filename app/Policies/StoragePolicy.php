<?php

namespace App\Policies;

use App\Models\Storage;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StoragePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->can('view storages');
    }

    public function view(User $user, Storage $storage): bool
    {
        if ($user->cannot('view storages')) {
            return false;
        }

        return $storage->customer_id === $user->customer_id;
    }

    public function create(User $user): bool
    {
        return $user->can('create storages');
    }

    public function update(User $user, Storage $storage): bool
    {
        if ($user->cannot('update storages')) {
            return false;
        }

        return $storage->customer_id === $user->customer_id;
    }

    public function delete(User $user, Storage $storage): bool
    {
        if ($user->cannot('delete storages')) {
            return false;
        }

        return $storage->customer_id === $user->customer_id;
    }
}
