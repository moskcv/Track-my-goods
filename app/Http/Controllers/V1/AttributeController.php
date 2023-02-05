<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AttributeCreateUpdateRequest;
use App\Http\Resources\AttributeResource;
use App\Models\Attribute;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AttributeController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Attribute::class, 'attribute');
    }

    public function index(): AnonymousResourceCollection
    {
        return AttributeResource::collection(Attribute::paginate(config('platform.max_per_page')));
    }

    public function store(AttributeCreateUpdateRequest $request): AttributeResource
    {
        try {
            $attribute = new Attribute();
            $attribute->fill($request->validated());
            $attribute->customer_id = auth()->user()->customer_id;

            $attribute->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new AttributeResource($attribute);
    }

    public function show(Attribute $attribute): AttributeResource
    {
        return new AttributeResource($attribute);
    }

    public function update(AttributeCreateUpdateRequest $request, Attribute $attribute): AttributeResource
    {
        try {
            $attribute->update($request->validated());
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new AttributeResource($attribute);
    }

    public function destroy(Attribute $attribute): void
    {
        $attribute->delete();
    }

    public function options()
    {
        $this->authorize('view attributes');

        return Attribute::pluck('title', 'id');
    }
}
