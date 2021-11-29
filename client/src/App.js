import Banner from "./components/Banner.js";
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            {/* nav bar  */}
            <Nav />
            {/* banner  */}
            <Banner />
            {/* cat film liste  */}

            {/* video */}

            {/* vue rapide   */}
            <Footer />
        </div>
    );
}

export default App;
