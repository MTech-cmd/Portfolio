import { LOGO } from '../data';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='w-20' src={LOGO} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaXTwitter />
            </div>
        </nav>
    )
}

export default Navbar;