
async function getDataUsingAxios(){
    const respone = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')//get request returns promise
    //automatic transforms data from json 
    const recipes =respone.data.recipes;
    
    const result =recipes.map(function(recipe){
        return`
            <div>
            
                <h2>${recipe.title}</h2>
                <img src="${recipe.image_url}"></img>
                <a href ="details.html?pizza_id=${recipe.recipe_id}">Details</a>

            </div>

        `;
    } ).join('');
    document.querySelector(".pizza-section .row").innerHTML=result;
}
getDataUsingAxios();

async function getData(){
    const response =await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data =await  response.json();
    const recipes =data.recipes;
    
    const result =recipes.map(function(recipe){
        return`
            <div>
            
                <h2>${recipe.title}</h2>
                <img src="${recipe.image_url}"></img>
                <a href ="details.html?pizza_id=${recipe.recipe_id}">Details</a>

            </div>

        `;
    } ).join('');
    document.querySelector(".pizza-section .row").innerHTML=result;
}
//getData();