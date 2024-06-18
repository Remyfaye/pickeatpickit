import Image from "next/image";
import React from "react";
import FeaturedResturants from "./FeaturedResturants";
import FaQ from "./FaQ";
import FeedBack from "./FeedBack";
import GetTheApp from "./GetTheApp";

const Landing = () => {
  return (
    <>
      <div className="">
        <Image
          className="mt-10 lg:hidden  object-cover"
          src="/frame1.png"
          alt="img"
          width={500}
          height={500}
          // layout="fill"
          // objectFit="cover"
        />
      </div>
      <section className="mb-5 p-5 lg:flex mt-20 lg:mt-32 lg:px-32 gap-7 items-center">
        <div className="lg:w-[50%]">
          <h1 className="capitalize text-2xl font-bold lg:text-4xl text-center mx-auto">
            {" "}
            trustworthy, seamless delivery experience{" "}
          </h1>

          {/* text */}
          <div className="mt-5">
            {/* option 1 */}
            <div className="border-b pb-4 my-5 mt-8 flex  gap-3">
              <p className="text-3xl font-bold text-emerald-100">01</p>
              <div>
                <h1>Time-Saving</h1>
                <p>
                  Whether you're craving a delicious meal or need to send a
                  last-minute package, PickEatPickIt saves you time with its
                  efficient delivery services.
                </p>
              </div>
            </div>

            {/* option 2 */}
            <div className="border-b pb-3 my-5 mt-5 flex gap-3">
              <p className="text-3xl font-bold text-emerald-100">02</p>
              <div>
                <h1>Convenience</h1>
                <p>
                  Enjoy the convenience of ordering food or sending packages
                  from the comfort of your home or office, without the hassle of
                  long wait times or tedious logistics.
                </p>
              </div>
            </div>

            {/* option 3 */}
            <div className="border-b pb-3 my-5 mt-5 flex gap-3">
              <p className="text-3xl font-bold text-emerald-100">03</p>
              <div>
                <h1>Peace of mind</h1>
                <p>
                  Track your orders and packages in real-time, knowing that our
                  reliable partners are committed to delivering your items
                  safely and securely.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            className="hidden lg:flex  object-cover"
            src="/frame1.png"
            alt="img"
            width={500}
            height={500}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
      </section>

      <Image
        className="lg:px-32 hidden lg:flex object-cover"
        src="/feature.png"
        alt="img"
        width={2000}
        height={2000}
        // layout="fill"
        // objectFit="cover"
      />
      <Image
        className="lg:px-32 lg:hidden object-cover"
        src="/mf1.png"
        alt="img"
        width={2000}
        height={2000}
        // layout="fill"
        // objectFit="cover"
      />

      {/* how it works */}
      <Image
        className="lg:px-32 mt-3 object-cover hidden lg:flex"
        src="/hiw.png"
        alt="img"
        width={2000}
        height={2000}
        // layout="fill"
        // objectFit="cover"
      />
      {/* <Image
        className="lg:px-32 max-w-sm overflow-x-hidden lg:hidden mt-3 object-cover"
        src="/mhiw.png"
        alt="img"
        width={2000}
        height={2000}
        // layout="fill"
        // objectFit="cover"
      /> */}

      {/* our trusted courier */}
      <Image
        className="lg:px-32 mt-10 object-cover"
        src="/otc.png"
        alt="img"
        width={2000}
        height={2000}
        // layout="fill"
        // objectFit="cover"
      />

      <FeaturedResturants />
      <FaQ />
      <FeedBack />
      <GetTheApp />

      {/* <section>
        <div className="lg:flex">
          <Image
            className="  object-cover"
            src="/left1.png"
            alt="img"
            width={500}
            height={500}
            // layout="fill"
            // objectFit="cover"
          />
          <div></div>
        </div>

        <div className="lg:flex">
          <div></div>
          <Image
            className="  object-cover"
            src="/right.png"
            alt="img"
            width={500}
            height={500}
            // layout="fill"
            // objectFit="cover"
          />
        </div>

        <div className="lg:flex">
          <Image
            className="  object-cover"
            src="/left2.png"
            alt="img"
            width={500}
            height={500}
            // layout="fill"
            // objectFit="cover"
          />
          <div></div>
        </div>
      </section> */}
    </>
  );
};

export default Landing;
