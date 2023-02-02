<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::with(['roles', 'customer'])->paginate(config('platform.max_per_page')));
    }

    public function show(User $user): UserResource
    {
        return new UserResource($user->load('roles'));
    }

    public function store(UserCreateUpdateRequest $request): UserResource
    {
        try {
            $user = new User($request->validated());
            $user->save();

            $user->syncRoles($request->safe()->only('role_id'));
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new UserResource($user);
    }

    public function update(UserCreateUpdateRequest $request, User $user): UserResource
    {
        try {
            $user->update($request->validated());
            $user->syncRoles($request->safe()->only('role_id'));
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new UserResource($user);
    }

    public function destroy(User $user): void
    {
        $user->delete();
    }
}
