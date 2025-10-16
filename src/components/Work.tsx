import { useState } from "react";
import BootcampProjects from "./BootcampProjects";
import PersonalProjects from "./PersonalProjects";
import Artwork from "./Artwork";
import BootcampPhotoList from "./BootcampPhotoList";
import PersonalProjectsPhotoList from "./PersonalProjectsPhotoList";
import GraphicPhotoList from "./GraphicPhotoList";
import Contact from "./Contact";

export default function Work() {
  const [activeBootcampPhotoList, setActiveBootcampPhotoList] = useState(-1);
  const [activePersonalPhotoList, setActivePersonalPhotoList] = useState(-1);
  const [activeGraphicPhotoList, setActiveGraphicPhotoList] = useState(-1);

  const mainSectionStyle = `
    w-full bg-radial from-black-900 to-black-930 rounded-lg flex flex-col md:grid md:grid-cols-4 lg:grid-cols-8 gap-4 p-6 md:p-18
  `;

  return (
    <>
      <div className={mainSectionStyle} id="works">
        <BootcampPhotoList activeBootcampPhotoList={activeBootcampPhotoList} />
        <PersonalProjectsPhotoList activePersonalPhotoList={activePersonalPhotoList} />
        <GraphicPhotoList activeGraphicPhotoList={activeGraphicPhotoList} />

        <h1 className={`md:col-start-1 lg:col-start-3 col-span-2 text-base font-main`}> works </h1>
        <div className={`md:col-start-1 lg:col-start-3 col-span-full font-main`}>
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
          <h3 className="text-blorange text-base md:indent-12"> bootcamp projects </h3>
        </div>
        <BootcampProjects setActiveBootcampPhotoList={setActiveBootcampPhotoList} />

        <h3 className={`md:col-start-1 lg:col-start-3 col-span-full md:indent-12 text-blorange text-base font-main`}> personal projects </h3>
        <PersonalProjects setActivePersonalPhotoList={setActivePersonalPhotoList}/>

        <div className={`md:col-start-1 lg:col-start-3 col-span-2 font-main`}>
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
          <h3 className="text-blorange text-base md:indent-12"> graphic art </h3>
        </div>
        <Artwork setActiveGraphicPhotoList={setActiveGraphicPhotoList}/>
        <h3 className={`md:col-start-1 lg:col-start-3 col-span-2 md:indent-12 text-blorange text-base font-main`}> written work </h3>

        <h1 className={`md:col-start-1 lg:col-start-3 col-span-2 text-base font-main`}> contact </h1>
        <h3 className={`md:col-start-1 lg:col-start-3 col-span-full md:indent-12 text-blorange text-base font-main`}>
          {`[ currently seeking new opportunities! ]`}
        </h3>
        <Contact />
      </div>

    </>
  )
}
