import { PowerGlitch } from "powerglitch";

export default function Resume() {
  const hoverGlitchOptions: object = {
    playMode: 'hover',
    timing: { duration: 1000 },
  }

  PowerGlitch.glitch('.hover-glitch', hoverGlitchOptions);

  const mainSectionStyle = `
    w-full h-full bg-radial from-black-900 to-black-930 rounded-lg flex flex-col gap-y-6 md:grid grid-cols-8 grid-rows-4 gap-4 p-6 md:p-18 font-main overflow-scroll scrollbar-hidden
  `;

  const companyNamesColOne = [`working for you!`, 'Air A Med', `Physician's Primary Care`];
  const companyNamesColTwo = ['Lee County EMS', 'Ambitrans', 'Home Depot'];

  const jobDescriptionColOne = [
    `i'm always seeking new opportunities to expand my skillset and grow as an engineer. i don't have a traditional background but i'm passionate and want to work alongside similarly driven people. i want to build something that means something. you can download my resume above and find my contact information there. thank you for having a look at this portfolio!`,

    `began as order entry in the warehouse, then transitioned into an office role once the warehouse moved to Kansas City.
    i continued with order entry and began working with the graphic design team to develop company marketing strategies, leveraging media created using the Adobe Suite. among these other responsibilities, i also work with our industrial printer, recreating customer logos in Adobe Illustrator and later printing those logos on vinyl sheets before they are sent to the warehouse team in Kansas City. these logos are later used on customer ordered products. finally, i verify and process customer invoices using Quickbooks, making sure they are correct and adhere to each customer's requirements.`,

    `i worked as a front desk receptionist, checking in patients and creating appointments for follow-up visits. i effectively handled sensitive patient information, such as medical records and insurance information, making sure to maintain patient privacy. lastly, i assisted with various office tasks, such as filing of paperwork and organization of patient tickets for the following day before closing.`,
  ];
  const jobDescriptionColTwo = [
    `i am proud to have worked as an EMT for Lee County EMS, serving alongside a paramedic on ALS ambulances or another EMT on BLS ambulances. i perfomed different tasks, namely, responding in a timely manner to 911 calls and providing excellent patient care alongside my partner. during and after patient contact, i effectively recorded patient information and reported on events during the call, sharing information with hospital staff as required for quick and easy patient transfer. i also maintained a clean and orderly truck and station, replenishing supplies and cleaning as needed.`,
    ``,
    ``
  ];

  const jobDatesColOne = [`[ hopefully soon! ]`, `[ 2024 - Present ]`, `[ 2023 - 2024 ]`];
  const jobDatesColTwo = [`[ 2019 - 2021 ]`, `[ 2018 - 2019 ]`, `[ 2018 ]`];

  const jobItemStyleColOne = `w-full flex flex-col gap-y-6 row-start-2 col-start-1 col-span-3 md:ml-18`;
  const jobItemStyleColTwo = `w-full flex flex-col gap-y-6 row-start-2 col-start-5 col-span-3`;

  return (
    <>
      <div className={mainSectionStyle}>
        <div className='col-span-3 flex flex-row items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            xmlSpace="preserve"
            className="w-6 rotate-45"
          >
            <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
          </svg>
          <div className="flex flex-row">
            <h1 className="ml-6 md:ml-10"> resume </h1>
            <a
              className="text-xs text-blorange hover-glitch place-self-end"
              href="public/Yari Torres Nicola Resume.pdf"
              rel="noreferrer"
              target="_blank"
            >
              {`[ download ]`}
            </a>
          </div>
        </div>
        <div
          className={`${jobItemStyleColOne}`}
        >
          { companyNamesColOne.map((company, key) =>
            <div
              key={key}
              className={`flex flex-col gap-y-3 select-none`}
            >
              <div
                className={`
                  w-full hover:cursor-pointer hover-glitch
                `}
              >
                <h2 className={`text-blorange text-[24px]`}>{company}</h2 >
              </div>
              <p className={`text-sm`}>{jobDescriptionColOne[key]}</p>
              <p className={`text-blorange text-xs flex justify-end`}>{jobDatesColOne[key]}</p>
            </div>
          )}
        </div>

        <div
          className={`${jobItemStyleColTwo}`}
        >
          { companyNamesColTwo.map((company, key) =>
            <div
              key={key}
              className={`flex flex-col gap-y-3 select-none`}
            >
              <div
                className={`
                  w-full hover:cursor-pointer hover-glitch
                `}
              >
                <h2 className={`text-blorange text-[24px]`}>{company}</h2 >
              </div>
              <p className={`text-sm`}>{jobDescriptionColTwo[key]}</p>
              <p className={`text-blorange text-xs flex justify-end`}>{jobDatesColTwo[key]}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
