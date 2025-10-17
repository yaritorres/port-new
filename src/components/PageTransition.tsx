import { PowerGlitch } from 'powerglitch'
import { useEffect } from 'react';
import BottomCorners from './utility/BottomCorners';
import TopCorners from './utility/TopCorners';

type PageTransitionProps = {
  inView: boolean,
  setInView: (inView: boolean) => void,
}

export default function PageTransition(props: PageTransitionProps) {
  const mainSectionStyle = `
    w-full h-full flex justify-center items-center bg-radial from-black-900 to-black-930 rounded-lg p-6 font-main
    animate-fadeOut ${ props.inView ? '' : 'hidden' }
  `;

  const transitionTextPool: Array<string> = [
    'generating visual stimuli...',
    'extracting neural data from user...',
    'injecting falsified data...',
    'contacting RATWARE CORPORATION cybersecurity division...'
  ];

  const randomlyPickedText = transitionTextPool[Math.floor(Math.random() * transitionTextPool.length)]

  useEffect(() => {
    PowerGlitch.glitch('.glitched', {playMode: 'always'});
  }, [props.setInView])

  return (
    <>
      <div
        className={`
          absolute w-screen h-screen bg-black-950 rounded-lg inset-0 py-[48px] px-[12px] z-50 overflow-hidden text-black-50
          ${ props.inView ? '' : 'hidden' }
        `}
      >
        <div
          className={`
            absolute bg-fixed bg-auto inset-[-50%_0%_0%_-50%] w-[200%] h-[200vh] pointer-events-none mix-blend-normal
            bg-[url(/grain_background.png)] z-10 animate-grain
          `}
        />
        <div className={mainSectionStyle} onAnimationEnd={() => { props.setInView(false) }}>
          <p className="text-blorange"> {`[`} &nbsp; </p>
          <p className="w-content glitched"> {randomlyPickedText} </p>
          <p className="text-blorange"> &nbsp; {`]`} </p>
        </div>
      <TopCorners />
      <BottomCorners />
      </div>
    </>
  );
}
