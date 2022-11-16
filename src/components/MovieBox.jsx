const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({poster_path})=>{
    
    return(
        <div className="card text-center bg-secondary md-4">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} />
              <div className="card-body">
                  <button type="button" className="btn btn-dark">View More</button>
              </div>
            </div>
        </div>
    )
}

export default MovieBox;