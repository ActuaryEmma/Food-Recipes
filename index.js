const food =`https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`;
    fetch(food)
    .then((res) => res.json())
    .then (dataRecipes => {
        console.log(dataRecipes)
    

    })