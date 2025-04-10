

import "./footer.css"

const Footer = () =>{
    return(
        <>
        <div className="footer">
            <div className="socials">
                <h3>social handles</h3>
                <ul>
                    <li>facebook</li>
                    <li>X</li>
                    <li>instagram</li>
                    <li>linkedIn</li>
                </ul>
            </div>

            <div className="braches">
                <h3>our locations</h3>
                <ul>
                    <li>Jinja</li>
                <li>Mengo</li>
                <li>Entebbe</li>
                <li>kampala</li>
                </ul>
            </div>

            <div className="tel">
                <h3> Tel</h3>
                <ul>
                    <li>0751172007</li>
                    <li>0751172007</li>
                    <li>email</li>
                </ul>
            </div>

            <div className="footer-form">
  <h3>Contact Us</h3>
  <form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

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