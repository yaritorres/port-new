export default function PersonalPhotoList(props: {activePersonalPhotoList: number}) {
  const photoList = ['/portfolio-v1.png', '/codeAndTell.png'];

  return (
    <div className={`absolute w-1/6 h-1/6 right-[5%] top-[10%] overflow-hidden`}>
      { photoList.map((photo, key) =>
        <div
          key={key}
          className={`h-full ${ key === props.activePersonalPhotoList ? '' : 'hidden' }`}
        >
          <img className={`object-cover w-full h-full`} src={photo}></img>
        </div>
      )}
    </div>
  )
}