import Image from "next/image";
import HeroVideo from "./HeroVideo";

const ProfileHeader = () => {
  return (
    <section className="relative border-b border-zinc-200 dark:border-zinc-800">
      <HeroVideo />

      <div className="relative px-6 pb-8 pt-4">
        <div className="flex items-center gap-6">
          <Image
            priority
            src="/eren.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="-mt-20 h-44 w-44 shrink-0 rounded-full border-4 border-black object-cover"
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-heading">
              Nitish Kumar
            </h2>

            <p className="text-sm font-sans text-zinc-300">
              Curious mind, restless hands, too many ideas.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;