// для создания матриц в самом начале
function createMatrices(numberOfMatrices){
    const parentForCreatingMatrix = document.getElementById('matrix-wrapper');
    parentForCreatingMatrix.innerHTML = "";

    for (let i = 1; i <= numberOfMatrices; i++) {
        const newMatrix = document.createElement('div');

        newMatrix.className = 'matrix';
        newMatrix.id = `matrix-${i}`;

        newMatrix.innerHTML =`<div id="matrix-column-${i}" class="matrix-column">
                             <input type="number" id="element-${i}" name="element-${i}" placeholder="элемент"> 
                            </div>`;

        parentForCreatingMatrix.appendChild(newMatrix, parentForCreatingMatrix);
    }
}

// для добавления матрицы(для ответа)
function createMatrix(){
    const parentForCreatingMatrix = document.getElementById('matrix-wrapper');
    let lastMatrixID = document.getElementById('numberOfMatrix').value;

    const newMatrix = document.createElement('div');
    newMatrix.className = 'matrix';
    lastMatrixID = Number(lastMatrixID) + 1;
    newMatrix.id = `matrix-${lastMatrixID}`;

    newMatrix.innerHTML =`<div id="matrix-column-${lastMatrixID + 1}" class="matrix-column">
                            <input type="number" id="element-${lastMatrixID + 1}" name="element-${lastMatrixID + 1}" placeholder="элемент"> 
                        </div>`;

    parentForCreatingMatrix.appendChild(newMatrix, parentForCreatingMatrix);
}

// для создания формы-настройки матрицы
function createForm(numberOfMatrices){
    const parentForm =  document.getElementById('rowsAndColumns-wrapper');
    parentForm.innerHTML = "";

    for (let i = 1; i <= numberOfMatrices; i++) {
        const newForm = document.createElement('div');

        newForm.className = 'rowsAndColumnsForm';
        newForm.id = `rowsAndColumnsForm-${i}`;

        newForm.innerHTML =  `<form method="post" id="rowsAndColumnsForm-${i}" onsubmit="return checkFormRowsAndColumns(this)">                
                              <h2>Для матрицы ${i}</h2>
                              <h3>Количество строк :</h3>
                              <input type="number" id="rows-${i}" name="rows" placeholder="строки"><br>
                              
                              <h3>Количество столбцов :</h3>
                              <input type="number" id="columns-${i}" name="columns" placeholder="столбцы"><br>
                              
                              <input type="submit" name="submit" value="Готово"><br>
                              </form>`;

        parentForm.appendChild(newForm, parentForm);
    }
}

// создание матрицы в самом начале
function addMatricesAndForms(number){
        createForm(number);
        createMatrices(number);
}

//для создания н количества матриц из начальной формы 
function checkFormNumberOfMatrix(form) {
    let lastMatrixID = document.getElementById('numberOfMatrix').value;
    
    addMatricesAndForms(lastMatrixID);


    return lastMatrixID, false;
}



// для добавления строк 
function addRow(parentColumn, rows, matrixNumber, columnNumber) {
    parentColumn.innerHTML = "";

    for (let i = 1; i <= rows; i++) {
        const newElement = document.createElement('div');
        let rowNumber = i;
        newElement.className = 'element';
        newElement.id = `${matrixNumber}-${rowNumber}-${columnNumber}`;

        const newInput = document.createElement('input');
        newInput.type = 'number';
        newInput.placeholder = `Элемент ${i} ${columnNumber}`;

        newElement.appendChild(newInput);

        parentColumn.appendChild(newElement);
    }
}

// для добавления столбцов с авто заполнением колонн
function addColumn(columns, rows, matrixNumber) {
    const parent = document.getElementById(matrixNumber);
    parent.innerHTML = "";

    for (let i = 1; i <= columns; i++) {
        const newColumn = document.createElement('div');
        newColumn.className = 'column';
        newColumn.id = `column-${i}`;

        addRow(newColumn, rows, matrixNumber, i);
        parent.appendChild(newColumn);
    }
}

// для отдельной формы-настройки уже созданной матрицы
function checkFormRowsAndColumns(form) {
    let formId = form.id; 
    let matrixNumber = formId.split('-')[1]; 

    let rows = document.getElementById(`rows-${matrixNumber}`).value;
    let columns = document.getElementById(`columns-${matrixNumber}`).value;

    addColumn(columns, rows, `matrix-${matrixNumber}`);

    return false;
}

// для формы действия
function checkFormAction(form){
    let action = document.getElementById('action').value;
    let lastMatrixID = document.getElementById('numberOfMatrix').value;

    if(action == "sum"){
        answerMatrix(addition(allMatrixToArray(lastMatrixID)));
    }
    else if(action == "sub"){answerMatrix(subtraction(allMatrixToArray(lastMatrixID)))}
    else if(action == "mult"){answerMatrix(multiplication(allMatrixToArray(lastMatrixID)))}
    // else if(action == "div"){answerMatrix(allMatrixToArray(lastMatrixID))}
    // else if(action == "det"){answerMatrix(allMatrixToArray(lastMatrixID))}
    // else if(action == "adj"){answerMatrix(allMatrixToArray(lastMatrixID))}
    // else if(action == "inv"){answerMatrix(allMatrixToArray(lastMatrixID))}
    else {
        return false;
    }
    return false;
}

// для прочтения" матрицы в двумерный массив
function readMatrix(matrixNumber){
    const matrix = document.getElementById(`matrix-${matrixNumber}`);

    if (matrix == null){
        return false;
    }

    const columns = matrix.children;
    const result = [];

    for (let i = 0; i < columns.length; i++) {
        const rows = columns[i].children;
        const column = [];
    
        for (let j = 0; j < rows.length; j++) {
            const value = rows[j].children[0]?.value;
            if (value === undefined){
                return false;
            }

            else if (value !== '') {
                column.push(parseFloat(value));
            }
            else {
                column.push(0);
            }
        }
        result.push(column);
    }
    return result;
}

// 
function allMatrixToArray(lastMatrixID){
    result = [];
    for(counter = 1; counter <= lastMatrixID; counter++){
        if(readMatrix(counter) == false){
            return false;
        }
        result.push(readMatrix(counter));
    }
    return result;
}


function addition(result) {

    if (result == false){
        return false;
    }

    const rows = result[0].length;
    const cols = result[0][0].length;
    const sumArray = Array.from({ length: rows }, () => Array(cols).fill(0));

    // console.log(rows, cols, sumArray)

    for (let matrix = 0; matrix < result.length; matrix++) {
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < cols; column++) {
                sumArray[row][column] += result[matrix][row][column];
            }
        }
    }
    return sumArray;
}

function subtraction(result) {

    if (result == false){
        return false;
    }

    const rows = result[0].length;
    const cols = result[0][0].length;
    const subArray = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let matrix = 0; matrix < 1; matrix++) {
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < cols; column++) {
                subArray[row][column] += result[matrix][row][column];
            }
        }
    }
    for (let matrix = 1; matrix < result.length; matrix++) {
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < cols; column++) {
                subArray[row][column] -= result[matrix][row][column];
            }
        }
    }
    return subArray;
}

function multiplication(result){
    if (result == false){
        return false;
    }

    const rows = result[0].length;
    const cols = result[0][0].length;
    const multArray = Array.from({ length: rows }, () => Array(cols).fill(0));


    // for (let matrix = 0; matrix < result.length--; matrix++) {
    //     for (let row = 0; row < rows; row++) {
    //         for (let column = 0; column < cols; column++) {
    //             
    //         }
    //     }
    // }


    return multArray;
}

function answerMatrix(answerArray){

    if (answerArray == false){
        alert("Добавьте матрицы");
        return false;
    }

    let lastMatrixID = document.getElementById('numberOfMatrix').value;
    createMatrix(lastMatrixID);

    lastMatrixID = Number(lastMatrixID) + 1;
    addColumn(answerArray.length, answerArray[0].length, `matrix-${lastMatrixID}`);

    for(columnNumber = 1; columnNumber <= answerArray.length; columnNumber++){

        for(rowNumber = 1; rowNumber <= answerArray[0].length; rowNumber++){
            let matrix = document.getElementById(`matrix-${lastMatrixID}-${rowNumber}-${columnNumber}`);
            let answer = answerArray[columnNumber - 1][rowNumber - 1];
            // matrix.innerHTML = answerArray[columnNumber - 1][rowNumber - 1];
            matrix.innerHTML = `<input class = "answer" type="number" id="${lastMatrixID}-${rowNumber}-${columnNumber}" name="${lastMatrixID}-${rowNumber}-${columnNumber}" placeholder="${answer}">`; 
        }
    }

    return false;

}



