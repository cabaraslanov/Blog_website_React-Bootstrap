import { AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import {FaSnapchat, FaTwitter} from 'react-icons/fa'
import {TbBrandPicsart} from 'react-icons/tb'
 const Footer = ()=>{
    return(
        <footer className='d-flex flex-column align-items-center py-5'>
            <article>
                <ul className='d-flex gap-3 fs-4 list-unstyled footerIcon'>
                    <li><AiFillFacebook/></li>
                    <li><AiOutlineInstagram/></li>
                    <li><FaSnapchat/></li>
                    <li><TbBrandPicsart/></li>
                    <li><FaTwitter/></li>
                    <li><AiFillLinkedin/></li>
                </ul>
            </article>

            <article>
                <p>Powered by<a href="#" className="text-secondary"> w3.css</a></p>
            </article>
        </footer>
    )
 }
 export default Footer;