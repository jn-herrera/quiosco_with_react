<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductoCollection;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    //

    public function index()
    {
        return new ProductoCollection(Producto::where('disponible',1)->orderBy('id','DESC')->get());
    }

}
