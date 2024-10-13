import React from "react";
import border from "../../../public/images/border.png";
import pic from "../../../public/images/pic.png";
import sunny from "../../../public/images/sunny.png";
import Image from "next/image";
import { Facebook } from "../../../public/images/icons/Icon";
import { Twitter } from "../../../public/images/icons/Icon";

const Hero = () => {
  return (
    <>
      <section className="lg:py-32 pt-10">
        <div className="md:container mx-auto px-5 ">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-20 gap-10">
            <div className=" lg:col-span-7 col-span-1">
              <h6 className="lg:text-2xl text-xl font-semibold font-[poppin] lg:text-start text-center">
                Hi I am
              </h6>
              <h3 className="font-semibold lg:text-[32px] py-4 text-2xl text-[#FD6F00] capitalize lg:text-start text-center">
                sana ullah
              </h3>
              <h1 className="lg:text-[70px] md:text-5xl text-5xl lg:text-start text-center py-4  font-bold text-black capitalize">
                frontEnd
              </h1>
              <h1 className="lg:text-[70px] text-6xl text-center py-4 font-bold text-black capitalize">
                developer
              </h1>
              <p className="py-10 text-xl font-normal lg:text-start text-center">
                As a dedicated front-end developer, I craft responsive,
                user-friendly interfaces with a keen eye for design. I
                specialize in transforming ideas into dynamic web experiences
                that engage users and ensure seamless interaction across all
                devices.
              </p>
              <div className="flex lg:justify-start justify-center">
                <button className="mt-4 bg-[#FD6F00] text-white text-[21px] font-normal  lg:w-[188px] w-[120px] lg:h-[52px] h-[40px] rounded-sm hover:bg-[#fd2a00] ease-in-out duration-500 transition-transform">
                  Hire Me
                </button>
              </div>
            </div>
            <div className=" lg:col-span-5 col-span-1">
              <div className="relative">
                <Image
                  src={border}
                  alt="border"
                  width={545}
                  height={545}
                  className="object-cover relative mx-auto"
                />
                <div className="pt-9 flex justify-center items-center gap-x-4">
                  <Facebook className="w-[32px] h-[32px] cursor-pointer" />
                  <Twitter className="w-[32px] h-[32px] cursor-pointer" />
                  <Facebook className="w-[32px] h-[32px] cursor-pointer" />
                  <Twitter className="w-[32px] h-[32px] cursor-pointer" />
                </div>

                {/* <Image
                  src={sunny}
                  alt="border"
                  width={345}
                  height={345}
                  className="object-cover absolute md:-mt-[500px] -mt-[250px] mx-auto"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
