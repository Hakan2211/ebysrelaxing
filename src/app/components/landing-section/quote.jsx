import Image from 'next/image';

function Quote() {
  return (
    <div className="relative">
      <div>
        <div className="border border-t-2 border-secondary rotate-90 absolute rounded-full -top-10 left-[50%]  w-20 -translate-x-[50%]"></div>
        <Image
          className=" absolute -top-10 left-[50%] rounded-full -translate-x-[50%] translate-y-5"
          src="/transitionflower.jpg"
          alt="Yoga-1"
          width={30}
          height={30}
        />
      </div>
      <blockquote className="p-4 h-72 ">
        <p className="text-5xl mt-16 text-gray-500">
          &#8220;Mut steht am Anfang des Handelns, Glück am Ende.&#8221;
        </p>

        <cite className="text-xl text-gray-400">
          Demokrit, griechischer Philosopoph (460v.Chr. - 371 v.Chr.)
        </cite>
      </blockquote>
    </div>
  );
}

export default Quote;
