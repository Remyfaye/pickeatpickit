import Image from "next/image";
import React from "react";

const FeaturedResturants = () => {
  return (
    <section className="p-5 mt-8 lg:px-32 lg:flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-black/80">Savor the flavours:</h1>
      <h1 className="text-3xl text-black/80">
        featured resturants on pickEatPickIt
      </h1>
      <p className="my-3">
        Explore a curated selection of top-rated restaurants offering delectable
        cuisines for every palat
      </p>

      <div className="lg:flex gap-5 mt-5">
        <div className="border rounded-lg">
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <Image
              className="w-full object-cover lg:h-[10rem] h-[13rem]"
              src="/pizza.jpg"
              alt="img"
              width={200}
              height={200}
              // layout="fill"
            />
            <h2>mama mia's pizzeria</h2>
            <p className="text-center">
              A popular Japanese restaurant offering a wide selection of sushi
              rolls, sashimi, and bento boxes.
            </p>
          </div>
        </div>

        <div className="border rounded-lg">
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <Image
              className="w-full object-cover h-[13rem] lg:h-[10rem]"
              src="/sushi.jpg"
              alt="img"
              width={200}
              height={200}
              // layout="fill"
            />
            <h2>sushi house</h2>
            <p className="text-center">
              A popular Japanese restaurant offering a wide selection of sushi
              rolls, sashimi, and bento boxes.
            </p>
          </div>
        </div>

        <div className="border rounded-lg">
          <div className="flex flex-col items-center justify-center gap-3 p-3">
            <Image
              className="w-full object-cover h-[13rem] lg:h-[10rem]"
              src="/burger.jpg"
              alt="img"
              width={200}
              height={200}
              // layout="fill"
            />
            <h2>burger joint</h2>
            <p className="text-center">
              A popular Japanese restaurant offering a wide selection of sushi
              rolls, sashimi, and bento boxes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResturants;
