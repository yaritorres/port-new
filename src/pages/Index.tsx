import Work from '../components/Work';
import FeaturedWork from '../components/FeaturedWork';
import Contact from '../components/Contact';
import SideNav from '../custom-ui/SideNav';

function Index() {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col gap-y-[8px] overflow-y-scroll scrollbar-hidden`}
      >
        <FeaturedWork />
        <Work />
        <Contact />
      </div>
      <SideNav />
    </>
  );
}

export default Index;
