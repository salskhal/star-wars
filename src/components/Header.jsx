import { useState, useEffect } from "react";
import { LoaderIcon } from "../icon";

const Loading = () => {
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

const Header = () => {
  const [data, setData] = useState(null);

  // get first data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setData(data.results[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {data ? (
        <div className="film text-white">
          <h2>{data.title}</h2>
          <p>{data.opening_crawl}</p>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Header;
