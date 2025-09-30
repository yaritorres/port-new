import { motion } from "motion/react";
import { Link } from "react-router";
import { PowerGlitch } from "powerglitch";

const bootcampProjectItems = ['atelier', 'duguid construction'];
const bootcampProjectBlurbs = [
  'mock e-commerce site in the early days of my bootcamp', 'final project to create a full-scale app for a mock construction company'
];
const bootcampProjectDates = ['2021', '2021'];
const bootcampProjectLinks = ['atelier', 'duguid'];
const bootcampProjectTech = [`[ react, next.js, vercel, tailwindCSS ]`, `[ react, next.js, vercel, tailwindCSS ]`];
const projectItemStyle = `flex flex-col w-full gap-y-3 font-main`;

const hoverGlitchOptions: object = {
  playMode: 'hover',
  timing: {duration: 1000},
}

PowerGlitch.glitch('.hover-glitch', hoverGlitchOptions);

type BootcampProjectsProps = {
  setActiveBootcampPhotoList: (index: number) => void,
}

export default function BootcampProjects (props: BootcampProjectsProps) {
  return (
    <div className={`md:col-start-2 lg:col-start-4 col-span-3 font-main`}>
      <div
        className={`${projectItemStyle}`}
      >
        { bootcampProjectItems.map((item, key) =>
          <div
            key={key}
            className={`select-none`}
            onMouseEnter={() => { props.setActiveBootcampPhotoList(key) }}
            onMouseLeave={() => { props.setActiveBootcampPhotoList(-1) }}
          >
            <motion.div
              whileHover={{ borderBottom: '1px solid white', width: '100%' }}
              className={`
                w-fit flex flex-row gap-x-2 items-center mb-1 hover:cursor-pointer hover-glitch
              `}
            >
              <Link to={bootcampProjectLinks[key]} className={`text-sm`}>{item}</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                xmlSpace="preserve"
                className="w-2 h-2"
              >
                <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
              </svg>
            </motion.div>
            <p className={`text-xs`}>{bootcampProjectBlurbs[key]}</p>
            <p className={`text-[10px] text-blorange`}>{bootcampProjectTech[key]}</p>
            <p className={`text-[10px]`}>{bootcampProjectDates[key]}</p>
          </div>
        )}
      </div>
    </div>
  )
}