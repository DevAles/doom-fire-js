import renderFire from "./renderFire.js";

export default function lightFire(fireArray, fireWidth, fireHeight){
    for(let fireColumn = 0; fireColumn <= fireWidth; fireColumn++){
        const lastPosition = fireWidth * fireHeight;
        const firePosition = (lastPosition - fireWidth) + fireColumn;

        fireArray[firePosition] = 36
    }

    function firePropagation(){
        for(let fireLine = 0; fireHeight > fireLine; fireLine++){

            for(let fireColumn = 0; fireWidth > fireColumn; fireColumn++){
                const firePosition = fireColumn + (fireWidth * fireLine);

                updateFireIntensity(firePosition)
            }
        }
        renderFire(fireArray, fireWidth, fireHeight)
    }

    function updateFireIntensity(firePosition){
        const nextLineFire = firePosition + fireWidth;
        const nextLineFireIntensity = fireArray[nextLineFire]
        const decay = Math.floor(Math.random() * 3)
        const fireIntensity = 
        nextLineFireIntensity - decay >= 0 ? nextLineFireIntensity - decay : 0

        if (nextLineFire >= fireWidth * fireHeight){
            return;
        }

        fireArray[firePosition - decay] = fireIntensity;
        
    }

    return{
        firePropagation,
        updateFireIntensity
    }
}