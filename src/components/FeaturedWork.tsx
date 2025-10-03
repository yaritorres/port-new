import { PowerGlitch } from "powerglitch";
import { useEffect, useState } from "react";

export default function FeaturedWork() {
  const hoverGlitchOptions: object = {
    playMode: 'hover',
    timing: {duration: 1000},
  }

  const glitchOptions: object = {
    playMode: 'always',
    timing: {duration: 2000},
  }

  PowerGlitch.glitch('.hover-glitch', hoverGlitchOptions);

  PowerGlitch.glitch('.glitch', glitchOptions);
  const [activePhotoList, setActivePhotoList] = useState(0);

  const projectListItems = ['portfolio v.1', 'codeAndTell', 'atelier', 'duguid construction'];
  const projectBlurbs = [
    'the first portfolio i created and deployed', 'a platform where devs can come together to easily find side projects to work on',
    'mock e-commerce site in the early days of my bootcamp', 'final project to create a full-scale app for a mock construction company'
  ];
  const projectDates = ['2024', '2025', '2021', '2021'];
  const projectTech = [
    `[ react, next.js, vercel, tailwindCSS ]`, `[ react, vite, supabase, tailwindCSS, netlify ]`,
    `[ react, next.js, AWS, CSS ]`, `[ react, next.js, AWS, tailwindCSS, auth0, PostgreSQL ]`
  ]
  const photoList = ['public/portfolio-v1.png', 'public/codeAndTell.png', 'public/royalepage.gif', 'public/duguid.gif'];

  const mainSectionStyle = `
    w-full min-h-screen md:h-full bg-radial from-black-900 to-black-930 rounded-lg md:grid grid-cols-8 grid-rows-4 gap-4 p-6 md:p-18
  `;
  const projectItemStyle = `flex flex-col w-full h-full gap-y-1 font-main`;

  useEffect(() => {
    function cycleCarousel () {
      if (activePhotoList < photoList.length - 1) {
        setActivePhotoList(activePhotoList + 1)
      } else {
        setActivePhotoList(0);
      }
    }

    setTimeout(cycleCarousel, 2000);
  })

  return (
    <div id="index" className={mainSectionStyle}>
      <div className={`col-span-2 font-main text-lg col-start-1`}>
        <div className="hover-glitch mb-6 md:m-0">
          welcome to my portfolio. <br></br>
          welcome to my portfolio. <br></br>
          welcome to my portfolio. <br></br>
          welcome to my portfolio. <br></br>
          welcome to my portfolio. <br></br>
          <p className="text-blorange">welcome to my portfolio.</p>
          welcome to my portfolio. <br></br>
          welcome to my portfolio. <br></br>
        </div>
      </div>
      <div className={`col-span-3 row-span-2 col-start-6 row-start-2 overflow-hidden mb-6 md:m-0`}>
        <p className="font-main text-lg mb-3 text-blorange"> {`[ FEATURED PROPAGANDA ]`} </p>
        { photoList.map((photo, key) =>
          <div
            key={key}
            className={`h-full ${ key === activePhotoList ? '' : 'hidden' }`}
          >
            <img className={`object-cover w-full h-full glitch`} src={photo}></img>
          </div>
        )}
      </div>
      <div className={`flex flex-col gap-y-3 col-span-3 row-span-1 col-start-6 row-start-4`}>
        { projectListItems.map((nav, key) =>
          <div
            key={key}
            className={`${projectItemStyle} ${ key === activePhotoList ? '' : 'hidden' }`}
          >
            <p className="font-bold text-md">{nav}</p>
            <p className={`text-xs`}>{projectBlurbs[key]}</p>
            <p className="text-[10px] text-blorange">{projectTech[key]}</p>
            <p className="text-[8px]">{projectDates[key]}</p>
          </div>
        )}
      </div>
    </div>
  )
}