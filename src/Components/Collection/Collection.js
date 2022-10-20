export default function Collection(props) {
  let moviesList = props.moviesListProp;
  let favourite_func = props.favourite_funcProp;
  let collection_func = props.collection_funcProp;

  let favouriteList = props.favouriteListProp;
  let collectionList = props.collectionListProp;
  let fa_color = '';

  let collectionMoviesFiltered = moviesList.filter((movie, index)=>{
    for(let element of collectionList){
         let element_id = element.slice(10);
      if (element_id == movie.id){
        return true

      }
      
    } 
    return false;
  })

  // console.log(collectionMovies);

   let collectionMovies = collectionMoviesFiltered.map((movie, index)=> {

    for(let element of favouriteList){
      let element_id = element.slice(9);
      if (element_id == movie.id){
        fa_color = 'red'
        break
      }
      else{
        fa_color = ''
      }
    }

    let url = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
    let Poster = url;

     return (

       <div className="col-md-3 movie_div" key={index} id={movie.id}>
         {/* {favourite_func()} */}

         <div className="card mb-4 shadow-sm">
           <img src={Poster} alt="img" />

           <div className="card-body">
             <h5 className="card-text">
               {movie.original_name || movie.original_title}
             </h5>
             <h6>
               Released{" "}
               <span className="badge badge-primary">
                 {movie.first_air_date || movie.release_date}
               </span>
             </h6>
             <div className="d-flex justify-content-between align-items-center">
               <div className="btn-group">
                 <button
                   type="button"
                   className="btn btn-sm btn-outline-secondary collection"
                   id={"collection" + movie.id}
                   onClick={collection_func}
                 >
                   <i className="fa fa-check-circle" style={{ color: "" }}></i>
                 </button>
                 <button
                   type="button"
                   className="btn btn-sm btn-outline-secondary like"
                   id={"favourite" + movie.id}
                   onClick={favourite_func}
                 >
                   <i className="fa fa-heart" style={{ color: fa_color }}></i>
                 </button>
               </div>
               {/* <small className="text-muted">{movie.Runtime}</small> */}
             </div>
           </div>
         </div>
       </div>
     );





  })

   let noMovies = ()=>{
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">No Movies added to Collection yet</h1>
            <p className="lead"></p>
          </div>
        </div>
      </>
    );
   }

  let movie = collectionMoviesFiltered.length == 0 ? noMovies() : <div className="row">{collectionMovies}</div>


  return (
    <>
      <main role="main">
        <div className="album py-5 bg-light">
          <div className="container">
            {/* <div className="row">{movie}</div> */}
            {/* {noMovies()} */}
            {movie}
            
          </div>
        </div>
      </main>
    </>
  );
}
