import { useEffect } from "react";
import "./App.css";
import CardForm from "./components/Form/cardForm/CardForm";
import Home from "./routes/Home/Home";
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames } from "./redux/actions";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/Main/mainPage/MainPage";
import Detail from "./components/Detail/Detail";


function App() {
  const gamesApi = useSelector(state => state.videogamesApi)
  const gamesDb = useSelector(state => state.videogamesDb)
  // const genres = useSelector(state => state.genres)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch();

const games = gamesApi.concat(gamesDb);

  useEffect(() => {
    dispatch(getVideogames())
  }, [ dispatch ]);

  return (
    <Routes >
      <Route path="/videogames" element={<Home loading={ loading } gamesApi={ gamesApi } gamesDb={ gamesDb } />}>
        <Route path="/videogames" element={<MainPage games={games}/>} />
        <Route path="create" element={<CardForm games={games}/>} />
        <Route path="detail/:id" element={<Detail games={games}/>} />
      </Route>
    </Routes>
  );
}

export default App;
