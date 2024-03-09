import Image from 'next/image';

function InvestmentSection() {
  return (
    <div className="relative h-[100%]">
      <div>
        <div className="border border-t-2 border-[var(--bg-background-color-1)] rotate-90 absolute rounded-full -top-4 left-[50%]  w-20 -translate-x-[50%]"></div>
        <Image
          className=" absolute -top-10 left-[50%] rounded-full -translate-x-[50%] translate-y-16"
          src="/transitionflower.jpg"
          alt="Yoga-1"
          width={30}
          height={30}
        />
      </div>
      <div className=" flex flex-col md:flex-row h-[100%] items-center justify-center md:justify-evenly gap-8">
        <h1 className="text-4xl text-center pt-10 md:pt-0 ">
          Investiere in deine Gesundheit
        </h1>
        <div className="md:h-[80%] h-[50%] ">
          <Image
            className="rounded-lg object-cover h-[100%] w-[100%]"
            src="/flow.png"
            alt="flow"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestmentSection;
