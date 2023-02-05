<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorageCreateUpdateRequest;
use App\Http\Resources\StorageResource;
use App\Models\Storage;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StorageController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Storage::class, 'storage');
    }

    public function index(): AnonymousResourceCollection
    {
        return StorageResource::collection(Storage::paginate(config('platform.max_per_page')));
    }

    public function store(StorageCreateUpdateRequest $request): StorageResource
    {
        try {
            $storage = new Storage();
            $storage->fill($request->validated());
            $storage->customer_id = auth()->user()->customer_id;

            $storage->save();
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new StorageResource($storage);
    }

    public function show(Storage $storage): StorageResource
    {
        return new StorageResource($storage);
    }

    public function update(StorageCreateUpdateRequest $request, Storage $storage): StorageResource
    {
        try {
            $storage->update($request->validated());
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return new StorageResource($storage);
    }

    public function destroy(Storage $storage)
    {
        $storage->delete();
    }

    public function options()
    {
        $this->authorize('view storages');

        return Storage::pluck('title', 'id');
    }
}
