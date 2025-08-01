import { motion } from "motion/react"
import { animate } from 'motion';

export default function Contact() {
  const contactItems = [
    'linkedin',
    'github',
    'instagram'
  ];

  const contactLinks = [
    'https://www.linkedin.com/in/yaritorresnicola/',
    'https://github.com/yaritorres',
    'https://www.instagram.com/ratwarecorporation',
  ];

  const mainSectionStyle = `w-full h-full bg-radial from-black-900 to-black-930 rounded-lg grid grid-cols-8 grid-rows-4 gap-4 px-18 py-18`;

  return (
    <div className={mainSectionStyle}>
      <div
        className={`flex flex-row items-center gap-x-20 col-start-4 row-start-2 col-span-5 font-main text-[80px]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          xmlSpace="preserve"
          className="w-[50px] h-[50px] rotate-45"
        >
          <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
        </svg>
        <p className="">{`{ contact }`}</p>
      </div>
      <div
        className={`flex flex-col h-fit gap-y-3 col-span-3 col-start-3 row-start-3`}
      >
        { contactItems.map((contact, key) =>
          <motion.div whileHover={{ borderBottom: '1px solid white', width: '100%' }} className='w-fit flex flex-row gap-x-3 items-center'>
            <a
              href={contactLinks[key]}
              rel="no referrer"
              target="_blank"
              className="font-main text-lg text-white"
              key={key}
            >
              {contact}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              xmlSpace="preserve"
              className="w-2 h-2"
            >
              <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
}