import { motion } from "motion/react";

const graphicArtItems = ['[ RATWARE CORP ]', '[ PSYCHIC OPS ]', '[ ORANGE LOVE ]', '[ THE DREAMER ]', '[ CHRISTMAS PARTY ]'];
const graphicArtBlurbs = [
  'business card size graphic art made in illustrator', 'business card size graphic art made in illustrator',
  'business card size graphic art made in illustrator', 'business card size graphic art made in illustrator',
  'business card size graphic art made in illustrator'
];
const graphicArtDates = ['2025', '2025', '2025', '2025', '2025'];
const graphicArtTech = [
  `[ adobe illustrator ]`, `[ adobe illustrator ]`, `[ adobe illustrator ]`, `[ adobe illustrator ]`, `[ adobe illustrator ]`
];
const projectItemStyle = `flex flex-col w-full gap-y-3 font-main`;

type GraphicArtProps = {
  setActiveGraphicPhotoList: (index: number) => void,
}

export default function Artwork (props: GraphicArtProps) {
  return (
    <div className={`col-span-3 col-start-4 font-main`}>
      <div
        className={`${projectItemStyle}`}
      >
        { graphicArtItems.map((item, key) =>
          <div
            key={key}
            className={`select-none`}
            onMouseEnter={() => { props.setActiveGraphicPhotoList(key) }}
            onMouseLeave={() => { props.setActiveGraphicPhotoList(-1) }}
          >
            <motion.div
              whileHover={{ borderBottom: '1px solid white', width: '100%' }}
              className={`
                w-fit flex flex-row gap-x-2 items-center mb-1 hover:cursor-pointer
              `}
            >
              <h4 className={`text-sm`}>{item}</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                xmlSpace="preserve"
                className="w-2 h-2"
              >
                <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
              </svg>
            </motion.div>
            <p className={`text-xs`}>{graphicArtBlurbs[key]}</p>
            <p className={`text-[10px]`}>{graphicArtTech[key]}</p>
            <p className={`text-[10px]`}>{graphicArtDates[key]}</p>
          </div>
        )}
      </div>
    </div>
  )
}