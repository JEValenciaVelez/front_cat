// import "./Home.css";
import CardContainer from "../../components/CardContainer/CardContainer";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";


const Home = () => {

    return (
        <div className="home">
            <header>
                <NavBar />
            </header>
            <main>
                <CardContainer />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
};

export default Home;