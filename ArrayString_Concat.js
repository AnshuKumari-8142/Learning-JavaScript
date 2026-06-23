
        let foodItems = ["Pizza", "Burger", "Pasta", "Fries", "Sandwich"];
        let numbers = [1,2,3,4,5,6,7];
        numbers.toString();
        foodItems.toString();
        console.log(foodItems);
        console.log(numbers);

        let fastFood = ["Pizza", "Burger", "Pasta", "Sandwich"];
        let IndianFood = ["dal", "roti", "rice"];
        let Food = fastFood.concat(IndianFood);
        console.log(Food);

        let FastFood = ["Pizza", "Burger", "Pasta", "Sandwich"];
        fastFood.unshift("meggie");//It's work like push method
        console.log(fastFood);

        FastFood.shift();
        console.log(FastFood);