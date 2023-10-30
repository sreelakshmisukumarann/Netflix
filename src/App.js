
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchURL={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Trending Movies" fetchURL={requests.fetchTrending}/>
      <Row  title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
