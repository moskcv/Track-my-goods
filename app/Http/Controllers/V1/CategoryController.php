<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryCreateUpdateRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Category::class, 'category');
    }

    public function index(): AnonymousResourceCollection
    {
        return CategoryResource::collection(Category::with('parent')->paginate(config('platform.max_per_page')));
    }

    public function store(CategoryCreateUpdateRequest $request): CategoryResource
    {
        try {
            $category = new Category();
            $category->fill($request->validated());
            $category->customer_id = auth()->user()->customer_id;

            $category->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new CategoryResource($category);
    }

    public function show(Category $category): CategoryResource
    {
        return new CategoryResource($category);
    }

    public function update(CategoryCreateUpdateRequest $request, Category $category): CategoryResource
    {
        try {
            $category->update($request->validated());
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new CategoryResource($category);
    }

    public function destroy(Category $category): void
    {
        $category->delete();
    }

    public function options()
    {
        $this->authorize('view categories');

        return Category::pluck('title', 'id');
    }
}
