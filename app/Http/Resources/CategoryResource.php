<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'parent_id' => $this->parent_id,
            'children' => $this->whenLoaded('children', fn () => $this->children),
            'parent' => $this->whenLoaded('parent', fn () => $this->parent),
        ];
    }
}
