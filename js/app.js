let from = document.querySelector("#from");
let to = document.querySelector("#to");
let fromUnit = document.querySelector("#from-unit");
let toUnit = document.querySelector("#to-unit");
let convertedValue = document.querySelector("#converted-value")

function convertUnit(){
    let convertedFromValue = parseInt(from.value);
    let convertedToValue = parseInt(to.value);
    console.log(fromUnit.values);
    let result;
    if (fromUnit === toUnit) {
        alert(`You can't convert the same unit`)
    } else if (fromUnit !== toUnit){
        if (fromUnit.value !== 'ft' && fromUnit.value !== 'miles' && fromUnit.value !== 'km') {
            console.log('Invalid Unit');
        } else if (toUnit.value !== 'ft' && toUnit.value !== 'miles' && toUnit.value !== 'km'){
            console.log('Invalid Unit')
        } else if (fromUnit.value === 'ft' && toUnit.value === 'miles'){
            result = convertedFromValue / 5280;
        } else if (fromUnit.value === 'ft' && toUnit.value === 'km'){
            result = convertedFromValue / 3281;
        } else if (fromUnit.value === 'miles' && toUnit.value === 'ft'){
            result = convertedFromValue * 5280;
        } else if (fromUnit.value === 'miles' && toUnit.value === 'km'){
            result = convertedFromValue * 1.609;
        } else if (fromUnit.value === 'km' && toUnit.value === 'ft'){
            result = convertedFromValue * 3281;
        } else if (fromUnit.value === 'km' && toUnit.value === 'miles'){
            result = convertedFromValue / 1.609;
        }
    }
    to.value = result;
}