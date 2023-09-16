let inputs = document.querySelectorAll('.width');
let radioButtons = document.querySelectorAll('.radio');
let radioButtons2 = document.querySelectorAll('.radio2');
let carsDriven = document.querySelectorAll('.carDriven');
let submit = document.querySelector('.submit');
let formValues = {};
let cars = '' ;

submit.addEventListener('click', (e) => {
    inputs.forEach(input => {
        inputValue = input.value;
        inputName = input.name
        formValues = {...formValues,[inputName]:inputValue}
        console.log('done')
    })


    radioButtons.forEach(button => {
        if(button.checked)   formValues = {...formValues,['driven a car']:button.value}
    })

    radioButtons2.forEach(button => {
        if(button.checked)   formValues = {...formValues,['age reached']:button.value}
    })

    carsDriven.forEach(button => {
        if(button.checked) {
            let car = `${button.value}`
            if(!cars) {
                cars = car
                return
            }else{
                cars += `,${car}`
            }
            
            formValues = {...formValues,['carsDriven']:cars}
        }
    })
    console.log(formValues)
    e.preventDefault()
})
