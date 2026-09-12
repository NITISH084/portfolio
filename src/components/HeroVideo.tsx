const HeroVideo = () => {
  return (
    <div className="w-full h-50 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      >
        <source src="/moving_clouds_in_mountains.mp4"
                type="video/mp4" />
      </video>
    </div>
  );
}

export default HeroVideo;
