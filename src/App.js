import React from "react";
import './css/App.css';
import Nav from "./components/Nav"
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer";
import requests from "./requests";



function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {/*<Row title = "Popular movies and shows" fetchUrl = {requests.fetchTrendingNow}/>*/}
      <Row title= "Upcoming movies" fetchUrl = {requests.fetchUpcoming}/>
      <Row title= "Fantasy picks for you" fetchUrl = {requests.fetchFantasy}/>
      <Row title= "For all the laughs" fetchUrl = {requests.fetchComedy}/>
      <Row title= "If you like romance" fetchUrl = {requests.fetchRomance}/>
      <Row title= "Animated movies" fetchUrl = {requests.fetchAnimation}/>
      <Row title= "Crime shows for you" fetchUrl = {requests.fetchCrime}/>
      <Row title= "Sci-Fi picks" fetchUrl = {requests.fetchScienceFiction}/>
      
      <Footer />
      
    </div>
  );
}

export default App;
