let drinkName = prompt('What drink would you like?');
let size = prompt('What size would you like?');
let iceLevel = prompt('How much ice would you like?')
let sugarLevel = prompt('How much sugar would you like?')
let topping = prompt('What toppings would you like?')

document.getElementById('drink-name').innerHTML=drinkName;
document.getElementById('size').innerHTML=size;
document.getElementById('ice-level').innerHTML=iceLevel;
document.getElementById('sugar-level').innerHTML=sugarLevel;
document.getElementById('topping').innerHTML=topping;