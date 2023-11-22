import React, { useState } from "react";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieList from "../components/MovieList";
import Navbar from "../containers/Header";

const Home = () => {
  // TODO: THIS IS TMP DATA, must be deleted!
  const [movies, setMovies] = useState([
    {
      _id: "65593610e294e173f89363f1",
      title: "Oppenheimer",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      stars: 5,
      cover:
        "https://images.squarespace-cdn.com/content/v1/5efce5920d28887981c5bd9b/1689557623401-WUN5CRPS8R0JHG8KMKX5/Oppenheimer+cover.jpg",
      favorite: true,
      createdAt: "2023-11-18T22:09:20.827Z",
      updatedAt: "2023-11-18T22:09:20.827Z",
      __v: 0,
    },
    {
      _id: "6559365ce294e173f89363f5",
      title: "Barbie",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      stars: 4,
      cover: "https://s39940.pcdn.co/wp-content/uploads/2023/04/1500x500.jpg",
      favorite: false,
      createdAt: "2023-11-18T22:10:36.244Z",
      updatedAt: "2023-11-18T22:10:36.244Z",
      __v: 0,
    },
    {
      _id: "655936f1e294e173f89363f9",
      title: "Interstellar",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      stars: 5,
      cover: "https://i.ytimg.com/vi/XHqRu5aY-wg/maxresdefault.jpg",
      favorite: false,
      createdAt: "2023-11-18T22:13:05.930Z",
      updatedAt: "2023-11-18T22:18:59.119Z",
      __v: 0,
    },
    {
      _id: "65593716e294e173f89363fb",
      title: "Ford vs Ferrari",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      stars: 4,
      cover:
        "https://www.motortrend.com/uploads/sites/11/2019/11/Ford-vs-Ferrari-15.jpg",
      favorite: true,
      createdAt: "2023-11-18T22:13:42.762Z",
      updatedAt: "2023-11-18T22:13:42.762Z",
      __v: 0,
    },
    {
      _id: "65593da6e294e173f893645d",
      title: "The grinch",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      stars: 3,
      cover:
        "https://estudiocineteca.files.wordpress.com/2019/09/grinch_1.jpg?w=940",
      favorite: false,
      createdAt: "2023-11-18T22:41:42.828Z",
      updatedAt: "2023-11-18T22:41:42.828Z",
      __v: 0,
    },
    {
      _id: "65593e66e294e173f8936461",
      title: "fast and furious",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Hello.",
      stars: 4,
      cover:
        "https://goldrecordoutlet.com/wp-content/uploads/2020/09/fast-and-the-furious2.jpg",
      favorite: false,
      createdAt: "2023-11-18T22:44:54.097Z",
      updatedAt: "2023-11-18T22:45:19.965Z",
      __v: 0,
    },
  ]);

  return (
    <>
      <Navbar />
      <main>
        <FeaturedMovie movie={movies[0]} />

        <div className="container p-8 md:p-8" id="movie-list">
          <h2 className="text-2xl pb-6 text-red-500 font-bold tracking-wider text-center">
            Featured Movies
          </h2>
          <MovieList movies={movies} />
        </div>
      </main>
    </>
  );
};

export default Home;
