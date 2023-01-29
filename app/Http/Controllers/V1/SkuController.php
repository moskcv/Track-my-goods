<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Sku;
use Illuminate\Http\Request;

class SkuController extends Controller
{
    public function index()
    {
        return Sku::with('attributes')->get();
    }

    public function store(Request $request)
    {
        $productSku = new Sku($request->all());
        $productSku->save();

        return $productSku;
    }

    public function show(Sku $productSku)
    {
        return $productSku;
    }

    public function update(Request $request, Sku $productSku)
    {
        $productSku->update($request->all());

        return $productSku;
    }

    public function destroy(Sku $productSku)
    {
        $productSku->delete();
    }
}
