<?php

use App\Http\Controllers\V1\CustomerController;
use App\Http\Controllers\V1\ProductController;
use App\Http\Controllers\V1\SkuController;
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
    Route::apiResource('customers', CustomerController::class);
    Route::apiResource('skus', SkuController::class);
    Route::apiResource('products', ProductController::class);
});
