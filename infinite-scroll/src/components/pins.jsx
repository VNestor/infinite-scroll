import React, { useState, useEffect } from "react";
import "../App.css";

function Pins() {
  //Where json data is stored
  const [data, setData] = useState([]);
  //Set to false because when page loads we are at top of the screen
  const [isFetching, setIsFetching] = useState(false);
  //This will limit the number of pins loaded
  const [pinCount, setPinCount] = useState(6);

  //getData() method will fetch data from nyc_ttp_pins.json using fetch
  const getData = () => {
    //nyc_ttp_pins.json in public directory, react always looks for files inside of public.
    fetch("nyc_ttp_pins.json", {
      headers: {
        //Pass headers Content-Type and Accept to tell client you are trying to access and accept JSON data
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      //Retrieve JSON data
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      //Store JSON data
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  //Call getData()
  //use Effect() is a react Hook
  //Similar to componentDidMount() and componentWillUpdate
  useEffect(() => {
    getData();
    //[] tells useEffect to act like componentDidMount
    //[] after callback tells it to run once when the component gets mounted
  }, []);

  //Event listener
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect when we are at getting towards the bottom of the page
  function handleScroll(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight || isFetching) return;
    setIsFetching(true);
    console.log('Fetch more list items!')
  }

  //UseEffect listens for changes, isFetching changes state, call loadMorePins()
  useEffect(() => {
    if (!isFetching) return;
    loadMorePins();
  }, [isFetching]);

  //Change the number of pins we are displaying
  function loadMorePins() {
    //Timeout set to 1.5 seconds to show loading text
    setTimeout(() => {
      setPinCount(pinCount + 6);
      setIsFetching(false);
      
    },1500)
  };

  return (
    <main>
      <div className="cards">
        {data.slice(0,pinCount).map((item) => (
          <div className="card">
            <div key={item.id}>
              <h1>{item.title == "" ? "No Title" : item.title}</h1>
              <h3>By: {item.pinner.username}</h3>
              <h3>View Collection: <a href={"https://www.pinterest.com"+item.board.url}>pinterest.com{item.board.url}</a></h3>
              <img src={item.images.orig.url} width="500" height="500" />
              <p>Likes: {item.like_count}</p>
              <p>Description: {item.description}</p>
              <p>Date: {item.created_at}</p>
              
            </div>
            
          </div>
        ))}
        
      </div>
      {isFetching && 'Fetching more pins!'}
      {console.log(pinCount, isFetching)}
    </main>
  );
}

export default Pins;
