console.log("sanity check!")


let exploreButton = document.querySelector('button')
//select the element of where the search is being displayed and assign it to a variable
let displayMovie = document.querySelector('p')
//access the API and grab the data of the search and assign that data to a variable with a condition
const getMovie = (event) => {
  let movieInput = document.getElementById('input').value
  fetch(`http://www.omdbapi.com/?s=${movieInput}&apikey=101d95ae`)
//convert response to json which will return another promise
    .then(response => response.json())
  //our actual data
    .then(data => {
   // iterate through the array data.search
      for (let i = 0; i < data.Search.length; i++) {
          console.log(data.Search[i])
          //creating a div
          let element = document.createElement('div')
          // assigning a class
          element.setAttribute('class', 'card')
          element.innerHTML = data.Search[i].Title
          // element.innerHTML = `<img src=${data.Search[i].Poster}>`
          let poster = document.createElement('img')
          poster.setAttribute('src', data.Search[i].Poster)
          element.appendChild(poster)
          //or this way
          let poster = document.createElement('img')
          poster.setAttribute('src', data.Search[i].Poster)
          element.appendChild(poster)
          // console.log(element, i)
          //appending the div to the dom
          document.getElementById('searchResults').appendChild(element)
      }

      // append to html document

      // console.log(data)
      // displayMovie.innerText = data.value
    })
}
//
exploreButton.addEventListener('click', getMovie)
