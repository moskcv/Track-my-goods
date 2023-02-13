<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCreateUpdateRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return ProductResource::collection(Product::with(['category'])->paginate(config('platform.max_per_page')));
    }

    public function store(ProductCreateUpdateRequest $request): ProductResource
    {
        try {
            $product = new Product();
            $product->fill($request->validated());
            $product->customer_id = auth()->user()->customer_id;

            $product->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new ProductResource($product);
    }

    public function show(Product $product): ProductResource
    {
        return new ProductResource($product);
    }

    public function update(ProductCreateUpdateRequest $request, Product $product): ProductResource
    {
        try {
            $product->update($request->validated());
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new ProductResource($product);
    }

    public function destroy(Product $product): void
    {
        $product->delete();
    }

    public function options()
    {
        return Product::pluck('title', 'id');
    }
}
