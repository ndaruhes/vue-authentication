<?php

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth', 'namespace' => 'App\Http\Controllers\Auth'], function(){
    Route::post('login', 'LoginController');
    Route::post('logout', 'LogoutController');
    Route::get('profile', 'ProfileController');
});
Route::group(['prefix' => 'blog', 'namespace' => 'App\Http\Controllers'], function(){
    Route::post('/create', 'BlogController@create');
    Route::patch('update', 'BlogController@update');
    Route::get('/', 'BlogController@index');
});
