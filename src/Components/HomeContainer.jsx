import React from "react";
import Livraison from "../image/livraison.png";
import herobg from '../image/herobg.png'

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full  "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold ">
            Livraison de fruit
          </p>
          <div className="w-8 h-8  bg-white rounded-full overflow-hidden drop-shadow-xl scroll-p-[24rem] ">
            <img
              src={Livraison}
              alt="livraison"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Livraison à{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Domicile Mom dé dafa nekh{" "}
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae modi
          dignissimos veritatis quasi asperiores.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br md:w-auto
    from-orange-400 
    to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all
    ease-in-out duration-100 "
        >
          Cliquez
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative ">
        <img
          src={herobg}
          className="ml-auto  rounded-lg h-370 w-full lg:w-auto lg:h-650 "
          alt="hero-bg"
        />
        <div className="w-full h-full absolute flex items-center justify-center
        px-32 py-4">
          {/* <div className="w-190 p-2 bg-cardOverlay backdrop-blur-0">
              

          </div> */}
        </div>
      </div>
    </section>
  );
};
export default HomeContainer;
