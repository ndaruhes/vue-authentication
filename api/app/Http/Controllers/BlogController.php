<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function index()
    {
        if (Auth::user()->role == 'Admin') {
            $blog = Blog::with('user')->latest()->paginate(5);
            return BlogResource::collection($blog);
        } else if (Auth::user()->role == 'Member') {
            $blog = Blog::where('user_id', '=', Auth::user()->id)->with('user')->latest()->paginate(5);
            return BlogResource::collection($blog);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'judul'     => 'required|min: 3',
                'content'   => 'required|min: 3',
            ],
            [
                'judul.required' => 'Masukkan Title Post !',
                'judul.min' => 'minimal 3 huruf',
                'content.required' => 'Masukkan Content Post !',
                'content.min' => 'minimal 3 huruf',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Silahkan Isi Bidang Yang Kosong',
                'data'    => $validator->errors()
            ], 400);
        } else {
            Blog::create([
                'judul' => $request->judul,
                'content' => $request->content,
                'user_id' => Auth::user()->id
            ]);
            return response()->json('Blog berhasil dibuat');
        }
    }

    public function show($id){
        // dd($id);
        $blog = Blog::find($id);
        return response()->json([
            'id' => $blog->id,
            'judul' => $blog->judul,
            'content' => $blog->content
        ]);
    }

    public function destroy($id)
    {
        Blog::where('id', '=', $id)->delete();
        return response()->json('Berhasil dihapus');
    }
}
