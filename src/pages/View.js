import React from 'react'
import { useQuery } from 'react-query'
import './style.css'
// import { fetchAPI } from '../utils/handelAPI'

const fetchAPI = (url) => {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
}

const truncateText = (text = '', stringLength = 80) => {
  if (!text) return '';
  if (text.length > stringLength) { return `${text.substring(0, stringLength - 3)}...`; }
  return text;
};

const View = () => {
  const url = 'https://yts.mx/api/v2/list_movies.json?genre=Animation'
  const { data, isLoading, ...p } = useQuery(['todos', url], () => fetchAPI(url),
    { onSuccess: () => console.log('done'), select: data => data.data.movies }
  )
console.log('data :>> ', data);
  return (
    <div className="App">
      {isLoading && 'LOADING...'}
      {!isLoading && (
        <div className="container">
          {data?.map(item => {
            return (
              <div className="cards">
                <img alt="" src={item.medium_cover_image} className="imgCard" />
                <main className="mainCard">
                  <p>{item.date_uploaded}</p>
                  <h3>{truncateText(item.title, 25)}</h3>
                  <p style={{ color: '#b2b2b2', fontFamily: 'system-ui' }}>{truncateText(item.summary)}</p>
                </main>
                <a
                  href={item?.torrents.find((item) => item.quality === "720p").url}
                  download={item?.torrents.find((item) => item.quality === "720p").url}
                  className="footerCard"
                >
                  <div className="contentOfFooter">
                    <h4>{item.year}</h4>
                    <h6>Year</h6>
                  </div>
                  <div className="contentOfFooter">
                    <h4>{item.rating}</h4>
                    <h6>Rating</h6>
                  </div>
                  <div className="contentOfFooter">
                    <h4>{item.runtime}</h4>
                    <h6>Run time</h6>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default View
