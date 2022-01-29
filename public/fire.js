//import the renderFire to be called in line 21
//importa o renderFire para ser chamado na linha 21
import renderFire from "./renderFire.js";

export default function lightFire(fireArray, fireWidth, fireHeight){
    // get the current fire position using the last fire position
    // pega a posição atual do fogo usando a última posição do fogo

    for(let fireColumn = 0; fireColumn <= fireWidth; fireColumn++){
        const lastPosition = fireWidth * fireHeight;
        const firePosition = (lastPosition - fireWidth) + fireColumn;

        //limit of fire intensity in each firePosition
        //limite de intensidade de fogo em cada firePosition
        fireArray[firePosition] = 36
    }

    function firePropagation(){
        // while fireHeigth is greater than or equal fireLine, add +1 to fireLine 
        // enquanto fireHeight for maior ou igual a fireLine, adicione +1 na fireLine

        for(let fireLine = 0; fireHeight > fireLine; fireLine++){

            // while fireWidth is greater than or equal fireColumn, add +1 to fireColumn
            // enquanto fireWidth for maior ou igual a fireColumn, adicione +1 na fireColumn

            for(let fireColumn = 0; fireWidth > fireColumn; fireColumn++){
                // update the fire intensity according to current fire position
                // atualiza a intensidade do fogo de acordo com a posição do fogo atual

                const firePosition = fireColumn + (fireWidth * fireLine);

                updateFireIntensity(firePosition)
            }
        }
        //render the fire with intensity changed
        //renderiza o fogo com intensidade alterada
        renderFire(fireArray, fireWidth, fireHeight)
    }

    function updateFireIntensity(firePosition){
        const nextLineFire = firePosition + fireWidth;
        const nextLineFireIntensity = fireArray[nextLineFire]
        // the decay control the variation intensity and direction of the fire
        // o decay controla a variação de intensidade e direção do fogo
        const decay = Math.floor(Math.random() * 3)

        /* this variable stores the fire intensity and 
        ensures that the intensity will always be greater than or equal to 0 */

        /* essa variável armazena a intensidade de fogo e
        garante que a intensidade sempre vai ser maior ou igual a 0  */
        const fireIntensity = (nextLineFireIntensity - decay >= 0 ? nextLineFireIntensity - decay : 0)

        // verify if the next line fire is greater than all fire
        // verifica se a próxima linha é maior do que todo o fogo
        if (nextLineFire >= fireWidth * fireHeight){
            return;
        }

        // determinate the intensity of fire
        // determina a intensidade de fogo
        fireArray[firePosition - decay] = fireIntensity;
        
    }

    // exposes the factory functions
    // expõe as funcões da factory
    return{
        firePropagation,
        updateFireIntensity
    }
}