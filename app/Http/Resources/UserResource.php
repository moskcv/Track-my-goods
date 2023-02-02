<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'customer_id' => $this->customer_id,
            'customer' => $this->whenLoaded('customer', fn () => new CustomerResource($this->customer)),
            'role_id' => $this->whenLoaded('roles', fn () => $this->roles->first()->id),
            'roles' => $this->whenLoaded('roles', fn () => new RoleResource($this->roles->first())),
        ];
    }
}
