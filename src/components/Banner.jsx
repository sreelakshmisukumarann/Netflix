import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchURL}) {
    // console.log(fetchURL);
    const [movie, setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () =>{
        const {data} = await instance.get(fetchURL)
        // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{height:'600px', backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
        <div className="banner-content">
            <h1>{movie?.name}</h1>
            <button className='btn btn-danger'>Play <i class="fa-solid fa-play ms-2"></i></button>
            <button className='btn btn-outline-light ms-2'>More info <i class="fa-solid fa-arrow-down"></i></button>
            <h2>{movie?.overview?.slice(0,200)}...</h2>
        </div>
    </div>
  )
}

export default Banner