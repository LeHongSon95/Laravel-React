<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'sanpham';
    protected $fillbale = ['id','tensp','moTa','urlHinh','gia','idLoai','soLanXem'];
    protected $primaryKey = 'id';
    protected $guarded = [];
    public $timestamps = false;
    use HasFactory;

    public function Loai(){
        return $this->hasOne(Loai::class,'id','idLoai');
    }
}
