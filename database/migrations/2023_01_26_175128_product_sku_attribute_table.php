<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_sku_attribute', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_sku_id');
            $table->unsignedBigInteger('attribute_id');
            $table->string('value');
            $table->foreign('product_sku_id')->references('id')->on('product_skus')->onDelete('cascade');
            $table->foreign('attribute_id')->references('id')->on('attributes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_sku_attribute');
    }
};
