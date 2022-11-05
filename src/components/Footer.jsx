import Zuri from '../assets/images/zuri.png'
import I4G from '../assets/images/I4G.png'


const Footer = () => {


  return ( 
    <>
      <footer>
        <img src={Zuri} alt="Zuri Intersnhip Program Logo" className='zuri-img' />
        <p> HNG Internship 9 Frontend Task </p>
        <img src={I4G} alt="Ingressive 4 Good Logo" className='i4g-img' />
      </footer>
    </>
  );
}
 
export default Footer;