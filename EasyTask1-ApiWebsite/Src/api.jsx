import React, { useEffect, useState } from "react";
import "./api.css";

import { AnimeList } from "./list";

function App() {

  const [search,setSearch]=useState('One Piece')
  const [animeData,setAnimeData]=useState();



  

  const getData=async()=>{
      const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      const resData= await res.json();
      setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])

  return (
    <>
        <div className="header">
          <h1>God Tier Animes</h1>
          <div className="search-box">
              <input type="search" placeholder="Search your anime" 
              onChange={(e)=>setSearch(e.target.value)}/>
          </div>
        </div>

        <div className="container">
         
          <div className="anime-row">
            <h2 className="text-heading">Showing Results for {search}</h2>
            <div className="row">
                <AnimeList 
                animelist={animeData}
              
               
                />
            </div>

          </div>
        </div>
    </>
  );
}

export default App;