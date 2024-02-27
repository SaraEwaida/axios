async function getDetailsUsingAxios() {
    const urlParams = new URLSearchParams(window.location.search);
    const id= urlParams.get('pizza_id');
    const response =await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    console.log(response.data);
    const { title, image_url, ingredients } = response.data.recipe;

    document.querySelector(".title").textContent = title;
    document.querySelector("img").src = image_url;
    const result = ingredients.map(function (ele) {
        return `
    <li>${ele}</li>
    `;
    }).join('');
    document.querySelector(".ingredients").innerHTML = result;
}
getDetailsUsingAxios();


async function getDetails(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const response= await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    const data =await response.json();
    const {title,image_url,ingredients}=data.recipe;  //desricptor object 
    document.querySelector(".title").textContent = title;
    document.querySelector("img").src=image_url;
    const result =ingredients.map(function(ele){
        return`
        <li>${ele}</li>
        `;
    } ).join('');
    document.querySelector(".ingredients").innerHTML=result;
}
//getDetails();