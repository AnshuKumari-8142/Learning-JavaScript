
        let price = [250, 645, 300, 900, 50];
        for(let index = 0; index < price.length; index++){
            console.log(`price of the item = ${price[index]}`);
            let newPrice = price[index] - price[index]*10/100;
            console.log(`price of this item Applying Discount = ${newPrice}`);
        }
