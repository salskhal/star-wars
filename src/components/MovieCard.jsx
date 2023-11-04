/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  // eslint-disable-next-line react/prop-types
  const { title, opening_crawl, release_date } = movie;

  const date = new Date(release_date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div
      className="movie-card text-white bg-gray-800 bg-opacity-50 rounded-md p-4
        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-20 hover:bg-gray-900
    "
    >
      <h2
        className="
        text-3xl font-bold
        "
      >
        {title}
      </h2>
      <p className="text-sm font-semibold">{formattedDate}</p>
      <p
        className="
        text-base font-medium mt-4 text-gray-500
        "
      >{opening_crawl}</p>

      <div className="flex justify-end mt-3">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
