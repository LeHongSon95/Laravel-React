<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Product;
// use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function listProduct()
    {
        $product = Product::with('loai')->get();

        $arr = [
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'product' => $product
        ];
        return response()->json($arr, 200);

        // return $product;
    }



    function addProduct(Request $request)
    {
        $input = $request->all();

        $data = [
            'tensp' => $input['tensp'],

            "moTa" => $input['moTa'],
            "urlHinh" => $input['urlHinh'],
            "gia" => $input['gia'],
            "idLoai" => $input['idLoai'],
        ];
        $result = DB::table('sanpham')->insert($data);
        // return $data;
        $arr = [
            'status' => true,
            'message' => 'Add product success',
            'data' => $data
        ];

        return response()->json($arr, 200);
    }

    function delete($id)
    {
        $product = Product::where('id', $id)->delete();
        if ($product) {
            $arr = [
                'status' => true,
                'message' => 'delete product success',
                'delete' => $product
            ];
            return response()->json($arr, 200);
        } else {
            return $product;
        }
    }

    public function getProduct($id){
        $data = Product::find($id);
        return response()->json($data, 200);
    }
   

    public function postProduct(Request $request, $id){
        $data = Product::find($id);
        
        $data->tensp = $request->tensp;
        $data->gia = $request->gia;
        $data->urlhinh = $request->urlHinh;
        $data->mota = $request->moTa;
        $data->idLoai = $request->idLoai;
        
        $arr = [
            'status' => true,
            'message' => 'delete product success',
            'data' => $data
        ];
        $data->save();
        return response()->json($arr, 200);
    }

    public function detailProduct($id){
        $product = Product::with('loai')->find($id);
        // dd($product);
        $arr = [
            'status' => true,
            'message' => 'chi tiết sản phẩm',
            'product' => $product
        ];
        
        return response()->json($arr, 200);
    }
    
    public function search($key){
        $product =Product::with('loai')->where('tenSP', 'LIKE', "%$key%")->get();// $input['tensp]                                                                      
        $arr = [
            'status' => true,
            'message' => 'chi tiết sản phẩm',
            'product' => $product
        ];
        
        return response()->json($arr, 200);
    }
    
    // public function search(Request $request)
    // {
    //     $input = $request->all();
    //     $data = Product::where('tensp', 'LIKE', '%' . $input['tensp'] . '%')
    //         ->get();
    //         $arr = [
    //             'status' => true,
    //             'message' => 'chi tiết sản phẩm',
    //             'product' => $data
    //         ];
    //     return response()->json($arr,200);
    // }

    public function catelogy(){
        $result = DB::table("loai")
        ->select('id', 'tenLoai')
        ->get();

        $arr = [
            'status' => true,
            'message' => 'Hiện catelogy',
            'data' => $result
        ];
        return response()->json($arr,200);
    }

    public function catelogyId($id){
        $result = DB::table("loai")
        ->select('id', 'tenLoai')
        ->get();

    $products = DB::table("sanpham")
        ->where('idLoai', "=", $id)
        ->get();
        
        $arr = [
            'status' => true,
            'message' => 'Hiện id theo catelogy ',
            'data' => $result,  $products
        ];
        return  response()->json($arr,200);
    }
}
