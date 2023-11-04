import { useParams, useLocation } from "react-router-dom";

function Detail() {
  const { movieId } = useParams();
  const location = useLocation();

  const movie = location.state.movie;

  return (
    <div className="px-10 md:px-20 mt-10">
      <div className="bg-slate-700 p-5 rounded-lg">
        {/* create a back */}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => window.history.back()}
        >
          Back to List
        </button>
        <div className="mt-5 text-white">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-base font-medium mt-4 text-gray-400">
              Ditector: {movie.director}
            </p>
            <p className="text-base font-medium mt-4 text-gray-400">
              Producers: {movie.producer}
            </p>
          </div>
          <div className="border-b border-gray-500 pb-5">
            <p className="text-lg font-semibold mt-4 text-gray-200">
              Description
            </p>
            <p className="text-base font-medium mt-4 text-gray-400">
              {movie.opening_crawl}
            </p>
          </div>
          <div className="border-b border-gray-500 pb-5">
            <p className="text-lg font-semibold mt-4 text-gray-200">
              Release Date
            </p>
            <p className="text-base font-medium mt-4 text-gray-400">
              {movie.release_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
