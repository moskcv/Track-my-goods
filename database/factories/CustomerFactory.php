<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'status' => $this->faker->randomElement([0, 1, 2]),
            'pricing_plan' => $this->faker->randomElement([0, 1]),
            'last_payed_at' => $this->faker->date('Y-m-d'),
        ];
    }
}
