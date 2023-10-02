import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
   
    <div className="relative bg-primary/[.03] pt-[120px] pb-[100px] lg:pt-[150px]">
      
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              Who we are?
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">
              With a promise to deliver tech that helps our clients to drive business and growth, we at InfoBuzz Technologies are your trusted Technological Solutions and Products Partners. By combining our deep technical expertise and industry experience, we strive to offer digital solutions and tailor made SAAS products for businesses. We believe in equipping our clients with the answers for what’s next in Tech, beforehand. Our proven solutions offer a unique competitive advantage for our clients and empower them to envision beyond.
              </p>
              {/* <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href=""
                    className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                   Know More
                  </a>
                </li>

              </ul> */}
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://self-website-nine.vercel.app/img/1.png"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="w-full h-10" />
      </a>
    </>
  );
};

export default Hero;







