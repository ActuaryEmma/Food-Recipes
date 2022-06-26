// 

const searchForm = document.querySelector("#form"); 
searchForm.addEventListener("click", (event) => {
    const searchButton = document.querySelector(".search-bar").value; 
    event.preventDefault();
    console.log(searchButton)
})
const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`;
    fetch(food)
    .then((res) => res.json())
    .then (dataRecipes => {
        console.log(dataRecipes)
    

    })


const form1 = document.getElementById("form1")
form1.addEventListener("click", (event)=>{
    const searchInput = document.getElementById("recipeSearch").value;
    event.preventDefault();
    console.log(searchInput);}) 
                
const food1 =`https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`;
            
fetch(food1)
.then((res) => res.json())
.then (dataRecipes => {
    console.log(dataRecipes)
})
            
    
            



// searchForm.addEventListener("submit", (event) => {
//     const searchButton = document.querySelector(".search-bar").value; 
//     event.preventDefault();
//     console.log(searchButton)
//     const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchButton}`;
//     fetch(food)
//     .then((res) => res.json())
//     .then (dataRecipes => {
//         console.log(dataRecipes)
            

//     })
// })