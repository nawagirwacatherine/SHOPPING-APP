import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import "./footer.css"

const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="socials">
                <h3>social handles</h3>
                <ul>
                    <p><span className="icons"><CiFacebook /></span>Glow Cosmetic shop</p>
                    <p><span className="icons"><TiSocialYoutube /></span>Glow cosmetics shop</p>
                    <p><span className="icons"><SlSocialInstagram /></span>@glow cosmetics</p>
                    <p><span className="icons"><SlSocialLinkedin /></span>Glow Cosmetic shop</p>
                </ul>
            </div>

            <div className="braches">
                <h3>our locations</h3>
                <ul>
                    <p><span className="icons"><CiLocationOn /></span>Jinja</p>
                <p> <span className="icons"><CiLocationOn /></span>Mengo</p>
                <p> <span className="icons"><CiLocationOn /></span>Entebbe</p>
                <p> <span className="icons"><CiLocationOn /></span>kampala</p>
                </ul>
            </div>

            <div className="tel">
                <h3> Tel</h3>
                <ul>
                    <p><span className="icons"><FaWhatsapp /></span>0751172007</p>
                    <p><span className="icons"><LuPhoneCall /></span>0751172007</p>
                    <p><span className="icons"><TfiEmail /></span>email</p>
                </ul>
            </div>

            <div className="footer-form">
  <h3>Contact Us</h3>
  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="c41fa709-45d2-4280-a5a3-36887c5de615" />

    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required></textarea>

    <button type="submit">Send</button>
  </form>
</div>
        </div>

        

        </>
    )
}

export default Footer;