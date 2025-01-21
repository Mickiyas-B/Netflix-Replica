import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Requests from "./Requste";
import Row from "./Row";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGNALS"
				isLargeRow
				fetchUrl={Requests.fetchNetflixOriginals}
			/>
			<Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
		</div>
	);
}

export default App;