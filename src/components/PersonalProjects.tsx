import { motion } from "motion/react";

const personalProjectItems = ['portfolio v.1', 'codeAndTell'];
const personalProjectBlurbs = [
  'the first portfolio i created and deployed', 'a platform where devs can come together to easily find side projects to work on'
];
const personalProjectDates = ['2024', '2025'];
const personalProjectTech = [`[ react, next.js, vercel, tailwindCSS ]`, `[ react, vite, supabase, tailwindCSS, netlify ]`];
const projectItemStyle = `flex flex-col w-full gap-y-3 font-main`;

type PersonalProjectsProps = {
  setActivePersonalPhotoList: (index: number) => void,
}

export default function PersonalProjects (props: PersonalProjectsProps) {
  return (
    <div className={`col-span-3 col-start-4 font-main`}>
      <div
        className={`${projectItemStyle}`}
      >
        { personalProjectItems.map((item, key) =>
          <div
            key={key}
            className={`select-none`}
            onMouseEnter={() => { props.setActivePersonalPhotoList(key) }}
            onMouseLeave={() => { props.setActivePersonalPhotoList(-1) }}
          >
            <motion.div
              whileHover={{ borderBottom: '1px solid white', width: '100%' }}
              className={`
                w-fit flex flex-row gap-x-2 items-center mb-1 hover:cursor-pointer
              `}
            >
              <h4 className={`text-sm `}>{item}</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                xmlSpace="preserve"
                className="w-2 h-2"
              >
                <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
              </svg>
            </motion.div>
            <p className={`text-xs`}>{personalProjectBlurbs[key]}</p>
            <p className={`text-[10px]`}>{personalProjectTech[key]}</p>
            <p className={`text-[10px]`}>{personalProjectDates[key]}</p>
          </div>
        )}
      </div>
    </div>
  )
}