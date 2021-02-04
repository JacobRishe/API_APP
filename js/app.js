let exploreButton = document.querySelector('button')
//access the API and grab the data of the search and assign that data to a variable with a condition
const getMovie = (event) => {
  document.querySelector('#movieInfo').innerHTML = ""
  // if (document.querySelector('#poster-img') !== undefined) {
  //   document.querySelector('#poster').removeChild('#poster-img')
  // }
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
          let allInfo = document.getElementById('allInfo')

          let movieTitle = document.createElement('h3')
          movieTitle.setAttribute('class', 'movieTitle')
          movieTitle.textContent = `Title: ${data.Title}`
          movieInfo.appendChild(movieTitle)
          console.log(movieTitle)

          let movieYear = document.createElement('h3')
          movieYear.setAttribute('class', 'movieYear')
          movieYear.textContent = `Year: ${data.Year}`
          movieInfo.appendChild(movieYear)
          console.log(movieYear)

          let movieRated = document.createElement('h3')
          movieRated.setAttribute('class', 'Rated')
          movieRated.textContent = `Rated: ${data.Rated}`
          movieInfo.appendChild(movieRated)
          console.log(movieRated)

          let movieDir = document.createElement('h3')
          movieDir.setAttribute('class', 'Dir')
          movieDir.textContent = `Director: ${data.Director}`
          movieInfo.appendChild(movieDir)
          console.log(movieDir)

          let movieRuntime = document.createElement('h3')
          movieRuntime.setAttribute('class', 'Runtime')
          movieRuntime.textContent = `Runtime: ${data.Runtime}`
          movieInfo.appendChild(movieRuntime)
          console.log(movieRuntime)

          let movieActors = document.createElement('h3')
          movieActors.setAttribute('class', 'Actors')
          movieActors.textContent = `Actors: ${data.Actors}`
          movieInfo.appendChild(movieActors)
          console.log(movieActors)

          let moviePlot = document.createElement('h3')
          moviePlot.setAttribute('class', 'Plot')
          moviePlot.textContent = `Plot: ${data.Plot}`
          movieInfo.appendChild(moviePlot)
          console.log(moviePlot)

          let poster = document.createElement('img')
          poster.setAttribute('id', 'poster-img')
          poster.setAttribute('src', data.Poster)
          moviePic.appendChild(poster)

          sidebar.appendChild(movieInfo)

          // console.log(renderMovies(movieInput))
          //clearing data after explore button is clicked
          //assign a click method
          //if statement
          // exploreButton.addEventListener('click', (e) => {
          //   allInfo.clear()
          // })
          // console.log('click', exploreButon)
          //appending the div to the dom-----why? works without it
          // document.getElementById('searchResults').appendChild(divElement)
    })
}

exploreButton.addEventListener('click', getMovie)
