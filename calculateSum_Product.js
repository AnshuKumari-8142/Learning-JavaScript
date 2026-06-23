
        let n = prompt("Enter a Number: ");
        let arr = [];
        for(let i = 1; i <= n; i++){
            arr[i - 1] = i;
        }
        console.log(arr);
        let sum = arr.reduce((pre, curr) =>{
            return pre + curr;
        });
        console.log(`Sum of n number of an array = ${sum}`);

        let product = arr.reduce((pre, curr) =>{
            return pre*curr;
        });
        console.log(`Product of n number of an array = ${product}`);
