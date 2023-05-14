// escribe la función sum acá
    function sum(array1) {

        let acumuladora = 0
         
            for (let i= 0; i < array1.length; i ++) {
                
                acumuladora = acumuladora + array1[i]
            }

        return acumuladora
    }


console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

