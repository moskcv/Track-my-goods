<?php

use App\Http\Controllers\V1\AttributeController;
use App\Http\Controllers\V1\CategoryController;
use App\Http\Controllers\V1\CustomerController;
use App\Http\Controllers\V1\PermissionController;
use App\Http\Controllers\V1\RoleController;
use App\Http\Controllers\V1\StorageController;
use App\Http\Controllers\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    Route::get('customers/options', [CustomerController::class, 'options']);
    Route::apiResource('customers', CustomerController::class);

    Route::get('roles/options', [RoleController::class, 'options']);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('users', UserController::class);

    Route::get('categories/options', [CategoryController::class, 'options']);
    Route::apiResource('categories', CategoryController::class);

    Route::get('attributes/options', [AttributeController::class, 'options']);
    Route::apiResource('attributes', AttributeController::class);

    Route::get('storages/options', [StorageController::class, 'options']);
    Route::apiResource('storages', StorageController::class);

    Route::get('permissions', [PermissionController::class, 'index']);
});
