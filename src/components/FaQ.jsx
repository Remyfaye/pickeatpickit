const FaQ = () => {
  return (
    <section className="text-white bg-green-500 p-5 lg:px-32 lg:mt-10">
      <h1>Frequently asked questions</h1>

      <div className="flex py-5 border-b-[1px] justify-between items-center">
        <h3 className="text-white font-extralight">
          01 Lorem ipsum dolor sit amet consectetur.{" "}
        </h3>

        <p className="bg-white text-black py-1/2 px-2">+</p>
      </div>

      <div className="flex py-5 justify-between items-center border-b-[1px] ">
        <h3 className="text-white">
          02 Lorem ipsum dolor sit amet consectetur.{" "}
        </h3>

        <p className="bg-white text-black py-1/2 px-2">+</p>
      </div>

      <div className="flex justify-between items-center py-5 border-b-[1px] ">
        <h3 className="text-white">
          03 Lorem ipsum dolor sit amet consectetur.{" "}
        </h3>

        <p className="bg-white text-black py-1/2 px-2">+</p>
      </div>
    </section>
  );
};

export default FaQ;
