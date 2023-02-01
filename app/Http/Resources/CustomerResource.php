<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'pricing_plan' => $this->pricing_plan,
            'package_type' => $this->package_type,
            // TODO: Fix date formats
            'payed_at' => $this->payed_at,
            'next_payment_at' => $this->next_payment_at,
        ];
    }
}
