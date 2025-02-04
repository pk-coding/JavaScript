const data = {
  zero: 0,
  jeden: 1,
  dwa: 2,
  trzy: 3,
  cztery: 4,
  pięć: 5,
  sześć: 6,
  siedem: 7,
  osiem: 8,
  dziewięć: 9,
  dziesięć: 10,
  jedenaście: 11,
  dwanaście: 12,
  trzynaście: 13,
  czternaście: 14,
  piętnaście: 15,
  szesnaście: 16,
  siedemnaście: 17,
  osiemnaście: 18,
  dziewiętnaście: 19,
  dwadzieścia: 20,
  trzydzieści: 30,
  czterdzieści: 40,
  pięćdziesiąt: 50,
  sześćdziesiąt: 60,
  siedemdziesiąt: 70,
  osiemdziesiąt: 80,
  dziewięćdziesiąt: 90,
  sto: 100,
  dwieście: 200,
  trzysta: 300,
  czterysta: 400,
  pięćset: 500,
  sześćset: 600,
  siedemset: 700,
  osiemset: 800,
  dziewięćset: 900,
  tysiąc: 1000,
  tysiące: 1000,
  tysięcy: 1000,
  million: 1000000,
  milliony: 1000000,
  millionów: 1000000,
  billion: 1000000000,
  billiony: 1000000000,
  billionów: 1000000000,
  trillion: 1000000000000,
  trilliony: 1000000000000,
  trillionów: 1000000000000,
  quadrillion: 1000000000000000,
  quadrilliony: 1000000000000000,
  quadrillionów: 1000000000000000,
  quintillion: 1000000000000000000,
  quintilliony: 1000000000000000000,
  quintillionów: 1000000000000000000,
  sextillion: 1000000000000000000000,
  sextilliony: 1000000000000000000000,
  sextillionów: 1000000000000000000000,
  septillion: 1000000000000000000000000,
  septilliony: 1000000000000000000000000,
  septillionów: 1000000000000000000000000,
  octillion: 1000000000000000000000000000,
  octilliony: 1000000000000000000000000000,
  octillionów: 1000000000000000000000000000,
  nonillion: 1000000000000000000000000000000,
  nonilliony: 1000000000000000000000000000000,
  nonillionów: 1000000000000000000000000000000,
  decillion: 1000000000000000000000000000000000,
  decilliony: 1000000000000000000000000000000000,
  decillionów: 1000000000000000000000000000000000,
  plus: "+",
  minus: "-",
  razy: "*",
  podzielić: "/",
};

document.getElementById("buttonPolicz").addEventListener("click", function () { main("text"); });
document.getElementById("inputText").addEventListener("keypress", keypressEnterAsClickButtonPolicz);
document.getElementById("inputText").addEventListener("change", () => { localStorage.setItem("text", document.getElementById("inputText").value); });
document.getElementById("buttonResetuj").addEventListener("click", () => { window.location.reload(); });
window.addEventListener("load", () => { localStorage.removeItem("text"); });

function main(data) {
  let result = data;
  result = splitFromLocalStorage(result);
  result = removeValueNA(result);
  result = changeWordsIntoIntegersAndMathOperators(result);
  result = checkUndefined(result);
  result = creatingWholeNumbersForValuesLowerOrEqual999(result);
  result = creatingWholeNumbersForValuesBiggerThan999(result);
  result = finalPreparationForCounting(result);
  result = setNegativeNumbers(result);
  result = calculatedResult(result);
  console.log("Result from main() function:", result);
  result = displayResult(result);
  return result;
}

function keypressEnterAsClickButtonPolicz(event) {
  localStorage.setItem("text", document.getElementById("inputText").value);
  let press_enter = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
  if (press_enter == 13) {
    main("text");
  }
}

function splitFromLocalStorage(localStorageKey) {
  const valueFromLocalStorage = localStorage.getItem(localStorageKey);
  if (valueFromLocalStorage) {
    const splitValues = valueFromLocalStorage.split(" ");
    console.log(splitValues);
    return splitValues;
  } else {
    let infoForMissingValue =
      "Wpisz działanie matematyczne w wyznaczonym polu.";
    alert(infoForMissingValue);
    document.getElementById("pNumber").innerHTML = infoForMissingValue;
    console.log(infoForMissingValue);
    return 0;
  }
}

function removeValueNA(dataFromLocalStorage) {
  let removedAllValuesNA = [];
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    if (dataFromLocalStorage[i] !== "na") {
      removedAllValuesNA.push(dataFromLocalStorage[i]);
    }
  }
  console.log(removedAllValuesNA);
  return removedAllValuesNA;
}

function changeWordsIntoIntegersAndMathOperators(dataFromLocalStorage) {
  const dataKeys = Object.keys(data);
  const dataValues = Object.values(data);
  let integersAndOperatorsArray = [];
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    let check = dataKeys.indexOf(dataFromLocalStorage[i]);
    integersAndOperatorsArray.push(dataValues[check]);
  }
  console.log(integersAndOperatorsArray);
  return integersAndOperatorsArray;
}

function checkUndefined(dataFromLocalStorage) {
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    if (dataFromLocalStorage[i] === undefined) {
      document.getElementById("pNumber").innerHTML =
        "Sprawdź poprawność wpisanych słów.";
      alert("Sprawdź poprawność wpisanych słów.");
      return 0;
    }
  }
  console.log(dataFromLocalStorage);
  return dataFromLocalStorage;
}

function creatingWholeNumbersForValuesLowerOrEqual999(dataFromLocalStorage) {
  let wholeNumber = 0;
  let wholeNumbersArray = [];
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    if (dataFromLocalStorage[i] <= 999) {
      wholeNumber += dataFromLocalStorage[i];
      if (i == dataFromLocalStorage.length - 1) {
        wholeNumbersArray.push(wholeNumber);
        wholeNumber = 0;
        continue;
      }
    } else if (dataFromLocalStorage[i] > 999) {
      wholeNumbersArray.push(wholeNumber);
      wholeNumbersArray.push(dataFromLocalStorage[i]);
      wholeNumber = 0;
      continue;
    } else {
      wholeNumber != 0 ? wholeNumbersArray.push(wholeNumber) : 0;
      wholeNumbersArray.push(dataFromLocalStorage[i]);
      wholeNumber = 0;
    }
  }
  console.log(wholeNumbersArray);
  return wholeNumbersArray;
}

function creatingWholeNumbersForValuesBiggerThan999(dataFromLocalStorage) {
  let wholeNumber = 0;
  let wholeNumbersArray = [];
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    if (
      dataFromLocalStorage[i] == 1000 ||
      dataFromLocalStorage[i] == 1000000 ||
      dataFromLocalStorage[i] == 1000000000 ||
      dataFromLocalStorage[i] == 1000000000000 ||
      dataFromLocalStorage[i] == 1000000000000000 ||
      dataFromLocalStorage[i] == 1000000000000000000 ||
      dataFromLocalStorage[i] == 1000000000000000000000 ||
      dataFromLocalStorage[i] == 1000000000000000000000000 ||
      dataFromLocalStorage[i] == 1000000000000000000000000000 ||
      dataFromLocalStorage[i] == 1000000000000000000000000000000 ||
      dataFromLocalStorage == 1000000000000000000000000000000000
    ) {
      wholeNumber = dataFromLocalStorage[i - 1] * dataFromLocalStorage[i];
      wholeNumbersArray.pop();
      wholeNumbersArray.push(wholeNumber);
      wholeNumber = 0;
    } else {
      wholeNumbersArray.push(dataFromLocalStorage[i]);
    }
  }
  console.log(wholeNumbersArray);
  return wholeNumbersArray;
}

function finalPreparationForCounting(dataFromLocalStorage) {
  let wholeNumber = 0;
  let wholeNumbersArray = [];
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    if (typeof dataFromLocalStorage[i] === "number") {
      wholeNumber += dataFromLocalStorage[i];
      if (i == dataFromLocalStorage.length - 1) {
        wholeNumbersArray.push(wholeNumber);
        wholeNumber = 0;
      }
    } else if (typeof dataFromLocalStorage[i] === "string") {
      wholeNumber != 0 ? wholeNumbersArray.push(wholeNumber) : 0;
      wholeNumbersArray.push(dataFromLocalStorage[i]);
      wholeNumber = 0;
    }
  }
  console.log(wholeNumbersArray);
  return wholeNumbersArray;
}

function setNegativeNumbers(dataFromLocalStorage) {
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    let dataFromLocalStorageKeys = Object.keys(dataFromLocalStorage);
    let dataFromLocalStorageValues = Object.values(dataFromLocalStorage);
    if (
      (dataFromLocalStorage[0] == "-" && dataFromLocalStorage[1] == "-") ||
      (dataFromLocalStorage[0] == "+" && dataFromLocalStorage[1] == "-") ||
      (dataFromLocalStorage[0] == "*" && dataFromLocalStorage[1] == "-") ||
      (dataFromLocalStorage[0] == "/" && dataFromLocalStorage[1] == "-")
    ) {
      let checkMinus =
        dataFromLocalStorageValues[dataFromLocalStorageKeys[1]] +
        dataFromLocalStorageValues[dataFromLocalStorageKeys[2]];
      dataFromLocalStorage.splice(
        dataFromLocalStorageKeys[2],
        1,
        Number(checkMinus)
      );
      dataFromLocalStorage.splice(dataFromLocalStorageKeys[0], 1, 0);
    } else if (
      (dataFromLocalStorage[i] == "-" && dataFromLocalStorage[i - 1] == "+") ||
      (dataFromLocalStorage[i] == "-" && dataFromLocalStorage[i - 1] == "-") ||
      (dataFromLocalStorage[i] == "-" && dataFromLocalStorage[i - 1] == "*") ||
      (dataFromLocalStorage[i] == "-" && dataFromLocalStorage[i - 1] == "/") ||
      dataFromLocalStorage[0] == "-"
    ) {
      let checkMinus =
        dataFromLocalStorageValues[dataFromLocalStorageKeys[i]] +
        dataFromLocalStorageValues[dataFromLocalStorageKeys[i + 1]];
      dataFromLocalStorage.splice(
        dataFromLocalStorageKeys[i + 1],
        1,
        Number(checkMinus)
      );
      dataFromLocalStorage.splice(dataFromLocalStorageKeys[i], 1);
    }
  }
  console.log(dataFromLocalStorage);
  return dataFromLocalStorage;
}

function calculatedResult(dataFromLocalStorage) {
  let finalResult
  for (i = 0; i < dataFromLocalStorage.length; i++) {
    if (i == 0) {
      finalResult = dataFromLocalStorage[0];
    }
    switch (dataFromLocalStorage[i]) {
      case "+":
        finalResult = finalResult + dataFromLocalStorage[i + 1];
        break;
      case "-":
        finalResult = finalResult - dataFromLocalStorage[i + 1];
        break;
      case "*":
        finalResult = finalResult * dataFromLocalStorage[i + 1];
        break;
      case "/":
        finalResult = finalResult / dataFromLocalStorage[i + 1];
        break;
      case "**":
        result = Math.pow(dataFromLocalStorage[i - 1], dataFromLocalStorage[i]);
    }
  }
  console.log(finalResult);
  return finalResult;
}

function displayResult(displayResult) {
  document.getElementById("pNumber").innerHTML = "Wynik działania: " + displayResult;
}
