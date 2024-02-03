
import { logo } from '../assets'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { footerLinks } from '../constants/constants';
import FooterLinkCard from '../components/FooterLinkCard';

const Footer = () => {
  return (
    <div className="flex  max-xs:flex-col  ">
      <div className="flex flex-col w-3/5 max-xs:w-full max-xs:items-center">
      <img src={logo} className="w-[150px] " />
      <p className="text-[18px] font-semibold max-xs:text-center text-slate-gray py-6">Travelog: Unleash wanderlust with captivating destinations, inspiring stories, and expert tips. Your gateway to endless adventures and unforgettable memories.</p>

      <div className='flex '>
        <FaFacebook  size={40} className='text-purple mr-2'/>
        <AiFillInstagram size={40} className='text-purple mx-2' />
        <FaXTwitter  size={40} className='text-purple mx-2'/>
      </div>
      </div>

      <div className='flex justify-between w-full px-16 max-xs:flex-col max-xs:items-center'>
        {footerLinks.map((footerEle)=>(
          <FooterLinkCard  key={footerEle.title} {...footerEle} />
        ))}
      </div>


     
    </div>
  )
}

export default Footer
