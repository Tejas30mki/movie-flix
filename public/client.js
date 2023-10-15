const movieBtn = document.getElementById('movieBtn')
const moviePoster = document.getElementById('moviePoster')
const textnfo = document.getElementById('text-info')
const movieInfo = document.getElementById('movieInfo')
const getMovie = async () => {
    const name = document.getElementById('movieInput').value;
    try {
        document.getElementById('moviePoster').style.backgroundImage = ``;
        document.getElementById('text-info').innerHTML = ``
        movieInfo.style.backgroundImage = `url('./loading.gif')`;
        const response = await fetch(`/movie?mname=${name}`);
        const data = await response.json()
        if (data.Error) {
            alert(data.Error)
        } else {
            console.log(data)
            renderMovieDetails(data)
        }
    } catch (error) {
        console.log(error)
    }
}
movieBtn.addEventListener('click', getMovie)

const renderMovieDetails = (movie_data) => {
    movieInfo.style.backgroundImage = 'none';
    document.getElementById('moviePoster').style.backgroundImage = `url(${movie_data.Poster})`;
    document.getElementById('text-info').innerHTML = `
    <h1>${movie_data.Title}</h1>
    <h2>Released: ${movie_data.Released}</h2>
    <h2>Runtime: ${movie_data.Runtime}</h2>
    <h2>Genre: ${movie_data.Genre}</h2>
    <h2>Director: ${movie_data.Director}</h2>
    <h2>Actors: ${movie_data.Actors}</h2>
    <h2>Plot: ${movie_data.Plot}</h2>
    <h2>imdbRating: ${movie_data.imdbRating}</h2>
    <h2>BoxOffice: ${movie_data.BoxOffice}</h2>`
}


