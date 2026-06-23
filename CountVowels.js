
        let count = 0;
        function CountVowels(str){
            for(const char of str){
                if(char === "a" || char === "A" ||       // OR logic symbol
                    char === "e" || char === "E" ||
                    char === "i" || char === "I" ||
                    char === "o" || char === "O" ||
                    char === "u" || char === "U"
                ){
                    count+=1;
                }
            }
        }
        let string = prompt("Enter a Word:")
        console.log(string);
        CountVowels(string);
        console.log("Number of vowels in this word = ",count);
