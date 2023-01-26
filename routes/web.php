<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/login', function () {
    return view('app');
})->name('login');

Route::middleware('auth')->get('{catchall}', function () {
    if (! auth()->check()) {
        redirect('/login');
    }

    return view('app');
})->where('catchall', '.*');
