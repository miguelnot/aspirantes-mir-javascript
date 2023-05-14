function join(array1){
    let stringNombres = [];
    let long = array1.length
    
    for(let i = 0; i < long; i++){
        stringNombres = stringNombres + array1[i]  + " "

    }

return stringNombres;

}

console.log(join(["Juan", "Pedro", "Miguel"]))