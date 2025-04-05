

import "./footer.css"

const Footer = () =>{
    return(
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
        </div>
    )
}

export default Footer;