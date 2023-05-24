const position = document.getElementById('position')
const hours = document.getElementById('hours')
const ten = document.getElementById('ten')
const twenty = document.getElementById('twenty')
const sss = document.getElementById('sss')
const pagibig = document.getElementById('pagibig')
const philhealth = document.getElementById('philhealth')
const submit = document.getElementById('submit')

let posValue = 0
let taxValue = 0
let deductionValue = 0
total = 0

submit.addEventListener('click', () => {
    if(hours.value){
        if(position.value == 'Employee'){
            posValue = 150
        }
        else if(position.value == 'Manager'){
            posValue = 250
        }
        else if(position.value == 'Administrator'){
            posValue = 400
        }
        else{
            posValue = 0
        }
        if(document.getElementById('ten').checked){
            taxValue = 0.9
        }
        else if(document.getElementById('twenty').checked){
            taxValue = 0.8
        }
        else{
            taxValue = 1
        }
        if(document.getElementById('sss').checked){
            deductionValue = -100
        }
        if(document.getElementById('pagibig').checked){
            deductionValue += -100
        }
        if(document.getElementById('philhealth').checked){
            deductionValue += -100
        }
        total = ( ( posValue * hours.value ) * taxValue ) + deductionValue
        alert(`Your Salary is ${total}`)
    }
    else{
        alert(`Enter your Hours Worked`)
    }
})
