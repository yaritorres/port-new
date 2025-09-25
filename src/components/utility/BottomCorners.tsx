export default function BottomCorners() {
  return(
    <>
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
    </>
  )
}