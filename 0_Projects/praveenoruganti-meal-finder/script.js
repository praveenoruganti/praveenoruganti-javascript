const searchInput = document.getElementById('search'),
 searchbtn = document.getElementById('searchbtn'),
 randombtn = document.getElementById('random'),
 result = document.getElementById('result-heading'),
 meals = document.getElementById('meals'),
 singleMeal = document.getElementById('single-meal');
 console.log(searchbtn);

 /* Function for searching meal and fetch from API */
 function searchMeal(e){
    e.preventDefault();
    /* Clear single meal */
    singleMeal.innerHTML = '';

    /* Get Search term */
    const term = searchInput.value;
    
    /* Check for empty */
    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            result.innerHTML =`<h2>Search results for '${term}':</h2>`
            if(data.meals === null){
                result.innerHTML=`There are no such meal.Please Try something else`;
                meals.innerHTML = '';
            } else{
                meals.innerHTML = data.meals.map(meal =>
                    `<div class ="meal">
                        <img src='${meal.strMealThumb}' href='${meal.strMeal}' />
                        <div class = "meal-info" data-mealID= "${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                     </div>
                    `).join('');
                }
        });
        //clear search text
        searchInput.value = '';
    }else{
        alert('Please enter a search term');
    }
 }

/* Fetch meal by ID */
function getMealById(mealID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res=>res.json())
        .then(data =>{
            const meal =data.meals[0];
            addMealToDOM(meal);
        });
}

/* Add meal to DOM */
function addMealToDOM(meal){
    const ingredients = [];
    for(let i =1 ;i<=20;i++){
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
           
        }else{
            break;
        }
    }

 
    singleMeal.innerHTML=`
        <div class = "single-meal">
            <h1>${meal.strMeal}</h1>
            <img src='${meal.strMealThumb}' href='${meal.strMeal}' />
            <div class='single-meal-info'>
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
            </div>
            <div class="main">
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
        </div>
     `
}

/* Fetch random meal */
function getRandomMeal(){
    meals.innerHTML = '';
    result.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res=>res.json())
    .then(data=>{
        const meal =data.meals[0];
            addMealToDOM(meal);
    })

}

 /* Event Listener */
 searchbtn.addEventListener('click',searchMeal);
 randombtn.addEventListener('click',getRandomMeal);

 /* Individual data showing part  */
 meals.addEventListener('click',e=>{
     const mealInfo = e.path.find(item=>{
         if(item.classList){
            return item.classList.contains('meal-info');
         } else{
             return false;
         }
     });
     if(mealInfo){
         const mealID = mealInfo.getAttribute('data-mealid');
         getMealById(mealID);
     }
 })


