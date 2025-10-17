export default function Duguid() {
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
          <h1> duguid </h1>
        </div>
        <img
          src="public/duguid.gif"
          className={`col-start-5 col-span-3 row-span-2 w-full`}
        />
        <div className={`flex flex-col gap-y-3 col-span-4 col-start-5 row-start-3 xl:text-xs`}>
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
    </>
  );
}