let button1 = document.getElementById("button-fetch");
console.log(button1);
button1.addEventListener("click", handleClick);

function getJoke(){
    let apiURL = `https://api.chucknorris.io/jokes/random`;
        fetch(apiURL)
        .then((response) => response.json())
        .then((result) => displayJoke(result.value))
        .catch(error => console.log(error))
        console.log("HEY THERE FROM getJoke() function");
    }

    getJoke();


    function displayJoke(joke) {
        console.log(joke);
        let displayFetch = document.getElementById("display-fetch");
        displayFetch.innerText = ""
        let para = document.createElement("p");
        para.innerText = joke;
        displayFetch.appendChild(para);
    }

    function handleClick() {
        getJoke();
    }

    

    //What are we attaching to in order to display the fetched results?
 //Create a P tag
 //Set the Inner-text
 //Append the P tag that was just created in 3 lines above    
    


//async function getJokeAsync(){
 //   let apiURL = `https://api.chucknorris.io/jokes/random`;
   // try{
    //const response = await fetch(apiURL) //JASON Format
    //const result = await response.json() //Converts to OBJ Literal
    //}catch(error){
    //console.log(result);
   // }
    //console.log("HEY THERE FROM getJokeAsync() function");
//}

//getJokeAsync();