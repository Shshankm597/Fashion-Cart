import "./footer.css";
import flag from "../../images/india-flag.png";
import { FaTwitterSquare, FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
    return (
        <footer class="fc-footer">
            <p> Proudly made in <img src={ flag } alt="indian-flag" /> by Shashank Shekhar
                Mishra</p>

            <div>
                <a href="https://twitter.com/Shashankm597"><FaTwitterSquare size="2rem"/></a>

                <a href="https://www.linkedin.com/in/shashank-shekhar-mishra-259a05148/"><FaLinkedin size="2rem"/></a>

                <a href="https://github.com/Shshankm597"><FaGithub size="2rem"/></a>
            </div>
        </footer>
    );
}