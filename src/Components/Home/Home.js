export default function Home(props) {
  let moviesList = props.moviesListProp;
  let search_func = props.search_funcProp;
  let searchClear_func = props.searchClear_funcProp;


  

  let viewMovies = moviesList.map((movie, index) => {
    let favourite_func = props.favourite_funcProp;
    let collection_func = props.collection_funcProp;

    let favouriteList = props.favouriteListProp;
    let collectionList = props.collectionListProp;

    let collection_class = "fa fa-plus";
    let fa_color = "";

    for (let i = 0; i < favouriteList.length; i++) {
      let favourite_id_extract = favouriteList[i].slice(9);
      if (favourite_id_extract == movie.id) {
        fa_color = "red";
        break;
      } else {
        fa_color = "";
      }
    }

    for (let i = 0; i < collectionList.length; i++) {
      let collection_id_extract = collectionList[i].slice(10);
      if (collection_id_extract == movie.id) {
        collection_class = "fa fa-check-circle";

        break;
      } else {
        collection_class = "fa fa-plus";
      }
    }


  

    // console.log('HI');

    // fa_color = movie.id == favourite_id_extract ? "red" : ""

    let url = "https://image.tmdb.org/t/p/original/" + movie.poster_path;

    // let Poster = movie.Poster == "N/A" ? "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" : movie.Poster
    // console.log(url);
    let Poster = url;

    return (
      <div className="col-md-3 movie_div" key={index} id={movie.id}>
        {/* {favourite_func()} */}

        <div className="card mb-4 shadow-sm">
          <img src={Poster} alt="img" />

          <div className="card-body">
            <h5 className="card-text title">
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
                  <i className={collection_class} style={{ color: "" }}></i>
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
  });

  let movies = viewMovies.length == 0 ? <div class="spinner-border text-muted"></div>: viewMovies;


  return (
    <>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Enjoy Movies</h1>
            <div className="col-8 m-auto">
              <input
                type="search"
                placeholder="Search movies ..."
                className="form-control"
                id="myInput"
                style={{ height: "3em" }}
                onChange={searchClear_func}
              />
            </div>
            <p>
              <button
                className="btn btn-lg btn-primary my-2 "
                onClick={search_func}
              >
                Search
              </button>
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container ">
            {/* <div class="spinner-border text-muted"></div> */}

            <div className="row justify-content-center">{movies} </div>
          </div>
        </div>
      </main>
    </>
  );
}


