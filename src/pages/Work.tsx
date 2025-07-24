import { useEffect, useState } from "react";

export default function Work() {
  const [activeBootcampPhotoList, setActiveBootcampPhotoList] = useState(-1);
  const [activePersonalPhotoList, setActivePersonalPhotoList] = useState(-1);

  const bootcampProjectItems = ['atelier', 'duguid construction'];
  const bootcampProjectBlurbs = [
    'mock e-commerce site in the early days of my bootcamp', 'final project to create a full-scale app for a mock construction company'
  ];
  const bootcampProjectDates = ['2021', '2021'];
  const bootcampProjectTech = [`[ react, next.js, vercel, tailwindCSS ]`, `[ react, next.js, vercel, tailwindCSS ]`];

  const personalProjectItems = ['portfolio v.1', 'codeAndTell'];
  const personalProjectBlurbs = [
    'the first portfolio i created and deployed', 'a platform where devs can come together to easily find side projects to work on'
  ];
  const personalProjectDates = ['2024', '2025'];
  const personalProjectTech = [`[ react, next.js, vercel, tailwindCSS ]`, `[ react, vite, supabase, tailwindCSS, netlify ]`];

  const bootcampPhotoList = ['public/royalepage.gif', 'public/duguid.gif'];
  const personalPhotoList = ['public/portfolio-v1.png', 'public/codeAndTell.png'];

  const testBorder = 'border-[0.5px] border-solid border-red-500';
  const testGridStyle = `bg-black-800 w-full`;

  const mainSectionStyle = `w-full bg-black-900 rounded-lg grid grid-cols-8 gap-4 px-18 py-18`;
  const projectItemStyle = `flex flex-col w-full gap-y-3 font-main`;

  return (
    <>
      <div className={mainSectionStyle}>
        <div className={`absolute w-1/6 h-1/6 right-[5%] top-[10%] overflow-hidden`}>
          { bootcampPhotoList.map((photo, key) =>
            <div
              key={key}
              className={`h-full ${ key === activeBootcampPhotoList ? '' : 'hidden' }`}
            >
              <img className={`object-cover w-full h-full`} src={photo}></img>
            </div>
          )}
        </div>
        <div className={`absolute w-1/6 h-1/6 right-[5%] top-[10%] overflow-hidden`}>
          { personalPhotoList.map((photo, key) =>
            <div
              key={key}
              className={`h-full ${ key === activePersonalPhotoList ? '' : 'hidden' }`}
            >
              <img className={`object-cover w-full h-full`} src={photo}></img>
            </div>
          )}
        </div>
        <div className={`col-start-3 row-start-1 text-base font-main`}>
          <h1> Works </h1>
        </div>
        <div className={`col-span-2 col-start-3 row-start-2 font-main`}>
          <div className="flex flex-row gap-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              xmlSpace="preserve"
              className="w-3 h-3 rotate-45"
            >
              <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
            </svg>
            <h2 className="text-2xl"> web design </h2>
          </div>
          <h3 className="text-base indent-12"> bootcamp projects </h3>
        </div>
        <div className={`col-span-3 col-start-4 row-span-6 row-start-3 font-main`}>
          <div
            className={`${projectItemStyle}`}
          >
            { bootcampProjectItems.map((item, key) =>
              <div
                key={key}
                className={`group hover:cursor-pointer`}
                onMouseEnter={() => { setActiveBootcampPhotoList(key) }}
                onMouseLeave={() => { setActiveBootcampPhotoList(-1) }}
              >
                <div
                  className={`
                    flex flex-row gap-x-2 items-center mb-1 group-hover:border-white group-hover:border-solid group-hover:border-b-1
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
                </div>
                <p className={`text-xs`}>{bootcampProjectBlurbs[key]}</p>
                <p className={`text-[10px]`}>{bootcampProjectTech[key]}</p>
                <p className={`text-[10px]`}>{bootcampProjectDates[key]}</p>
              </div>
            )}
          </div>
        </div>

        <h3 className={`col-span-2 col-start-3 row-start-9 indent-12 text-base font-main`}> personal projects </h3>
        <div className={`col-span-3 col-start-4 row-span-6 row-start-10 font-main`}>
          <div
            className={`${projectItemStyle}`}
          >
            { personalProjectItems.map((item, key) =>
              <div
                key={key}
                className={`group hover:cursor-pointer`}
                onMouseEnter={() => { setActivePersonalPhotoList(key) }}
                onMouseLeave={() => { setActivePersonalPhotoList(-1) }}
              >
                <div
                  className={`
                    flex flex-row gap-x-2 items-center mb-1 group-hover:border-white group-hover:border-solid group-hover:border-b-1
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
                </div>
                <p className={`text-xs`}>{personalProjectBlurbs[key]}</p>
                <p className={`text-[10px]`}>{personalProjectTech[key]}</p>
                <p className={`text-[10px]`}>{personalProjectDates[key]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
