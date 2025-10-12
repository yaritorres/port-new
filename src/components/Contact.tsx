import { motion } from "motion/react"
import { PowerGlitch } from "powerglitch";
import { Link } from "react-router";

export default function Contact() {
  const contactItems = [
    'linkedin',
    'github',
    'instagram'
  ];

  const contactLinks = [
    'https://www.linkedin.com/in/yaritorresnicola/',
    'https://github.com/yaritorres',
    'https://www.instagram.com/theratwarecorporation/',
  ];

  const hoverGlitchOptions: object = {
    playMode: 'hover',
    timing: { duration: 1000 },
  }

  PowerGlitch.glitch('.hover-glitch', hoverGlitchOptions);

  return (
      <div
        className={`md:ml-12 flex flex-col h-fit gap-y-3 md:col-start-1 lg:col-start-3`}
      >
        <motion.div
          whileHover={{ borderBottom: '1px solid white', width: '100%' }}
          className='w-fit flex flex-row gap-x-3 items-center hover:cursor-pointer hover-glitch'
        >
          <Link to="resume" className="font-main text-lg text-white">
            resume
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            xmlSpace="preserve"
            className="w-2 h-2"
          >
            <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
          </svg>
        </motion.div>
        { contactItems.map((contact, key) =>
          <motion.div
            key={key}
            whileHover={{ borderBottom: '1px solid white', width: '100%' }}
            className='w-fit flex flex-row gap-x-3 items-center hover-glitch'
          >
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
  );
}