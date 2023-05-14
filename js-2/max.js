// escribe la función max acá
    function max(array1){

        let maxArray = array1[0];
        
        for (let i = 0; i < array1.length; i++){
            
            if(array1[i] > maxArray ){
                
                maxArray = array1[i];

            }   
            
        
        }
        
        return maxArray;

    }



console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined