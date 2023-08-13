import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchDataFromApi } from './../../utils/api';
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner"
import noResults from "../../assets/no-results.png"
import ContentWrapper from './../../components/contentWrapper/ContentWrapper';
import "./style.scss";


function SearchResult() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} = useParams();

  const fetchDataFromApi =() =>{
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      setData(res)
      setPageNum(prev => prev + 1)
      setLoading(false)
    })
  }

  const fetchNextPageData = () =>{
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      if(data?.results){
        setData({
          ...data, results: [...data?.results, ...res.results]
        })
      }else{
        setData(res)
      }
    })
  }

  useEffect(() => {
    fetchInitialData();
  }, [query])
  

  return (
    <div className='searchResultsPage'>

    </div>
  )
}

export default SearchResult