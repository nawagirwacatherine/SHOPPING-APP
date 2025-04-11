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
                
                    <p><span className="icons"><CiFacebook />Glow Cosmetics </span></p>
                    <p><span className="icons"><TiSocialYoutube />Glow cosmetics shop</span></p>
                    <p><span className="icons"><SlSocialInstagram />@glow cosmetics</span></p>
                    <p><span className="icons"><SlSocialLinkedin />Glow Cosmetic shop</span></p>
              
            </div>

            <div className="braches">
                <h3>our locations</h3>
               
                    <p><span className="icons"><CiLocationOn />Jinja</span></p>
                <p> <span className="icons"><CiLocationOn />Mengo</span></p>
                <p> <span className="icons"><CiLocationOn />Entebbe</span></p>
                <p> <span className="icons"><CiLocationOn />kampala</span></p>
               
            </div>

            <div className="tel">
                <h3> Tel</h3>
                
                    <p><span className="icons"><FaWhatsapp />0751172007</span></p>
                    <p><span className="icons"><LuPhoneCall />0751172007</span></p>
                    <p><span className="icons">cathynawagirwa@gmail.com</span></p>
                    <hr />

                
            </div>

            <div className="footer-form">
  <h3>Order spur service </h3>
  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="c41fa709-45d2-4280-a5a3-36887c5de615" />

    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="click and detail us for service needed" required></textarea>

    <button type="submit">Send</button>
  </form>
</div>
        </div>

        

        </>
    )
}

export default Footer;