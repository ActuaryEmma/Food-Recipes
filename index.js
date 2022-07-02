
const searchForm = document.querySelector("#form"); 
const getStarted = document.getElementById("btn");




const mealRecipe = document.querySelector(".meal-recipes")
searchForm.addEventListener("submit", (event) => {
    const searchButton = document.querySelector(".search-bar").value; 
    event.preventDefault();
    console.log(searchButton)
    const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchButton}`;
    fetch(food)
    .then((res) => res.json())
    .then (dataRecipes => {
        mealRecipe.innerHTML = ``
        displayMeal(dataRecipes)

    })
    .catch(error =>{
        alert("Meal or recipe does not exist.")

    })
    document.location.href="#meal-recipes"
    console.log("data")
    searchForm.reset();
})


fetch("http://localhost:3000")
.then(res => res.json())
.then(data => console.log(data))






function displayMeal(dataRecipes){
    let mealArrays = dataRecipes.meals
    //console.log(mealArrays)
    mealArrays.forEach(mealObject => {
        //console.log(mealObject)
        console.log(mealObject.strMeal)
        let mealName = mealObject.strMeal;
        let mealImage = mealObject.strMealThumb;
        let mealArea = mealObject.strArea
        let mealInstructions = mealObject.strInstructions
        let mealIngredient1 = mealObject.strIngredient1
        let mealIngredient2 = mealObject.strIngredient2
        let mealIngredient3 = mealObject.strIngredient3
        let mealIngredient4 = mealObject.strIngredient4
        let mealIngredient5 = mealObject.strIngredient5
        let mealIngredient6 = mealObject.strIngredient6
        let mealIngredient7 = mealObject.strIngredient7
        let mealIngredient8 = mealObject.strIngredient8
        let mealIngredient9 = mealObject.strIngredient9
        let mealIngredient10 = mealObject.strIngredient10
        let mealMeasure1 = mealObject.strMeasure1
        let mealMeasure2 = mealObject.strMeasure2
        let mealMeasure3 = mealObject.strMeasure3
        let mealMeasure4 = mealObject.strMeasure4
        let mealMeasure5 = mealObject.strMeasure5
        let mealMeasure6 = mealObject.strMeasure6
        let mealMeasure7 = mealObject.strMeasure7
        let mealMeasure8 = mealObject.strMeasure8
        let mealMeasure9 = mealObject.strMeasure9
        let mealMeasure10 = mealObject.strMeasure10
        //console.log(mealIngredient)
        let likes = 0;
        let displaydiv = document.createElement("div")
        displaydiv.classList.add("mealItem")
        
        displaydiv.innerHTML= 
        `
        <img src="${mealImage}" alt="${mealName}" id="meal-img"/>
        <p class="paragraph">${mealName}</p>
        <p class="paragraph" id="area">Country: ${mealArea}</p>
        

       
        <button class="btn" id="getRecipe">Get Recipe</button>
        <p id="likes">${likes} Likes </p>
        <button class="btn" id="likeBtn">❤️</button>

        <br>
        <br>

        <h3 class="h3instruction">Instructions:</h3>
        <p class="paragraph ingredient-list" id="instruction">${mealInstructions}</p>
        <h3 class="h3instruction">Ingredients:</h3>
        <ol class="ingredient-list">
        <li>${mealIngredient1}</li>
        <li>${mealIngredient2}</li>
        <li>${mealIngredient3}</li>
        <li>${mealIngredient4}</li>
        <li>${mealIngredient5}</li>
        <li>${mealIngredient6}</li>
        <li>${mealIngredient7}</li>
        <li>${mealIngredient8}</li>
        <li>${mealIngredient9}</li>
        <li>${mealIngredient10}</li>
        </ol>
        <h3 class="h3instruction">Measurements:</h3>
        <ol class="ingredient-list">
        <li>${mealMeasure1}</li>
        <li>${mealMeasure2}</li>
        <li>${mealMeasure3}</li>
        <li>${mealMeasure4}</li>
        <li>${mealMeasure5}</li>
        <li>${mealMeasure6}</li>
        <li>${mealMeasure7}</li>
        <li>${mealMeasure8}</li>
        <li>${mealMeasure9}</li>
        <li>${mealMeasure10}</li>
        </ol>

        <br>
        <br>
        <br>
        `

        let headings= displaydiv.querySelectorAll(".h3instruction")
        //console.log(headings)
        let recipeBtn= displaydiv.querySelector("#getRecipe")

        let likeBtn = displaydiv.querySelector("#likeBtn")
        //console.log(idcollection)
        let items = displaydiv.querySelectorAll(".ingredient-list")



        recipeBtn.addEventListener("click", ()=>{
            for (let i of headings){
                if(i.style.display === "none"){
                    i.style.display = "block";
                    recipeBtn.textContent = "Hide Recipe"

                }else {
                    i.style.display = "none"
                    recipeBtn.textContent = "Get Recipe"

                }
                   
            }
            for (let item of items){
                if(item.style.display === "none"){
                    item.style.display = "block";
                //console.log(i) 

                }else {
                    item.style.display = "none"

                }

            }
        
        })
        likeBtn.addEventListener("click", ()=>{
            likes++
            displaydiv.querySelector("#likes").textContent= `${likes} Likes`
        })

        mealRecipe.appendChild(displaydiv)

    })
}
// 

function myFunc() {
    var para = document.getElementById("p");
    para.classList.toggle("paragraphClass");
}

// 

const form1 = document.getElementById("form1")
form1.addEventListener("submit", (event)=>{
    const searchInput = document.getElementById("recipeSearch").value;
    event.preventDefault();
    console.log(searchInput);
    
    const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    fetch(food)
    .then((res) => res.json())
    .then (dataRecipes => {
        mealRecipe.innerHTML = ``
        displayMeal(dataRecipes) 
    })
    .catch(error =>{
        alert("Meal or recipe does not exist.") 
     })
     form1.reset(); 
}) 


fetch("http://localhost:3000/contacts")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data)
})
.catch(error =>{
    alert("Invalid input")
})