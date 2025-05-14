import React, { useEffect, useRef } from "react";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import arrowRight2 from "../../assets/icons/arrow-right-2.svg";

const Footer = () => {
  const inputRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && inputRef.current) {
          inputRef.current.focus();
        }
      },
      {
        threshold: 0.5, // Adjust based on when you want to trigger focus
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      {" "}
      <footer
        ref={footerRef}
        class="bg-[#FFEB33] h- font-helvetica-light text-black font-extrabold"
      >
        <div class=" mx-auto mb-10 lg:mb-16 px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div class="space-y-1">
            <p>100 mL bottle</p>
            <p>Refill 500 mL</p>
            <p>Jump Rope Sweat</p>
            <p>Water Bottle</p>
            <p>Wet T-Shirt</p>
            <p>Vazzi Slide</p>
            <p>Cute Bracelet</p>
          </div>

          <div class="space-y-1 font-bold">
            <p>About</p>
            <p>Delivery & Returns</p>
            <p>Help & Questions</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
            <p>Cookie preferences</p>
          </div>

          <div className="hidden lg:block">
            <p class=" font-bold">
              Sign up for our newsletter for
              <br />a dose of fun in your inbox.
            </p>
            <form class="mt-4 flex items-center border-b border-black w-full max-w-sm">
              <input
                ref={inputRef}
                type="email"
                placeholder="Enter email address"
                class="w-full bg-transparent focus:outline-none py-1 placeholder-[#a6a6a6] text-black"
              />
              <button type="submit" class="ml-2 text-black">
                <img src={arrowRight2} className="h-8" alt="arrowRight" />
              </button>
            </form>
          </div>

          <div class="hidden lg:block text-right text-sm font-bold">
            <p>
              Thrifted Site
              <br />
              is developed by
            </p>
            <h1 class="text-2xl font-bold mt-2">Avnish</h1>
          </div>
        </div>
        <div class=" mx-auto  px-4 py-6  gap-10">
          <div className=" lg:hidden">
            <p class=" font-bold">
              Sign up for our newsletter for
              <br />a dose of fun in your inbox.
            </p>
            <form class="mt-4 flex items-center border-b border-black w-full ">
              <input
                type="email"
                placeholder="Enter Email address"
                class="w-full bg-transparent focus:outline-none py-1 placeholder-[#a6a6a6]  text-black"
              />
              <button type="submit" class="ml-2 text-black">
                <img src={arrowRight2} className="h-8" alt="arrowRight" />
              </button>
            </form>
          </div>

          <div class="flex justify-between items-center border-b pb-1 border-black lg:hidden pt-5 font-bold">
            <p>
              Thrifted Site
              <br />
              is developed by
            </p>
            <h1 class="text-5xl font-bold mt-2">Avnish</h1>
          </div>

          <p class=" lg:hidden pt-5  max-w-md ">
            Vazzi is located in Tiohtiá:ke/Montreal, on the traditional
            territory of the Kanien'kehá:ka. We pay tribute to the Elders of
            yesterday and today.
          </p>
        </div>

        <div class="flex justify-center lg:hidden gap-4 ">
          <img src={instagram} className="h-8" alt="instagram" />
          <img src={facebook} className="h-8" alt="facebook" />
          <img src={youtube} className="h-8" alt="youtube" />
        </div>

        <div class="lg:text-sm items-end mx-auto px-4 py-6 grid grid-cols-2 lg:grid-cols-4  lg:gap-10">
          <p className="text-sm">2025 © Thrifted - Avnish</p>

          <div class="hidden lg:flex gap-4 ">
            <img src={instagram} className="h-8" alt="instagram" />
            <img src={facebook} className="h-8" alt="facebook" />
            <img src={youtube} className="h-8" alt="youtube" />
          </div>

          <p class="hidden lg:block text-xs max-w-md ">
            Vazzi is located in Tiohtiá:ke/Montreal, on the traditional
            territory of the Kanien'kehá:ka. We pay tribute to the Elders of
            yesterday and today.
          </p>

          <div class="justify-end flex gap-10 ">
            <p>Credits</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
