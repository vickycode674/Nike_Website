import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container]">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} className="m-0" />
          </a>

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            obcaecati distinctio eius accusamus corporis hic, aspernatur
            doloremque alias ipsam quae illo, quidem eveniet tempora nam
            accusantium vel iusto non dolorem. Ex obcaecati accusamus architecto
            dolores omnis facere, velit sunt facilis soluta reiciendis rerum
            nesciunt optio.
          </p>
          <div className="flex  items-center gap-5  mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat">{section.title}</h4>

              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 gap-3 text-white-400 hover:text-slate-gray leading-normal text-base ">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1  justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copy RigthSign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />

          <p className="">Copyright. All rights reserved.</p>
        </div>
         <p className=" font-montserrat cursor-pointer">Terms and Conditions </p>
      </div>
    </footer>
  );
};

export default Footer;
