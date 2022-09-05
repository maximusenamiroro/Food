import "../App.css"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import youtube from "../images/youtube.svg"
import linkedin from "../images/linkedin.svg"


function Footer() {
    return (
      <div className="Footer">
       



<div className="logocarrier">


<div className="logobottom"></div>

</div>



   <div className="icones">
   <img src={facebook} alt=""  className="book"/>
   <img src={twitter} alt=""  className="book"/>
   <img src={instagram} alt=""  className="book"/>
   <img src={linkedin} alt=""  className="book"/>
   <img src={youtube} alt=""  className="book"/>

</div>


      </div>
      
    );
  }
  
  export default Footer;