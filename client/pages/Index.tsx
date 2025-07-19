import React, { useState } from "react";

const Index = () => {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: "Deadpool & Wolverine",
      poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      rating: 8.2,
      year: 2024,
    },
    {
      id: 2,
      title: "Inside Out 2",
      poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      rating: 7.9,
      year: 2024,
    },
    {
      id: 3,
      title: "Bad Boys: Ride or Die",
      poster: "https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
      rating: 7.1,
      year: 2024,
    },
    {
      id: 4,
      title: "Moana 2",
      poster: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
      rating: 8.5,
      year: 2024,
    },
    {
      id: 5,
      title: "Oppenheimer",
      poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      rating: 8.4,
      year: 2023,
    },
    {
      id: 6,
      title: "Barbie",
      poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
      rating: 7.2,
      year: 2023,
    },
  ];

  const popularMovies = [
    {
      id: 7,
      title: "Spider-Man: No Way Home",
      poster: "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      rating: 8.3,
      year: 2021,
    },
    {
      id: 8,
      title: "The Batman",
      poster: "https://image.tmdb.org/t/p/w500/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
      rating: 8.1,
      year: 2022,
    },
    {
      id: 9,
      title: "John Wick: Chapter 4",
      poster: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      rating: 7.8,
      year: 2023,
    },
    {
      id: 10,
      title: "Avatar: The Way of Water",
      poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      rating: 7.6,
      year: 2022,
    },
    {
      id: 11,
      title: "Thor: Love and Thunder",
      poster: "https://image.tmdb.org/t/p/w500/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
      rating: 6.3,
      year: 2022,
    },
    {
      id: 12,
      title: "Black Panther: Wakanda Forever",
      poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      rating: 6.7,
      year: 2022,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">Hotstar</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-yellow-400">
                Homepage
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400">
                Premium
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400">
                LIVE
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400">
                Categories
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button>🔍</button>
              <button>🔔</button>
              <div className="w-8 h-8 bg-slate-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          alt="Avengers: Endgame"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>

        <div className="absolute bottom-32 left-8 md:left-16 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Avengers: Endgame
          </h1>

          <div className="flex items-center space-x-4 mb-6">
            <span className="flex items-center text-lg">
              <span className="text-yellow-400 mr-2">★</span>8.4
            </span>
            <span className="text-lg">2019</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">HD</span>
          </div>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            After the devastating events of Infinity War, the universe is in
            ruins. With the help of remaining allies, the Avengers assemble once
            more to reverse Thanos' actions and restore balance.
          </p>

          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center">
              ▶ PLAY
            </button>
            <button className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors">
              + Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Movie Sections */}
      <div className="px-8 md:px-16 py-16 space-y-16">
        {/* New Releases */}
        <section>
          <h2 className="text-3xl font-bold mb-8">NEW RELEASES</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative flex-shrink-0 w-48 h-72 cursor-pointer group"
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-yellow-400/90 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 text-lg ml-1">▶</span>
                  </div>
                </div>

                <div className="absolute top-2 right-2 bg-black/60 rounded px-2 py-1 text-xs text-white">
                  <span className="text-yellow-400">★</span> {movie.rating}
                </div>

                {/* Hover Preview */}
                {hoveredMovie && hoveredMovie.id === movie.id && (
                  <div className="absolute top-0 left-full ml-4 w-80 bg-slate-800 border border-slate-700 rounded-lg p-4 z-50 shadow-2xl">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {movie.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm mb-3">
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {movie.rating}
                      </span>
                      <span>{movie.year}</span>
                      <span className="bg-slate-700 px-2 py-1 rounded text-xs">
                        HD
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mb-4">
                      Action-packed adventure with stunning visuals and great
                      storytelling that keeps you entertained throughout.
                    </p>
                    <div className="flex space-x-2">
                      <button className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-md text-sm font-medium">
                        ▶ Play
                      </button>
                      <button className="bg-slate-700 text-white px-4 py-2 rounded-md text-sm">
                        + List
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Popular Movies */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Popular on Hotstar</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
            {popularMovies.map((movie) => (
              <div
                key={movie.id}
                className="relative flex-shrink-0 w-48 h-72 cursor-pointer group"
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-yellow-400/90 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 text-lg ml-1">▶</span>
                  </div>
                </div>

                <div className="absolute top-2 right-2 bg-black/60 rounded px-2 py-1 text-xs text-white">
                  <span className="text-yellow-400">★</span> {movie.rating}
                </div>

                {/* Hover Preview */}
                {hoveredMovie && hoveredMovie.id === movie.id && (
                  <div className="absolute top-0 left-full ml-4 w-80 bg-slate-800 border border-slate-700 rounded-lg p-4 z-50 shadow-2xl">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {movie.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm mb-3">
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {movie.rating}
                      </span>
                      <span>{movie.year}</span>
                      <span className="bg-slate-700 px-2 py-1 rounded text-xs">
                        HD
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mb-4">
                      Incredible movie with amazing performances and captivating
                      plot that delivers entertainment at its finest.
                    </p>
                    <div className="flex space-x-2">
                      <button className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-md text-sm font-medium">
                        ▶ Play
                      </button>
                      <button className="bg-slate-700 text-white px-4 py-2 rounded-md text-sm">
                        + List
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
