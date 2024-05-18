import Image from "next/image";

const GetTheApp = () => {
  return (
    <section className="relative bg-[#228B22] text-white lg:flex p-5 lg:px-32 lg:h-[55vh]">
      <div className="mt-10 text-center lg:w-[65%]">
        <h1>Get the PickEatPickIt App</h1>
        <p className="my-5">
          Download the PickEatPickIT app for easy access to delicious food and
          hassle-free deliveries. With our user-friendly app, you can browse
          restaurants, place orders, track deliveries, and more, all from the
          palm of your hand. Available for iOS and Android devices
        </p>

        <button className="bg-white mt-5 rounded-full text-black py-2 px-3">
          Download Now
        </button>
      </div>
      <Image
        className="absolute left-[50%] bottom-[-10px] object-cover "
        src="/curve.png"
        alt="img"
        width={300}
        height={300}
        // layout="fill"
        // objectFit="cover"
      />
      <Image
        className="mx-auto mt-5  object-cover "
        src="/iphone.png"
        alt="img"
        width={300}
        height={300}
        // layout="fill"
        // objectFit="cover"
      />
    </section>
  );
};

export default GetTheApp;
