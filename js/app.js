let exploreButton = document.querySelector('button')

const getMovie = (event) => {
  document.querySelector('#movieInfo').innerHTML = ""

  let movieInput = document.getElementById('input').value
  fetch(`https://www.omdbapi.com/?t=${movieInput}&apikey=101d95ae`)
    .then(response => response.json())
    .then(data => {

          let movieInfo = document.getElementById('movieInfo')
          let moviePic = document.getElementById('poster')
          let allInfo = document.getElementById('allInfo')

          let movieTitle = document.createElement('h3')
          movieTitle.setAttribute('class', 'movieTitle')
          movieTitle.textContent = `Title: ${data.Title}`
          movieInfo.appendChild(movieTitle)

          let movieYear = document.createElement('h3')
          movieYear.setAttribute('class', 'movieYear')
          movieYear.textContent = `Year: ${data.Year}`
          movieInfo.appendChild(movieYear)

          let movieRated = document.createElement('h3')
          movieRated.setAttribute('class', 'Rated')
          movieRated.textContent = `Rated: ${data.Rated}`
          movieInfo.appendChild(movieRated)

          let movieDir = document.createElement('h3')
          movieDir.setAttribute('class', 'Dir')
          movieDir.textContent = `Director: ${data.Director}`
          movieInfo.appendChild(movieDir)

          let movieRuntime = document.createElement('h3')
          movieRuntime.setAttribute('class', 'Runtime')
          movieRuntime.textContent = `Runtime: ${data.Runtime}`
          movieInfo.appendChild(movieRuntime)

          let movieActors = document.createElement('h3')
          movieActors.setAttribute('class', 'Actors')
          movieActors.textContent = `Actors: ${data.Actors}`
          movieInfo.appendChild(movieActors)

          let moviePlot = document.createElement('h3')
          moviePlot.setAttribute('class', 'Plot')
          moviePlot.textContent = `Plot: ${data.Plot}`
          movieInfo.appendChild(moviePlot)

          let poster = document.createElement('img')
          poster.setAttribute('id', 'poster-img')
          poster.setAttribute('src', data.Poster)
          moviePic.appendChild(poster)

          sidebar.appendChild(movieInfo)
    })
}

exploreButton.addEventListener('click', getMovie)
