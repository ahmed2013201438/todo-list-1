import React from 'react'
import { useQuery, useQueryClient } from 'react-query'

const fetchAPI = (url) => {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
}

const View = () => {
  const url='https://yts.mx/api/v2/list_movies.json'
  // Queries
  const { isLoading, data } = useQuery(['todos', url], () => fetchAPI(url),
    { onSuccess: () => console.log('done'), select: data => data.data.movies }
  )
  console.log(`q`, data)
  return (
    <div className="App">
      {isLoading && 'LOADING...'}
    </div>
  )
}

export default View
