const GRID = document.getElementById('grid')

function createSquares(numOfColAndRows = 16){
    GRID.innerHTML = "";
    initRowStr = '<ul class="row">'
    createSquareStr = ' <li> <div class="square"></div> </li> '
    endRowStr = '</ul>'
    for(let i = 0; i<numOfColAndRows; i++){
        let mainHTMLStr = '';
        mainHTMLStr += initRowStr
        for(let i = 0; i<numOfColAndRows; i++){
            mainHTMLStr += createSquareStr
        }
        GRID.insertAdjacentHTML('afterbegin', mainHTMLStr)
    }
}

function cleanUpChildren(){

}

function answerPrompt(){
    
    let mainNum = null;
    while(typeof mainNum !== "number"){
        mainNum = Number(prompt("Set a row/column."))
        if (mainNum >= 100){
            mainNum = 100;
        }
    }
    createSquares(mainNum);
}

createSquares();