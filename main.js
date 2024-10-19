document.querySelector('button').addEventListener('click', run)
let i = 0

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
.then(res => res.json())
.then(data => {
    document.querySelector('img').src = data.drinks[0].strDrinkThumb;
    document.querySelector('h4').innerHTML = data.drinks[0].strDrink;
    document.querySelector('h3').innerHTML = data.drinks[0].strInstructions
})




function run(){
let input = document.querySelector('input').value




    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
.then(res => res.json())
.then(data => {
    console.log(data.drinks
    )
   
 if (data.drinks && data.drinks.length > 0) {
    document.querySelector('img').src = data.drinks[i].strDrinkThumb;
    document.querySelector('h4').innerHTML = data.drinks[i].strDrink;
    document.querySelector('h3').innerHTML = data.drinks[i].strInstructions;
    
    i++;
    if (i >= data.drinks.length) {
        i = 0; 

}}else {
    console.log('No drinks found');
}})




.catch(err => {
    console.log(`Error ${err}`)
})

}
