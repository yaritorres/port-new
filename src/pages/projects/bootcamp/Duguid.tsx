import SideNav from '../../../custom-ui/SideNav';

export default function Duguid() {
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
            <h1> duguid </h1>
          </div>
          <img
            src="public/duguid.gif"
            className={`col-start-5 col-span-3 row-span-2 w-full`}
          />
          <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 text-xs`}>
            <p> the final project of the Hack Reactor bootcamp. </p>
            <p>
              this project saw me and 4 other engineers meet with a "client" to discuss a revamp of their construction company&apos;s website.
              we were given a list of requirements that we had to meet in terms of functionality and basic styling guidelines, but we had
              full control over any and all methods we used to achieve said requirements.
            </p>
            <p> the site was created with Next.js and styled using a combination of plain CSS and Tailwind. </p>
            <p>
              we used a PostgreSQL database to store and update user and company data and handled authentication with Auth0, bootstrapped by an Express server. the site was deployed on AWS.
            </p>
            <p> and we presented it in front of the whole class. it went great. </p>
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