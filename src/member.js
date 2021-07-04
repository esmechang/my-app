import React, { useState, useEffect } from 'react';


function Member({picture}) {
  //const [isLoading, setIsLoading] = useState(true)
  const [gifs, setGifs] = useState([])

  async function fetchGifs() {
    const API_KEY = "1XD99ZL35T22"
    const BASE_URL = "https://g.tenor.com/v1/search"
    const result = await fetch(`${BASE_URL}?q=jin&key=${API_KEY}&limit=8`)
    const res = await result.json()
    setGifs(res.data)
  }
  useEffect(() => {
    fetchGifs()
    //let url = "https://g.tenor.com/v1/search?q=BTS&key=1XD99ZL35T22&limit=8"
    //fetch(url)
      //.then(results => results.json())
      //.then(data => setGifs(data.gifs))
      //.then(gifs => {
        //console.log(gifs)
        //setGifs(gifs.data.images.fixed_height.url)
      //})
      //.catch(error => {
        //console.log("error fetching gifs", error)
      //})
  }, [])

  //const handleClick = () => {
    
  //}

  return (
    <div className="Member" onClick={gifs && <img src={gifs} alt="bts member gifs"></img>}>
      <img src={picture} alt='bts member' />
    </div>
    );
  }
  
export default Member;