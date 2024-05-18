import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className=" p-5 lg:px-20 font-[inter]">
      <div className="mt-10 gap-7 grid grid-cols-2 border-b-[1px] lg:flex  lg:gap-5 pb-5 mb-5  justify-between">
        <div className="lg:w-[20%] ">
          <Image
            className="  "
            src="/logo2.png"
            alt="img"
            width={300}
            height={300}
            // layout="fill"
            // objectFit="cover"
          />
          <p className="font-thin text-gray-400 my-3">
            2 Chome-3-4 Shibuya, Shibuya City, Tokyo 150-0002, Japan. +813 055
            331700
          </p>
          <div></div>
        </div>

        <div>
          <h2>Nav link 1</h2>
          <ul className="font-thin text-gray-400 my-3">
            <li className="mb-1">Home</li>
            <li className="mb-1">Food Delivery</li>
            <li className="mb-1">Customer</li>
            <li className="mb-1">Track order</li>
            <li className="mb-1">Account</li>
          </ul>
        </div>

        <div>
          <h2>Nav link 2</h2>
          <ul className="font-thin text-gray-400 my-3">
            <li className="mb-1">About Us</li>
            <li className="mb-1">FAQs</li>
            <li className="mb-1">Terms of service</li>
            <li className="mb-1">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h2>App Downlad Links</h2>
          <ul className="font-thin text-gray-400 my-3">
            <li className="mb-1">Apple App Store</li>
            <li className="mb-1">Google Play Store</li>
          </ul>
        </div>

        <div>
          <h2>Support</h2>
          <ul className="font-thin text-gray-400 my-3">
            <li className="mb-1">Support Center</li>
            <li className="mb-1">Contact Us</li>
          </ul>
        </div>

        <div>
          <h2>Resources</h2>
          <ul className="  text-gray-400 my-3">
            <li className="mb-1">Prices </li>
            <li className="mb-1">Tax</li>
          </ul>
        </div>
      </div>

      <Image
        className=" border-b-[1px] pb-5 mb-5 "
        src="/visa.png"
        alt="img"
        width={1500}
        height={1500}
        // layout="fill"
        // objectFit="cover"
      />

      <div className="border-b-[1px] lg:flex gap-5 pb-5 mb-5  justify-between text-sm">
        <div className="flex gap-3 text-gray-500">
          <p>Condition of sales </p>
          <p>Information on cookies </p>
        </div>

        <div className="flex gap-3 text-gray-500">
          <p>Copyright @ 2024 PickEatPickIT, Shibuya, VAT number 01791300484</p>
          <p>Powered by PickEatPickIT.agency </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
