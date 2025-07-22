import { useEffect, useState } from "react";

export default function Work() {
  const [activePhotoList, setActivePhotoList] = useState(0);

  const projectListItems = ['portfolio v.1', 'codeAndTell', 'atelier', 'duguid construction'];
  const projectBlurbs = [
    'the first portfolio i created and deployed', 'a platform where devs can come together to easily find side projects to work on',
    'mock e-commerce site in the early days of my bootcamp', 'final project to create a full-scale app for a mock construction company'
  ];
  const projectDates = ['2024', '2025', '2021', '2021'];
  const projectTech = [
    `[ react, next.js, vercel, tailwindCSS ]`, `[ react, vite, supabase, tailwindCSS, netlify ]`,
    `[ react, next.js, vercel, tailwindCSS ]`, `[ react, next.js, vercel, tailwindCSS ]`
  ]
  const photoList = ['public/portfolio-v1.png', 'public/codeAndTell.png', 'public/royalepage.gif', 'public/duguid.gif'];

  const testBorder = 'border-[0.5px] border-solid border-red-500';

  const mainSectionStyle = `w-full min-h-full bg-black-900 rounded-lg grid grid-cols-8 grid-rows-4 gap-4 px-18 py-18`;
  const gridStyle = `bg-black-800 w-full h-full`;

  const circle = <div className={``}>{']'}</div>;

  useEffect(() => {
    function cycleCarousel () {
      if (activePhotoList < photoList.length - 1) {
        setActivePhotoList(activePhotoList + 1)
      } else {
        setActivePhotoList(0);
      }
    }

    setTimeout(cycleCarousel, 2000)
  })

  return (
    <>
      <div className={mainSectionStyle}>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
        <div className={gridStyle}></div>
      </div>
    </>
  )
}
