
//const button = document.querySelector('input')

const displayPerson = document.querySelector('p')

const random = Math.floor(Math.random() * 83)

button.addEventListener('click', function(e)  {
    e.preventDefault()
    fetch('https://swapi.dev/api/people/')
    .then(function(response){
        return response.json();
    })
    .then(function(newSWData) {
        console.log(newSWData)
        //displayPerson.innerHTML = newPersonData.value
        
    })
    .catch(function(error){
        console.log('error')
    })
})







/*function getRandomArbitrary(min, max) {
    return Math.random() * (1 - 80) + 1;
  }

  console.log(getRandomArbitrary);

  //Math.floor */