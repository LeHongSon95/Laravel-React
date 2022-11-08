<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
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

Route::get('/',[HomeController::class,'listProduct']);
Route::post('/addProduct',[HomeController::class,'addProduct']);
Route::delete('/delete/{id}',[HomeController::class,'delete']);
Route::get('/editProduct/{id}',[HomeController::class,'getProduct']);
Route::put('/editProduct/{id}',[HomeController::class,'postProduct']);
Route::get('/detail/{id}',[HomeController::class,'detailProduct']);
// Route::get('/search/{tensp}',[HomeController::class,'search']);
Route::get('/search/{key}',[HomeController::class,'search']);
// Route::get('/search/',[HomeController::class,'listProduct']);
Route::get('/catelogy',[HomeController::class,'catelogy']);
Route::get('/catelogy/{id}',[HomeController::class,'catelogyId']);