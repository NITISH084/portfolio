import Image from "next/image";

const HeroVideo = () => {
  return (
    <div className="w-full h-52 overflow-hidden">
      <Image 
            priority
            src="/moving_clouds_in_mountains.gif"
            alt="Hero banner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
      />
    </div>
  );
}

export default HeroVideo;
