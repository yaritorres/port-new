import SideNav from '../../../custom-ui/SideNav';

export default function CodeAndTell() {
  const mainSectionStyle = `
    w-full h-full bg-radial from-black-900 to-black-930 rounded-lg grid grid-cols-8 grid-rows-4 gap-4 px-18 py-18 font-main
  `;

  return (
    <>
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
          <h1> codeAndTell </h1>
        </div>
        <img
          src="public/codeAndTell.png"
          className={`col-start-5 col-span-3 row-span-2 w-full`}
        />
        <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 text-xs`}>
          <p> {`[ IN PROGRESS ]`} </p>
          <p>
            my cousin {`(hireable)`} and i built a platform for devs to come together to post about and join side projects with other devs.
          </p>
          <p> crafted with React and styled with TailwindCSS, using shadcn pre-built UI components. </p>
          <p> it features a Supabase hosted database and authentication is handled by Auth0. </p>
          <p> to be deployed soon, probably using Cloudflare. </p>
        </div>
      </div>
      <SideNav />
    </>
  );
}