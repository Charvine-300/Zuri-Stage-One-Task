import '../App.css'
import { linksMenu } from '../assets/constants'
import ProfilePhoto from '../assets/images/profile_photo.jpg'
import Slack from '../assets/images/slack.png'
import Github from '../assets/images/github.png'
import Camera from '../assets/images/camera.png'
import Zuri from '../assets/images/zuri.png'
import I4G from '../assets/images/I4G.png'


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
      </div>

      {/* Socials */}
      <div className="social-links">
        <img src={Slack} alt="Slack account" />
        <a target='_blank' href="https://www.github.com/Charvine-300"> 
          <img src={Github} alt="Github account" />
        </a>
      </div>

      {/* Footer */}
      <footer>
        <img src={Zuri} alt="Zuri Intersnhip Program Logo" className='zuri-img' />
        <p> HNG Internship 9 Frontend Task </p>
        <img src={I4G} alt="Ingressive 4 Good Logo" className='i4g-img' />
      </footer>
    </>
  );
}
 
export default Profile;