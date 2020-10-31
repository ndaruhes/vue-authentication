<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(){
        $blog = Blog::with('user')->latest()->paginate(5);
        return BlogResource::collection($blog);

    }

    public function store(){

    }
}
