import TopNav from "../components/c_global/TopNav";
import msiWallpaper from "/images/msi_desktop.png";
import Gallery from "../components/Gallery";
import PreFooter from "../components/c_global/PreFooter";
import Footer from "../components/c_global/Footer";
import ZipAdd from "../components/ZipAdd";
import HomeProductSection from "../components/HomeProductSection";
import QuoteReview from "../components/QuoteReview";

const HomePage = () => {
  return (
    <>
      <TopNav />
      <main className="mb-auto">
        <img
          className="sm:flex justify-center hidden md:inline-flex md:px-48"
          src={msiWallpaper}
        ></img>
        <div className="pt-10"></div>
        <div className="flex flex-row px-24 md:px-48 justify-between">
          <span className="font-bold">New Products</span>
          <a className="text-blue-300 underline text-xs">
            See All New Products
          </a>
        </div>
        <div className="pt-6"></div>
        <div className="md:px-48">
          <Gallery />
        </div>
        <div className="pt-6"></div>
        <ZipAdd />

        <div className="pt-8"></div>
        <HomeProductSection
          bgImg="../public/images/customBuild.png"
          title="Custom Build"
          link="See All Custom Builds"
          productFilter="V6.png"
          category={false}
        />
        <div className="pt-14"></div>
        <HomeProductSection
          bgImg="../public/images/msiLaptops.png"
          title="MSI Laptops"
          link="See All Laptops"
          productFilter="laptop.png"
          category={true}
          categoryList={[
            "MSI GS Series",
            "MSI GT Series",
            "MSI GL Series",
            "MSI GE Series",
          ]}
        />
        <div className="pt-14"></div>
        <HomeProductSection
          bgImg="../public/images/desktops.png"
          title="Desktops"
          link="See All Desktops"
          productFilter="desktop.png"
          category={true}
          categoryList={[
            "MSI Infinite Series",
            "MSI Trident Series",
            "MSI XT Series",
            "MSI Nightblade Series",
          ]}
        />
        <div className="pt-8"></div>
        <HomeProductSection
          bgImg="../public/images/gamingMonitors.png"
          title="Gaming Monitors"
          link="See All Monitors"
          productFilter="monitor.png"
          category={false}
        />
        <div className="pt-6"></div>
        <QuoteReview />
        <PreFooter />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;