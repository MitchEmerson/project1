
//Using Promises to return data from the Star Wars API, SWAPI.
//Randomizing the fetched data with Math.floor(Math.random)
//using the data to return .name from the object


button.addEventListener('click', function(e)  {
    e.preventDefault()
    function randomInt()  {
        return Math.floor(Math.random() * 82)
    }
    
    fetch(`https://swapi.dev/api/people/${randomInt()}/`)
    .then(function(response){
        return response.json();
    })
    .then(function(newSWData) {
        console.log(newSWData)
        console.log(newSWData.name)
        document.querySelector(".name").innerHTML = newSWData.name
    })    
      .catch(function(error){
        console.log('error')
    })    
      console.log(randomInt());
      
    })     
    


