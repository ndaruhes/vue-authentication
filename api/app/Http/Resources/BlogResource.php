<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if(Auth::user()->role == 'Admin'){
            return [
                'id' => $this->id,
                'title' => $this->judul,
                'content' => $this->content,
                'created_by' => $this->user->name,
                'published' => $this->created_at->diffForHumans()
            ];
        }else if(Auth::user()->role == 'Member'){
            return [
                'id' => $this->id,
                'title' => $this->judul,
                'content' => $this->content,
                'published' => $this->created_at->diffForHumans()
            ];
        }
    }
}
