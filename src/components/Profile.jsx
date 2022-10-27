import '../App.css'
import { linksMenu } from '../assets/constants'
import ProfilePhoto from '../assets/images/profile_photo.jpg'
import Slack from '../assets/images/slack.png'
import Github from '../assets/images/github.png'


const Profile = () => {

  return (  
    <>
      <div className="menu-block"></div>
      <img src={ProfilePhoto} alt="Profile Photo" id="profile_img" />
      <h1> Chidera Ezenwekwe </h1>
      <p id='slack'> @EraOrd </p>
      {/* Links */}
      <div className="profile-links">
        {linksMenu.map((link, index) => (
          <a href={link.url} id={link.id} key={index} target="_blank" rel="noreferrer" className='link'>
            {link.name}
            <span> {link.description || ''} </span>
          </a>
        ))}
      </div>

      {/* Socials */}
      <div className="social-links">
        <img src={Slack} alt="Slack account" />
        <a href="https://www.github.com/Charvine-300"> 
          <img src={Github} alt="Github account" />
        </a>
      </div>
    </>
  );
}
 
export default Profile;