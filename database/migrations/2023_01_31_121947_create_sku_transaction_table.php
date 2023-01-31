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
        Schema::create('sku_transaction', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sku_id');
            $table->unsignedBigInteger('transaction_id');
            $table->integer('price');
            $table->integer('amount');
            $table->foreign('sku_id')->references('id')->on('skus')->onDelete('cascade');
            $table->foreign('transaction_id')->references('id')->on('transactions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sku_transaction');
    }
};
