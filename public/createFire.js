//export the function to used as a module
//exporta a função para ser usada como um módulo
export default function createFire(fireArray, fireWidth, fireHeight){
    const allFire = fireWidth * fireHeight;

    console.log('> Starting Fire');
    //add the fire length in array 
    //adiciona o comprimento de fogo no array
    for(let fireLength = 0; allFire > fireLength; fireLength++){
        fireArray[fireLength] = 0;
    }
}