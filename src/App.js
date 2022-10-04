import React, { useState, useEffect } from "react";
import "./App.css";
const imageDomain = "https://image.tmdb.org/t/p/w1280";

function App() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const api_key = "6826c6e577e15bbff30e1a58b7082178";
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("HELLO", data);
        setGenres(data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const api_key = "6826c6e577e15bbff30e1a58b7082178";
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("HELLO", data);
        setResults(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="toggle-btn">
          <span />
          <span />
          <span />
        </div>
        <img src="img/logo.PNG" className="logo" alt="" />
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search" />
          <button className="search-btn">
            <img src="img/search.PNG" alt="" />
          </button>
        </div>
        <div className="user-options">
          <img src="img/video.PNG" className="icon" alt="" />
          <img src="img/grid.PNG" className="icon" alt="" />
          <img src="img/bell.PNG" className="icon" alt="" />
          <div className="user-dp">
            <img src="img/profile-pic.png" alt="" />
          </div>
        </div>
      </nav>
      {/* sidebar */}
      <div className="side-bar">
        <a href="#" className="links active">
          <img src="img/home.PNG" alt="" />
          home
        </a>
        <a href="#" className="links">
          <img src="img/explore.PNG" alt="" />
          explore
        </a>
        <a href="#" className="links">
          <img src="img/subscription.PNG" alt="" />
          subscription
        </a>
        <hr className="seperator" />
        <a href="#" className="links">
          <img src="img/library.PNG" alt="" />
          library
        </a>
        <a href="#" className="links">
          <img src="img/history.PNG" alt="" />
          history
        </a>
        <a href="#" className="links">
          <img src="img/your-video.PNG" alt="" />
          your video
        </a>
        <a href="#" className="links">
          <img src="img/watch-later.PNG" alt="" />
          watch leater
        </a>
        <a href="#" className="links">
          <img src="img/liked video.PNG" alt="" />
          like video
        </a>
        <a href="#" className="links">
          <img src="img/show more.PNG" alt="" />
          show more
        </a>
      </div>
      {/* filters */}
      <div className="filters">
        {genres.length > 0 ? (
          genres.map((genre, index) => (
            <button
              className={`filter-options ${index === 0 && "active"}`}
              key={genre.id}
            >
              {genre.name}
            </button>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>

      {/* videos */}
      <div className="video-container">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {results.map((results) => (
                <div key={results.id} className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                      src={imageDomain + results.poster_path}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={results.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {results.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
