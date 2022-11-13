import mypic from "../assets/mypic.jpg";
import Typingeff from "../components/Typingeff";

const Home = () => {
    
    return (
        <div className="home">
            <div className="px-4 py-5 text-center">
                <img className="d-block mx-auto mb-4 circle-img" src={mypic} alt="" width="72" height="57" />
                <h1 className="display-6">Hi <span className="blog-title-emoji">👋</span> , I'm</h1>
                <h1 className="display-3 fw-bold text-dark">Akhil Kumar Donka</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 display-5"><Typingeff /></p>
                </div>
            </div>
        </div>
    )
}

export default Home;