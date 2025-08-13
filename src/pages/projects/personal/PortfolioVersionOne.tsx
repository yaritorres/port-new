import SideNav from '../../../custom-ui/SideNav';

export default function PortfolioVersionOne() {
  const mainSectionStyle = `
    w-full h-full bg-radial from-black-900 to-black-930 rounded-lg grid grid-cols-8 grid-rows-4 gap-4 px-18 py-18 font-main
  `;

  return (
    <>
      <div
        className={`
          relative w-screen h-screen bg-black-950 rounded-lg inset-0 py-[48px] px-[12px] z-50 overflow-hidden text-black-50
        `}
      >
        <div
          className={`
          absolute bg-fixed bg-auto inset-[-50%_0%_0%_-50%] w-[200%] h-[200vh] pointer-events-none mix-blend-normal
          bg-[url(/grain_background.png)] z-10 animate-grain
        `}
        />

        <img
          className="h-[20px] scale-y-[-1] absolute"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>
        <img
          className="h-[20px] scale-x-[-1] scale-y-[-1] absolute right-[12px]"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        ></img>

        <div className={mainSectionStyle}>
          <div className='col-span-3 flex flex-row gap-x-10 items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              xmlSpace="preserve"
              className="w-6 h-6 rotate-45"
            >
              <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
            </svg>
            <h1> portfolio v.1 </h1>
          </div>
          <img
            src="public/portfolio-v1.png"
            className={`col-start-5 col-span-3 row-span-2 w-full`}
          />
          <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 text-xs`}>
            <p> my first serious portfolio attempt. </p>
            <p> being replaced by this one but it served me well. i think. </p>
            <p> built with Next.js and deployed on Vercel, styled with TailwindCSS. </p>
            <p> it has some quirks... hopefully this version doesn&apos;t so much... </p>
          </div>
        </div>

        <img
          className="h-[20px] absolute bottom-[48px]"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        />
        <img
          className="h-[20px] scale-x-[-1] absolute bottom-[48px] right-[12px]"
          src="../rounded_inner_corner.svg"
          width={20}
          alt=""
        />
      </div>
      <SideNav />
    </>
  );
}