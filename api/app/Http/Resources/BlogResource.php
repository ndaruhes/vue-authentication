<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
        return [
            'title' => $this->judul,
            'content' => $this->content,
            'created_by' => $this->user->name,
            'published' => $this->created_at->diffForHumans()
        ];
    }
}
