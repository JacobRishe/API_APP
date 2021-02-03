let exploreButton = document.querySelector('button')
//select the element of where the search is being displayed and assign it to a variable
// let displayMovie = document.querySelector('p')
//access the API and grab the data of the search and assign that data to a variable with a condition
const getMovie = (event) => {
  let movieInput = document.getElementById('input').value
  fetch(`http://www.omdbapi.com/?t=${movieInput}&apikey=101d95ae`)
//convert response to json which will return another promise
    .then(response => response.json())
  //our actual data
    .then(data => {
      console.log(data)
          //nesting divs
          // let divElement = document.createElement('div')
          let movieInfo = document.getElementById('movieInfo')
          let moviePic = document.getElementById('poster')

          let movieTitle = document.createElement('h3')
          movieTitle.setAttribute('class', 'movieTitle')
          movieTitle.textContent = data.Title
          movieInfo.appendChild(movieTitle)
          console.log(movieTitle)

          let movieYear = document.createElement('h3')
          movieYear.setAttribute('class', 'movieYear')
          movieYear.textContent = data.Year
          movieInfo.appendChild(movieYear)
          console.log(movieYear)

          let movieRated = document.createElement('h3')
          movieRated.setAttribute('class', 'Rated')
          movieRated.textContent = data.Rated
          movieInfo.appendChild(movieRated)
          console.log(movieRated)

          let movieDir = document.createElement('h3')
          movieDir.setAttribute('class', 'Dir')
          movieDir.textContent = data.Director
          movieInfo.appendChild(movieDir)
          console.log(movieDir)

          let movieRuntime = document.createElement('h3')
          movieRuntime.setAttribute('class', 'Runtime')
          movieRuntime.textContent = data.Runtime
          movieInfo.appendChild(movieRuntime)
          console.log(movieRuntime)

          let movieActors = document.createElement('h3')
          movieActors.setAttribute('class', 'Actors')
          movieActors.textContent = data.Actors
          movieInfo.appendChild(movieActors)
          console.log(movieActors)

          let moviePlot = document.createElement('h3')
          moviePlot.setAttribute('class', 'Plot')
          moviePlot.textContent = data.Plot
          movieInfo.appendChild(moviePlot)
          console.log(moviePlot)

          let poster = document.createElement('img')
          poster.setAttribute('src', data.Poster)
          moviePic.appendChild(poster)

          sidebar.appendChild(movieInfo)

          //appending the div to the dom-----why? works without it
          // document.getElementById('searchResults').appendChild(divElement)
    })
}
//
exploreButton.addEventListener('click', getMovie)
