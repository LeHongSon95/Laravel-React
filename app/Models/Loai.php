<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loai extends Model
{
    protected $table = 'loai';
    protected $fillbale = ['tenLoai', 'id'];
    protected $primaryKey = 'id';
    protected $guarded = [];
    use HasFactory;

    public function Product(){
        return $this->hasMany(Product::class, 'id');
    }
}
