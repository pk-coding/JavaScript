const htmlEl = (arg) => {
    return document.querySelector(`${arg}`);
}

// ----------------------------------------------------------------------------------------------------------

const showInputNumberValue2 = () => {
    htmlEl('#spanResult').innerHTML = localStorage.getItem('inputNumberValue');
}
window.addEventListener('load', showInputNumberValue2);

// ----------------------------------------------------------------------------------------------------------

const returnInputNumberValue = () => {
    localStorage.setItem("returnInputNumberValue", htmlEl('#spanResult').textContent);
}
htmlEl('#back').addEventListener('click', returnInputNumberValue);