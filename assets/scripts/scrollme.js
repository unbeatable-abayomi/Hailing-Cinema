



  


// function that loads API's  index.html


// function getMovies () {
//     // console.log(searchText); 
//     axios.get('http://www.omdbapi.com/?apikey=4c044057&s=batman&page=1')
//     .then((response) => {
//        console.log(response)
//        let movies = response.data.Search;
//        console.log(movies)
  
//        let output = '';
//               $.each(movies, (index, movie) => {
//            output +=`
//            <div class="col-md-3">
//            <div class="card">
//            <div class="well text-center">
//            <img src="${movie.Poster}">
//            <h5>${movie.Title}</h5>
//            <a onclick = "movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">MovieDetails </a>
//            </div>
//            </div>
//            </div>
//           `;
//        });
//        $('#my_movies').html(output);
//     })
//     .catch((err) => {
//         console.log(err)
//     });
//   }
  
  // end of function that loads API's on index.html
  
  // THIS FUNCTION TARGETS A PARTICULAR DIV **starting** 
  
  function displayAll (idArray, element){
    let output= '';
    let arr=[];
    $.each(idArray, function (index, id){
      axios.get(`http://www.omdbapi.com/?apikey=4c044057&i=${id}`)
       .then(function(response){
      console.log(response);
      let movies = response.data;
      output = `<div class="col-md-3">
      <div class="card card_api">
      <div class="well text-center" id="well_api">
      <img src="${movies.Poster}">
      <h5>${movies.Title}</h5>
      <a onclick = "movieSelected('${movies.imdbID}')" id="card_api_button" class="btn btn-primary" href="#">MovieDetails </a>
      </div>
      </div>
      </div>
      `;
      arr.push(output);
      console.log(arr);
       $(element).html(arr);
      })
      .catch(
        error=>{
           console.log(error);
  
        });
        })
            console.log(output);
        console.log(arr);
  }

  





  // function displayMovie1 () { 
  //   axios.get('http://www.omdbapi.com/?apikey=4c044057&i=tt2975590')
  //   .then((response) => {
  //      console.log(response)
  //      let movies = response.data;
  //      console.log(movies) 
  //       let output =`
  //          <div class="col-md-3">
  //          <div class="card">
  //          <div class="well text-center">
  //          <img src="${movies.Poster}">
  //          <h5>${movies.Title}</h5>
  //          <a onclick = "movieSelected('${movies.imdbID}')" class="btn btn-primary" href="#">MovieDetails </a>
  //          </div>
  //          </div>
  //          </div>
  //         `;
       
  //      $('#my_movies_1').html(output);
  //   })
  //   .catch((err) => {
  //       console.log(err)
  //   });
  // }

  // function displayMovie2 () {
  //   axios.get('http://www.omdbapi.com/?apikey=4c044057&i=tt0372784')
  //   .then((response) => {
  //      console.log(response)
  //      let movies = response.data;
  //      console.log(movies) 
  //       let output =`
  //          <div class="col-md-3">
  //          <div class="card">
  //          <div class="well text-center">
  //          <img src="${movies.Poster}">
  //          <h5>${movies.Title}</h5>
  //          <a onclick = "movieSelected('${movies.imdbID}')" class="btn btn-primary" href="#">MovieDetails </a>
  //          </div>
  //          </div>
  //          </div>
  //         `;
       
  //      $('#my_movies_2').html(output);
  //   })
  //   .catch((err) => {
  //       console.log(err)
  //   });
  // }

  
  // function displayMovie3() {
  //   axios.get('http://www.omdbapi.com/?apikey=4c044057&i=tt2679042')
  //   .then((response) => {
  //      console.log(response)
  //      let movies = response.data;
  //      console.log(movies) 
  //       let output =`
  //          <div class="col-md-3">
  //          <div class="card">
  //          <div class="well text-center">
  //          <img src="${movies.Poster}">
  //          <h5>${movies.Title}</h5>
  //          <a onclick = "movieSelected('${movies.imdbID}')" class="btn btn-primary" href="#">MovieDetails </a>
  //          </div>
  //          </div>
  //          </div>
  //         `;
       
  //      $('#my_movies_3').html(output);
  //   })
  //   .catch((err) => {
  //       console.log(err)
  //   });
  // }
  // function displayMovie4() { 
  //   axios.get('http://www.omdbapi.com/?apikey=4c044057&i=tt0372784')
  //   .then((response) => {
  //      console.log(response)
  //      let movies = response.data;
  //      console.log(movies) 
  //       let output =`
  //          <div class="col-md-3">
  //          <div class="card">
  //          <div class="well text-center">
  //          <img src="${movies.Poster}">
  //          <h5>${movies.Title}</h5>
  //          <a onclick = "movieSelected('${movies.imdbID}')" class="btn btn-primary" href="#">MovieDetails </a>
  //          </div>
  //          </div>
  //          </div>
  //         `;
       
  //      $('#my_movies_4').html(output);
  //   })
  //   .catch((err) => {
  //       console.log(err)
  //   });
  // }
  
  
  
  
  
  // THIS FUNCTION TARGETS A PARTICULAR DIV **ending**
  // the function below is for Search2.html
  
  function movieSelected(id){
       sessionStorage.setItem('movieId', id);
       window.location = 'search2.html';
       return false; 
  }

   function getMovie() {
    let movieId = sessionStorage.getItem('movieId');
  
    axios.get('http://www.omdbapi.com/?apikey=4c044057&i='+ movieId)
    .then((response) => {
       console.log(response);
      let movie = response.data;
      let output = `
      <div class="row">
      <div class="col-md-4">
        <img src="${movie.Poster}" class="thumbnail">
     </div>  
   <div class="col-md-8">
        <h2>${movie.Title}</h2>
        <ul class="list-group">
           <li class="list-group-item"> <strong>Genre:</strong> ${movie.Genre}</li>
           <li class="list-group-item"> <strong>Released:</strong> ${movie.Released}</li>
           <li class="list-group-item"> <strong>Rated:</strong> ${movie.Rated}</li>
           <li class="list-group-item"> <strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
           <li class="list-group-item"> <strong>Director:</strong> ${movie.Director}</li>
           <li class="list-group-item"> <strong>Writer:</strong> ${movie.Writer}</li>
           <li class="list-group-item"> <strong>Actors:</strong> ${movie.Actors}</li>
        </ul>      
   </div>  
  </div>
  <div class="row">
    <div class="well">
    <h3>Plot</h3>
    ${movie.Plot}
    <hr>
    <a href="http://imdb.com/title${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
    <a href="index.html" class="btn btn-default">Go Back to Search</a>        
    </div>
  </div>
      `;
      $('#movie').html(output);
      })
    .catch((err) => {
        console.log(err)
    });
  
  }
  
  // end of function for Search2.html
  
  
  
  