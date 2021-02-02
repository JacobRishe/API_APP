console.log("sanity check!")


let exploreButton = document.querySelector('button')
//select the element of where the search is being displayed and assign it to a variable
let displayMovie = document.querySelector('p')
//access the API and grab the data of the search and assign that data to a variable with a condition
const getMovie = (event) => {
  let movieInput = document.getElementById('input').value
  fetch(`http://www.omdbapi.com/?t=${movieInput}&apikey=101d95ae`)
//convert response to json which will return another promise
    .then(response => response.json())
  //our actual data
    .then(data => {
      console.log(data)
   // iterate through the array data.search

          console.log(data.Title)
          //creating a div
          let divElement = document.createElement('div')

          let movieTitle = document.createElement('h3')
          divElement.setAttribute('class', 'movieTitle')
          divElement.textContent = data.Title
          divElement.appendChild(movieTitle)

          let movieYear = document.createElement('h3')
          movieYear.setAttribute('class', 'movieYear')
          movieYear.textContent = data.Year
          divElement.appendChild(movieYear)

          let movieRated = document.createElement('h3')
          movieRated.setAttribute('class', 'Rated')
          movieRated.textContent = data.Rated
          divElement.appendChild(movieRated)

          let poster = document.createElement('img')
          poster.setAttribute('src', data.Poster)
          divElement.appendChild(poster)
          // console.log(element, i)
          //appending the div to the dom
          document.getElementById('searchResults').appendChild(divElement)

      // append to html document

      // console.log(data)
      // displayMovie.innerText = data.value
    })
}
//
exploreButton.addEventListener('click', getMovie)
