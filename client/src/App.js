import Banner from "./components/Banner.js";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
import Row from "./components/Row.js";
import Requests from "./config/data/Request.js";
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <Nav />
            <Banner />
            {/* catégorie film liste, 1 row = 1 cat  */}
            <Row
                title="Netflix Original Movies"
                fetchUrl={Requests.fetchNetflixOriginals}
                isPoster={true}
            />

            <Row title="Tendance Actuelles" fetchUrl={Requests.fetchTrending} />

            <Row title="Top 10" fetchUrl={Requests.fetchTopRated} />

            <Row
                title="Comédie Romantique"
                fetchUrl={Requests.fetchRomanceMovies}
            />

            {/* video */}

            {/* vue rapide   */}
            <Footer />
        </div>
    );
}

export default App;
