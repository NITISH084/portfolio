import { LeftNavbar } from "../components/LeftNavbar";
import { RightNavbar } from "../components/RightNavbar";
import ProfileHeader from "../components/ProfileHeader";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-[200px_minmax(0,1fr)_240px]">

      < LeftNavbar />

      <main className="border-x border-zinc-200 dark:border-zinc-800">
          <ProfileHeader />
      </main>

      < RightNavbar />

      </div>
    </div>
  );
}
