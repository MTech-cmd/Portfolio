import { LOGO, CONTACT } from '../data';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href='https://mtech-cmd.github.io/' ><img className='w-20 spin' src={LOGO} alt="logo" /></a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href={CONTACT.linkedin}><FaLinkedin /></a>
                <a href={`https://github.com/` + CONTACT.github}><FaGithub /></a>
                <a href={`https://www.instagram.com/` + CONTACT.instagram}><FaInstagram /></a>
                <a href={`https://x.com/` + CONTACT.twitter}><FaXTwitter /></a>
            </div>
        </nav>
    )
}

export default Navbar;