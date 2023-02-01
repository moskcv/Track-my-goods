<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoleCreateUpdateRequest;
use App\Http\Resources\RoleResource;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Role::class, 'role');
    }

    public function index(Request $request): AnonymousResourceCollection
    {
        $roles = Role::orderBy($request->get('orderBy', 'created_at'), $request->get('sort', 'desc'));

        return RoleResource::collection($roles->paginate(config('platform.max_per_page')));
    }

    public function store(RoleCreateUpdateRequest $request): RoleResource
    {
        try {
            $role = new Role($request->safe()->only(['name']));
            $role->guard_name = 'web';
            $role->save();

            $role->syncPermissions($request->safe()->only(['permissions']));
        } catch(Exception $e) {
            // TODO: Fix exceptions handling
            dd($e->getMessage());
        }

        return new RoleResource($role);
    }

    public function show(Role $role): RoleResource
    {
        return new RoleResource($role->load('permissions'));
    }

    public function update(RoleCreateUpdateRequest $request, Role $role): RoleResource
    {
        try {
            $role->update($request->safe()->only(['name']));

            $role->syncPermissions($request->safe()->only(['permissions']));
        } catch(Exception $e) {
            // TODO: Fix exceptions handling
            dd($e->getMessage());
        }

        return new RoleResource($role);
    }

    public function destroy(Role $role): void
    {
        // TODO: Think on response
        $role->delete();
    }
}
