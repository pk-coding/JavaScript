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

document.getElementById("inputText").addEventListener("change", () => {
  localStorage.setItem("text", document.getElementById("inputText").value);
});

const calculate = () => {
  if (document.getElementById("inputText").value !== "") {
    const text = localStorage.getItem("text");
    const conector = " ";
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    const textSplit = text.split(conector);
    let valueArray = [];
    let sumArray = [];
    let sum = 0;
    let result = 0;

    for (i = 0; i < textSplit.length; i++) {
      if (textSplit[i] === "na") {
        textSplit.splice(i, 1);
      }
    }

    for (i = 0; i < textSplit.length; i++) {
      let check = dataKeys.indexOf(textSplit[i]);
      valueArray.push(dataValues[check]);
      valueArrayCopy = valueArray.slice();
    }

    for (i = 0; i < valueArray.length; i++) {
      if (valueArray[i] === undefined) {
        document.getElementById("pNumber").innerHTML =
          "Sprawdź poprawność wpisanych słów.";
        alert("Sprawdź poprawność wpisanych słów.");
        return;
      } else if (valueArray[i] <= 999) {
        sum += valueArray[i];
      } else if (
        valueArray[i] == 1000 ||
        valueArray[i] == 1000000 ||
        valueArray[i] == 1000000000 ||
        valueArray[i] == 1000000000000 ||
        valueArray[i] == 1000000000000000 ||
        valueArray[i] == 1000000000000000000 ||
        valueArray[i] == 1000000000000000000000 ||
        valueArray[i] == 1000000000000000000000000 ||
        valueArray[i] == 1000000000000000000000000000 ||
        valueArray[i] == 1000000000000000000000000000000 ||
        valueArray == 1000000000000000000000000000000000
      ) {
        sum *= valueArray[i];
      } else if (valueArray[i] != Number) {
        if (sum != 0) {
          sumArray.push(sum);
        }
        sumArray.push(valueArray[i]);
        sum = 0;
      }
      if (valueArray[i] == 0) {
        sumArray.push(sum);
        sum = 0;
      } else if (i == valueArray.length - 1) {
        sumArray.push(sum);
      }
    }

    for (i = 0; i < sumArray.length; i++) {
      let sumArrayKeys = Object.keys(sumArray);
      let sumArrayValues = Object.values(sumArray);
      if (
        (sumArray[0] == "-" && sumArray[1] == "-") ||
        (sumArray[0] == "+" && sumArray[1] == "-") ||
        (sumArray[0] == "*" && sumArray[1] == "-") ||
        (sumArray[0] == "/" && sumArray[1] == "-")
      ) {
        let checkMinus =
          sumArrayValues[sumArrayKeys[1]] + sumArrayValues[sumArrayKeys[2]];
        sumArray.splice(sumArrayKeys[2], 1, Number(checkMinus));
        sumArray.splice(sumArrayKeys[0], 1, 0);
      } else if (
        (sumArray[i] == "-" && sumArray[i - 1] == "+") ||
        (sumArray[i] == "-" && sumArray[i - 1] == "-") ||
        (sumArray[i] == "-" && sumArray[i - 1] == "*") ||
        (sumArray[i] == "-" && sumArray[i - 1] == "/") ||
        sumArray[0] == "-"
      ) {
        let checkMinus =
          sumArrayValues[sumArrayKeys[i]] + sumArrayValues[sumArrayKeys[i + 1]];
        sumArray.splice(sumArrayKeys[i + 1], 1, Number(checkMinus));
        sumArray.splice(sumArrayKeys[i], 1);
      }
    }

    for (i = 0; i < sumArray.length; i++) {
      if (i == 0) {
        result = sumArray[0];
      }
      switch (sumArray[i]) {
        case "+":
          result = result + sumArray[i + 1];
          break;
        case "-":
          result = result - sumArray[i + 1];
          break;
        case "*":
          result = result * sumArray[i + 1];
          break;
        case "/":
          result = result / sumArray[i + 1];
          break;
        case "**":
          result = Math.pow(sumArray[i - 1], sumArray[i]);
      }
    }
    document.getElementById("pNumber").innerHTML = "Wynik działania: " + result;

    console.log(text);
    console.log(textSplit);
    console.log(valueArrayCopy);
    console.log(valueArray);
    console.log(sumArray);
    console.log(result);
  } else {
    alert("Wpisz działanie matematyczne w wyznaczonym polu.");
    document.getElementById("pNumber").innerHTML =
      "Wpisz działanie matematyczne w wyznaczonym polu.";
  }
};
document.getElementById("buttonPolicz").addEventListener("click", calculate);

const reloadFunction = () => {
  window.location.reload();
};
document.getElementById("buttonResetuj").addEventListener("click", reloadFunction);

function myFunction(event) {
  localStorage.setItem("text", document.getElementById("inputText").value);
  let x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
  if (x == 13) {
    calculate();
  }
}
document.getElementById("inputText").addEventListener("keypress", myFunction);

window.addEventListener("load", () => {
  localStorage.removeItem("text");
});
