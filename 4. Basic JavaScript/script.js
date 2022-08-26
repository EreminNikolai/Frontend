function ArithmeticOperations()
{
    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);

    var operations = document.getElementById("operations");
    var selInd = operations.options.selectedIndex;
    let result = 0;
    switch (operations[selInd].value) {
        case "addition":
            result = val1 + val2;
          break;
        case "subtraction":
            result = val1 - val2;
          break;
        case "multiplication":
            result = val1 * val2;
          break;
        case "division":
            result = val1 / val2;
          break;
        default:
          alert( "Нет такой операции" );
      }
    document.getElementById('result').innerHTML = result;
    console.log(result);
}

function WorkWithStrings(){
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;

    var resultConcatenation = str1 + " " + str2;
    document.getElementById('resultConcatenation').innerHTML = resultConcatenation;
    console.log("resultConcatenation=" + resultConcatenation);

    var resultEscaping = `\'${str1}\'${str2} \u{20331}`;
    var template = String.raw`\'${str1}\'${str2} \u{20331}`
    document.getElementById('resultEscapingTemplate').innerHTML = "Шаблон: " + template;
    document.getElementById('resultEscaping').innerHTML = "Result" + resultEscaping;
    console.log("resultEscaping=" + resultEscaping);

    var resultCresultTemplating = `${str1}${str2}`;
    document.getElementById('resultTemplating').innerHTML = resultCresultTemplating;
    console.log("resultCresultTemplating=" + resultCresultTemplating);
}

function CallError(){
    let errorName = document.getElementById('errorName');
    let errorMessage = document.getElementById('errorMessage');
    let errorStack = document.getElementById('errorStack');
    let error = document.getElementById('error');

    try {
        blablabla;
      } catch(err) {
        errorName.innerHTML = err.name;
        errorMessage.innerHTML = err.message;
        errorStack.value = err.stack;
        error.value = err;
      }
}
  
