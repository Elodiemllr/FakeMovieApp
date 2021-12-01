import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner.js";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
import Row from "./components/Row.js";
import Video from "./components/Video.js";
import Requests from "./config/data/Request.js";
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                {" "}
                                <Nav /> <Banner />{" "}
                                <Row
                                    title="Netflix Original Movies"
                                    fetchUrl={Requests.fetchNetflixOriginals}
                                    isPoster={true}
                                />{" "}
                                <Row
                                    title="Tendance Actuelles"
                                    fetchUrl={Requests.fetchTrending}
                                />
                                <Row
                                    title="Top 10"
                                    fetchUrl={Requests.fetchTopRated}
                                />
                                <Row
                                    title="Comédie Romantique"
                                    fetchUrl={Requests.fetchRomanceMovies}
                                />
                                <Footer />
                            </>
                        }
                    />

                    <Route path="/video/:id" element={Video}>
                        {/*   <Route path="*">
                            <Navigate to="/" />
                        </Route>*/}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
