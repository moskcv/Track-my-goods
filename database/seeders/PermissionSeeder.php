<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::insertOrIgnore(
            collect($this->permissions())
                ->map(fn ($permission) => [
                    'name' => $permission,
                    'guard_name' => 'web',
                    'created_at' => now(),
                    'updated_at' => now(),
                ])->toArray()
        );
    }

    private function permissions(): array
    {
        return [
            'view customers',
            'create customers',
            'update customers',
            'delete customers',
            'view permissions',
            'view roles',
            'create roles',
            'update roles',
            'delete roles',
        ];
    }
}
