import "./home.css";
import hero from "../../images/hero.svg";

export function Home() {
    return (
        <div className="home">
                <div class="hero-container">
                    <h5>NEW ARRIVALS</h5>
                    <h1><span>Best Price</span> This Year</h1>
                    <p>Shoomatic offers your very comfortable time <br />
                        on walking and exercises.</p>
                    <button className="btn-hero"> Shop Now </button>
                </div>
                <div className="hero-container">
                    <img className="hero-img" src={hero} alt="hero_img" />
                </div>
        </div>
    );
}