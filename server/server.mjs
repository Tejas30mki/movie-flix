import express from 'express';
const app = express();

//starting server at localhost 
app.listen(8080, () => {
    app.use(express.static('public'))
    console.log('Server is active at http://localhost:8080');
})

// Used to catch get request on http://localhost/movie?mname='Your_Movie_Name'
app.get('/movie', async (req, res) => {
    const movieName = req.query.mname;  // retrive movie name from  URL Querry.
    try {
        // Sending request to API
        const apiResponse = await fetch(`https://www.omdbapi.com/?apikey=82258dcb&t=${movieName}`);
        const data = await apiResponse.json(); // waiting for response from API and converting to readable format using json
        res.json(data) // sending back response to get request.
    } catch (error) {
        console.log(error) // send error if any
    }
})