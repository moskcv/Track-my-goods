<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\ProductSku;
use Illuminate\Http\Request;

class ProductSkuController extends Controller
{
    public function index()
    {
        return ProductSku::with('attributes')->get();
    }

    public function store(Request $request)
    {
        $productSku = new ProductSku($request->all());
        $productSku->save();

        return $productSku;
    }

    public function show(ProductSku $productSku)
    {
        return $productSku;
    }

    public function update(Request $request, ProductSku $productSku)
    {
        $productSku->update($request->all());

        return $productSku;
    }

    public function destroy(ProductSku $productSku)
    {
        $productSku->delete();
    }
}
