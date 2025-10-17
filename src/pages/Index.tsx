import Work from '../components/Work';
import FeaturedWork from '../components/FeaturedWork';

function Index() {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col gap-y-[8px] overflow-y-scroll scrollbar-hidden`}
      >
        <FeaturedWork />
        <Work />
      </div>
    </>
  );
}

export default Index;
