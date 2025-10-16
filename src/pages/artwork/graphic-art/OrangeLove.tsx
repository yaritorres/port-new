import SideNav from '../../../custom-ui/SideNav';

export default function OrangeLove() {
  const mainSectionStyle = `
    w-full h-full bg-radial from-black-900 to-black-930 rounded-lg flex flex-col xl:grid grid-cols-8 grid-rows-4 gap-4 p-6 md:p-18 font-main
  `;

  return (
    <>
        <div className={mainSectionStyle}>
          <div className='col-span-3 flex flex-row gap-x-6 md:gap-x-10 items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              xmlSpace="preserve"
              className="w-6 rotate-45"
            >
              <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
            </svg>
            <h2 className='text-4xl md:text-5xl'> ORANGE_LOVE </h2>
          </div>
          <img
            src="public/orange_love.jpeg"
            className={`w-full max-h-full col-start-5 col-span-3 row-span-2`}
          />
          <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 text-xs`}>
            <p> one of the graphic art pieces i made after consulting some friends about their favoite colors. </p>
            <p> business card sized {`(8.89 x 5.1 cm)`} and created using Adobe Illustrator. </p>
            <div className='flex flex-row'>
              <p> contains a small reference to RAT-TECH™, a subsidiary of the&nbsp; </p>
              <p className='text-blorange'> RATWARE CORPORATION </p>
              <p>.</p>
            </div>
          </div>
        </div>
      <SideNav />
    </>
  );
}