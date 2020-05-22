let dierolls = []
let rollButton = document.querySelector("#dice-role")
let totalRolls = document.querySelector("#number-of-rolls")
let totalOutcome = document.querySelector("#sum-of-rolls")
let diceNumber = document.querySelector("#dice")
let DisplayRolls = document.querySelector("#dice-number")
let resets = document.querySelector("#reset-button")
let resetDice = 0
let resetTotal = "The Sum Of All Rolls"
let resetDisplays = 0 
let index = 0
let diceindex = 0

rollButton.addEventListener('click', function () {
    let TotalSum = 0
    let totalDice = diceNumber.value
while (index < totalDice) {
    let randomNUmber = Math.floor((Math.random() * 6) + 1)
    dierolls.push(randomNUmber)
   TotalSum += randomNUmber
    index += 1
}
totalOutcome.innerHTML = "The Sum Of All Rolls " + TotalSum
})
    console.log(index)
totalRolls.addEventListener('click', function(){
    while (diceindex < dierolls.length) {
      let cup = document.createElement('li')
        cup.innerHTML = dierolls[diceindex]
    DisplayRolls.appendChild(cup)
        diceindex += 1
    }
 
})
console.log(diceindex)
