import '../App.css'
import { linksMenu } from '../assets/constants'
import ProfilePhoto from '../assets/images/profile_photo.jpg'
import Slack from '../assets/images/slack.png'
import Github from '../assets/images/github.png'
import Camera from '../assets/images/camera.png'
import { Link } from 'react-router-dom'


const Profile = () => {

  return (  
    <>
      <div className="menu-block"></div>
      <div id="img-wrapper">
        <span className="camera-icon">
          <img src={Camera} alt="Camera Icon" />
        </span>
        <img src={ProfilePhoto} alt="Profile Photo" id="profile_img" />
      </div>
      <h1 id='twitter'> EraOrd </h1>
      <p id='slack' hidden={true}> lordEra </p>
      {/* Links */}
      <div className="profile-links">
        {linksMenu.map((link, index) => (
          <a href={link.link} id={link.id} key={index} target="_blank" rel="noreferrer" className='link'>
            {link.name}
            <span style={{'display': link.description === undefined ? 'none': 'block'}}> 
              {link.description || ''} 
            </span>
          </a>
        ))}

        {/* Contact Me */}
        <Link to={'/contact'} id='contact' rel="noreferrer" className='link'>
          Contact Me
        </Link>
      </div>

      {/* Socials */}
      <div className="social-links">
        <img src={Slack} alt="Slack account" />
        <a target='_blank' href="https://www.github.com/Charvine-300"> 
          <img src={Github} alt="Github account" />
        </a>
      </div>
    </>
  );
}
 
export default Profile;