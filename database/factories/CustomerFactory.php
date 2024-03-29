<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'status' => fake()->randomElement([0, 1, 2]),
            'pricing_plan' => fake()->randomElement([0, 1]),
            'package_type' => fake()->randomElement([0, 1, 2]),
            'payed_at' => null,
            'next_payment_at' => null,
        ];
    }
}
