// escribe la función maxIndex acá
    function maxIndex(array1){
        if(array1.length === 0) return -1;
        let valorMaximo = array1[0] ;
        let indiceMaximo = 0 ;
        for(let i = 0; i < array1.length; i++){
            if(array1[i] > valorMaximo ){
                
                valorMaximo = array1[i] ;
                indiceMaximo = i ;
            }

     
        }
    
        return indiceMaximo;
    
    }





console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1