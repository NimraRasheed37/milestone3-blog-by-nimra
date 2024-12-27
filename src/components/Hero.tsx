import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[40vh] sm:h-[60vh] lg:h-screen w-full max-h-screen">
      {/* Background Image */}
      <Image
        src="/img/bg/bg2.jpg" 
        alt="Books Background"
        fill 
        className="object-cover -z-10"
        quality={75} 
      />

      {/* Quote Section */}
      <div className="absolute inset-0 flex items-center justify-center px-4"> 
        <div className="bg-[#493638] bg-opacity-70 text-center p-8 rounded-lg shadow-lg max-w-md sm:max-w-lg lg:max-w-xl">
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#ffd791]">
            {`"A room without books is like a body without a soul."`}
          </p>
          <span className="block mt-4 text-sm sm:text-base text-[#e4b1ab]">
            {`- Marcus Tullius Cicero`}
          </span>
        </div>
      </div>
    </div>
  );
}
