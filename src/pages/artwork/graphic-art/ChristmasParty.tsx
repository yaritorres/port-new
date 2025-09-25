import SideNav from '../../../custom-ui/SideNav';

export default function ChristmasParty() {
  const mainSectionStyle = `
    w-full h-full bg-radial from-black-900 to-black-930 rounded-lg grid grid-cols-8 grid-rows-4 gap-4 px-18 py-18 font-main
  `;

  return (
    <>
      <div
        className={`
        absolute bg-fixed bg-auto inset-[-50%_0%_0%_-50%] w-[200%] h-[200vh] pointer-events-none mix-blend-normal
        bg-[url(/grain_background.png)] z-10 animate-grain
      `}
      />
      <div className={mainSectionStyle}>
        <div className='col-span-4 flex flex-row gap-x-10 items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            xmlSpace="preserve"
            className="w-6 h-6 rotate-45"
          >
            <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
          </svg>
          <h1> CHRISTMAS_PARTY </h1>
        </div>
        <img
          src="public/christmas_party.jpeg"
          className={`w-full max-h-full col-start-5 col-span-3 row-span-2`}
        />
        <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 text-xs`}>
          <p> one of the graphic art pieces i made around my idea for an ostensibly good mega corporation. </p>
          <p> created using Adobe Illustrator and Photoshop. </p>
          <p> VCR styled display of H.E.L.L. with an ironic label. </p>
          <div className='flex flex-row'>
            <p> one of the many ways we have fun here at the&nbsp; </p>
            <p className='text-blorange'> RATWARE CORPORATION </p>
            <p>.</p>
          </div>
        </div>
      </div>
      <SideNav />
    </>
  );
}