import { useState } from "react";
import BootcampProjects from "./BootcampProjects";
import PersonalProjects from "./PersonalProjects";
import Artwork from "./Artwork";

export default function Work() {
  const [activeBootcampPhotoList, setActiveBootcampPhotoList] = useState(-1);
  const [activePersonalPhotoList, setActivePersonalPhotoList] = useState(-1);
  const [activeGraphicPhotoList, setActiveGraphicPhotoList] = useState(-1);

  const bootcampPhotoList = ['/royalepage.gif', '/duguid.gif'];
  const personalPhotoList = ['/portfolio-v1.png', '/codeAndTell.png'];
  const graphicPhotoList = [
    '/RATWARE_CORP.jpeg', '/psychic_ops.jpeg', '/orange_love.jpeg',
    '/the_dreamer.jpeg', '/christmas_party.jpeg'
  ];

  const mainSectionStyle = `
    w-full bg-radial from-black-900 to-black-930 rounded-lg grid grid-cols-8 gap-4 px-18 py-18
  `;

  return (
    <>
      <div className={mainSectionStyle} id="works">
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

        <div className={`absolute w-1/6 h-1/6 right-[5%] top-[10%] overflow-hidden`}>
          { graphicPhotoList.map((photo, key) =>
            <div
              key={key}
              className={`h-full ${ key === activeGraphicPhotoList ? '' : 'hidden' }`}
            >
              <img className={`object-cover w-full h-full`} src={photo}></img>
            </div>
          )}
        </div>

        <h1 className={`col-start-3 col-span-2 text-base font-main`}> works </h1>
        <div className={`col-span-2 col-start-3 font-main`}>
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
        <BootcampProjects setActiveBootcampPhotoList={setActiveBootcampPhotoList} />

        <h3 className={`col-span-2 col-start-3 indent-12 text-base font-main`}> personal projects </h3>
        <PersonalProjects setActivePersonalPhotoList={setActivePersonalPhotoList}/>

        <div className={`col-span-2 col-start-3 font-main`}>
          <div className="flex flex-row gap-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              xmlSpace="preserve"
              className="w-3 h-3 rotate-45"
            >
              <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
            </svg>
            <h2 className="text-2xl"> artwork </h2>
          </div>
          <h3 className="text-base indent-12"> graphic art </h3>
        </div>
        <Artwork setActiveGraphicPhotoList={setActiveGraphicPhotoList}/>
      </div>
    </>
  )
}
