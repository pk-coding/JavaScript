const htmlEl = (arg) => {
    return document.querySelector(`${arg}`);
}

// ----------------------------------------------------------------------------------------------------------

const increment = () => {
    htmlEl('#inputNumber').value++;
    showInfo();
}
htmlEl('#buttonNumberIncrement').addEventListener('click', increment);

// ----------------------------------------------------------------------------------------------------------

const decrement = () => {
    htmlEl('#inputNumber').value--;
    showInfo();
}
htmlEl('#buttonNumberDecrement').addEventListener('click', decrement);

// ----------------------------------------------------------------------------------------------------------

const showInfo = () => {
    if (htmlEl('#inputNumber').value == 0) {
        htmlEl('#pInfo').innerHTML = "Number is equal zero";
        htmlEl('#pInfo').style.color = "orange"
    };
    if (htmlEl('#inputNumber').value > 0) {
        htmlEl('#pInfo').innerHTML = "Number is greater than zero";
        htmlEl('#pInfo').style.color = "green"
    };
    if (htmlEl('#inputNumber').value < 0) {
        htmlEl('#pInfo').innerHTML = "Number is smaller than zero";
        htmlEl('#pInfo').style.color = "red"
    };
}

// ----------------------------------------------------------------------------------------------------------

const check = () => {
    localStorage.setItem("inputNumberValue", htmlEl('#inputNumber').value);
}
htmlEl('#check').addEventListener('click', check);

// ----------------------------------------------------------------------------------------------------------

const showInputNumberValue = () => {
    localStorage.getItem('returnInputNumberValue') ? htmlEl('#inputNumber').value = localStorage.getItem('returnInputNumberValue') : htmlEl('#inputNumber').value = 0;
    localStorage.removeItem("returnInputNumberValue");
}
window.addEventListener('load', showInputNumberValue);