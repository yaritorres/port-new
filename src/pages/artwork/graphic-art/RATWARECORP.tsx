export default function RATWARECORP() {
  const mainSectionStyle = `
    w-full h-full bg-radial from-black-900 to-black-930 rounded-lg flex flex-col gap-y-6 xl:grid grid-cols-8 grid-rows-4 gap-4 p-6 md:p-18 font-main overflow-scroll
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
          <h2 className='text-4xl md:text-5xl'> RATWARE_CORP </h2>
        </div>
        <img
          src="public/RATWARE_CORP.jpeg"
          className={`col-start-5 col-span-3 row-span-2 w-full max-h-full`}
        />
        <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 xl:text-xs`}>
          <p> the first graphic art i made around my idea for an ostensibly good mega corporation. </p>
          <p> business card sized {`(8.89 x 5.1 cm)`} and created using Adobe Illustrator. </p>
          <p> i plan to make a clothing brand some day using these and other assets found around this site. </p>
          <div className='md:flex flex-row items-center'>
            <p> even this portfolio is owned by&nbsp; </p>
            <p className='text-blorange flex flex-row'>
              <p className='text-white'>the&nbsp;</p>
              RATWARE CORPORATION
              <p className='text-white'>.</p></p>
          </div>
        </div>
      </div>
    </>
  );
}