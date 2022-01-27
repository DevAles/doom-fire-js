export default function createFire(fireArray, fireWidth, fireHeight){
    const allFire = fireWidth * fireHeight;

    console.log('> Starting Fire');
    for(let fireLength = 0; allFire > fireLength; fireLength++){
        fireArray[fireLength] = 0;
    }
}