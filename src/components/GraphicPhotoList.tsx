export default function GraphicPhotoList(props: {activeGraphicPhotoList: number}) {
  const photoList = [
    '/RATWARE_CORP.jpeg', '/psychic_ops.jpeg', '/orange_love.jpeg',
    '/the_dreamer.jpeg', '/christmas_party.jpeg'
  ];

  return (
    <div className={`absolute w-1/6 h-1/6 right-[5%] top-[10%] overflow-hidden`}>
      { photoList.map((photo, key) =>
        <div
          key={key}
          className={`h-full ${ key === props.activeGraphicPhotoList ? '' : 'hidden' }`}
        >
          <img className={`object-cover w-full h-full`} src={photo}></img>
        </div>
      )}
    </div>
  )
}