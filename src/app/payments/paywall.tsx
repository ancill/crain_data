import Image from "next/image";

export const Paywall = () => {
  return (
    <>
      <div className="absolute bottom-[390px] left-0 z-20 h-1/4 w-full bg-gradient-to-b from-transparent to-white"></div>
      <div className="absolute bottom-0 z-10 ">
        <Image
          src={"/paywall.png"}
          alt={""}
          height={160}
          width={1200}
          className="mb-2"
        />
      </div>
    </>
  );
};
