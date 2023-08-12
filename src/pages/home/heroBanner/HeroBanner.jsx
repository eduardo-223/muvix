import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/img';
import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';
import "./style.scss";

function HeroBanner() {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {data, loading} = useFetch('/movie/upcoming');
  const {url} = useSelector((state) => state.home)

  useEffect(()=>{
      const bground = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
      setBackground(bground)
  },[data])

  const searchQueryHandler = (event) =>{
    if(event.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">

      {!loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}

      <div className="opacity-layer"></div>

      <ContentWrapper>
          <div className="heroBannerContent">
              <span className="title">Bem Vindo</span>
              <span className="subTitle">Milhões de filmes, programas e shows de TV para assistir. Explore agora!</span>
              <div className="searchInput">
                <input 
                  type="text" 
                  placeholder='Procure o filme ou programa de TV...'
                  onChange={(e)=> setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                />
                <button>Pesquisar</button>
              </div>
          </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner