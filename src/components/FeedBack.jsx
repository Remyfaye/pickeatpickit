import { feedbackData } from "@/constants";
import Image from "next/image";
import React from "react";

const FeedBack = () => {
  return (
    <section className="p-5 lg:px-32 mt-10">
      <h1 className="text-center mb-5 lg:text-3xl">What people are saying</h1>

      <div className="lg:grid  gap-3 grid-cols-4">
        {feedbackData?.map((item) => (
          <>
            <div className="border pb-3 lg:h-[15rem] custom-scrollbar shadow-md overflow-y-auto rounded-lg my-3 p-3">
              <div className="flex  gap-3">
                <Image
                  className=" rounded-full object-cover h-[2rem] w-[2rem]"
                  src={item.image}
                  alt="img"
                  width={100}
                  height={100}
                  // layout="fill"
                  // objectFit="cover"
                />
                <div>
                  <h2>{item.name}</h2>
                  <p className="text-black">{item.bio}</p>
                </div>
              </div>

              <p className="my-3 text-black">{item.text}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
