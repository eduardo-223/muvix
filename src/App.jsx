import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchDataFromApi } from "./utils/api";
import {getApiConfiguration} from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home)

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    });
  };

  return (<BrowserRouter>
  </BrowserRouter>)
}

export default App;
