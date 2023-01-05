
const input = document.getElementById ('input')
const convertBtn = document.getElementById ('convert-btn')
const length = document.getElementById ('length')
const volume = document.getElementById ('volume')
const mass = document.getElementById ('mass')

let meter = 3.281
let liter = 0.264
let kilogram = 2.204

convertBtn.addEventListener ('click', function(){
    let baseValue = input.value
    length.textContent =`${input.value} meters = ${(baseValue * meter).toFixed(3)} feet || 
    ${input.value} feet = ${(baseValue / meter).toFixed(3)} meters `
    
    volume.textContent = `${input.value} liters = ${(baseValue * liter).toFixed(3)} gallons || 
    ${input.value} gallons = ${(baseValue / liter).toFixed(3)} liters`
    
    mass.textContent =`${input.value} kilogram = ${(baseValue * kilogram).toFixed(3)} pounds || 
    ${input.value} pounds = ${(baseValue / kilogram).toFixed(3)} kilogram`
})







