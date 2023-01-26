<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    public function index()
    {
        return Attribute::all();
    }

    public function store(Request $request)
    {
        $attribute = new Attribute($request->all());
        $attribute->save();

        return $attribute;
    }

    public function show(Attribute $attribute)
    {
        return $attribute;
    }

    public function update(Request $request, Attribute $attribute)
    {
        $attribute->update($request->all());

        return $attribute;
    }

    public function destroy(Attribute $attribute)
    {
        $attribute->delete();
    }
}
