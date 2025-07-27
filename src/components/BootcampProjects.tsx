const bootcampProjectItems = ['atelier', 'duguid construction'];
const bootcampProjectBlurbs = [
  'mock e-commerce site in the early days of my bootcamp', 'final project to create a full-scale app for a mock construction company'
];
const bootcampProjectDates = ['2021', '2021'];
const bootcampProjectTech = [`[ react, next.js, vercel, tailwindCSS ]`, `[ react, next.js, vercel, tailwindCSS ]`];
const projectItemStyle = `flex flex-col w-full gap-y-3 font-main`;

type BootcampProjectsProps = {
  setActiveBootcampPhotoList: (index: number) => void,
}

export default function BootcampProjects (props: BootcampProjectsProps) {
  return (
    <div className={`col-span-3 col-start-4 font-main`}>
      <div
        className={`${projectItemStyle}`}
      >
        { bootcampProjectItems.map((item, key) =>
          <div
            key={key}
            className={`group hover:cursor-pointer`}
            onMouseEnter={() => { props.setActiveBootcampPhotoList(key) }}
            onMouseLeave={() => { props.setActiveBootcampPhotoList(-1) }}
          >
            <div
              className={`
                flex flex-row gap-x-2 items-center mb-1 group-hover:border-white group-hover:border-solid group-hover:border-b-1
              `}
            >
              <h4 className={`text-sm `}>{item}</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 300"
                xmlSpace="preserve"
                className="w-2 h-2"
              >
                <path className="fill-blorange" d="M.02 0v39.49h229.91L0 269.42 30.58 300 260.51 70.07v229.91H300V0z"/>
              </svg>
            </div>
            <p className={`text-xs`}>{bootcampProjectBlurbs[key]}</p>
            <p className={`text-[10px]`}>{bootcampProjectTech[key]}</p>
            <p className={`text-[10px]`}>{bootcampProjectDates[key]}</p>
          </div>
        )}
      </div>
    </div>
  )
}