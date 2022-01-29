export default function renderFire(fireArray, fireWidth, fireHeight){
    let tableContent = ``;
    //color pallet
    //paleta de cores
    const fireColor = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]
    let showColors = true;

    console.log('> Rendering Fire');

    //make the renderization of fire in a HTML table
    //faz a renderização do fogo em uma tabela HTML
    for(let fireLine = 0; fireHeight > fireLine; fireLine++){
        console.log('> Loop Line');

        tableContent += `<tr>`;

        for(let fireColumn = 0; fireWidth > fireColumn; fireColumn++){
            const firePosition = fireColumn + (fireWidth * fireLine);
            const fireIntensity = fireArray[firePosition]

            console.log('> Loop Column');
            if(showColors === true){
                const color = fireColor[fireIntensity]
                const colors = `${color.r}, ${color.g}, ${color.b}`
                tableContent += 
                `<td id="showColors" style="background-color: rgb(${colors});">
                </td>`;
                }
                else{
                tableContent += 
                `<td>
                    <span>${fireIntensity}</span>
                    <span id="firePosition">${firePosition}</span>
                </td>`;
            }

        }
        tableContent += `</tr>`;
    }
    //send the changes to HTML
    //envia as mudanças pro HTML
    document.getElementById('fireTable').innerHTML = tableContent;
}