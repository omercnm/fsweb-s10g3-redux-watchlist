import { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { addFav } from "./actions";
import { useSelector } from "react-redux";
import { movies } from "./movies";
import { useDispatch } from "react-redux";
function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const handleAdd = () => {
    dispatch(addFav(movies[sira]));
    sira < movies.length - 1 && setSira(sira + 1);
  };
  const basaDon = () => {
    setSira(0);
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} setSira={setSira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={basaDon}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Başa Dön
            </button>
            <button
              onClick={handleAdd}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
