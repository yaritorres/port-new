export default function BootcampPhotoList(props: {activeBootcampPhotoList: number}) {
  const photoList = ['/royalepage.gif', '/duguid.gif'];

  return (
    <div className={`absolute w-1/6 h-1/6 right-[5%] top-[10%] overflow-hidden`}>
      { photoList.map((photo, key) =>
        <div
          key={key}
          className={`h-full ${ key === props.activeBootcampPhotoList ? '' : 'hidden' }`}
        >
          <img className={`object-cover w-full h-full`} src={photo}></img>
        </div>
      )}
    </div>
  )
}