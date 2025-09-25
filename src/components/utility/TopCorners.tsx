export default function TopCorners() {
  return(
    <>
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
    </>
  )
}