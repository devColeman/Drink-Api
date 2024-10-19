document.querySelector('button').addEventListener('click', run)

function run(){
let input = document.querySelector('input').value


fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
.then(res => res.json())
.then(data => {
    console.log(data.drinks
    )
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h4').innerHTML = data.drinks[0].strDrink
    document.querySelector('h3').innerHTML = data.drinks[0].strInstructions

})
.catch(err => {
    console.log(`Error ${err}`)
})

}