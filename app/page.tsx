import Image from "next/image";
import FooterCopyright from "./components/FooterCopyright";
import { NavLink } from "./components/NavLink";
import { BriefcaseBusiness } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-96 bg-blue-300 p-10 gap-7">
        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-8">
            {/* Profile block */}
            <div className="flex flex-col items-center">
              <Image
                src="https://placehold.co/250x250"
                alt="Profile"
                width={250}
                height={250}
                unoptimized
                className="rounded-full mb-4"
              />
              <h1 className="text-3xl text-center font-bold">
                Lavani Dindial
              </h1>
              <h2 className="text-lg text-center text-muted-foreground mt-1">
                Public Health Major - GWU
              </h2>
            </div>

            {/* Nav block */}
            <nav className="flex flex-col items-center gap-3">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>

          {/* Footer */}
          <footer className="flex flex-col">
            <FooterCopyright />
          </footer>
        </div>
      </aside>

      {/* Hero Section */}
      <div className="ml-96 flex flex-1">
        <main className="flex w-full items-center bg-red-300 p-10">
          <div className="grid w-full items-center gap-8 grid-cols-[1fr_2fr]">
            {/* Text */}
            <div className="flex flex-col items-start gap-5">
              <h1 className="max-w-[16ch] text-5xl font-bold leading-tight">
                Lorem ipsum dolor sit.
              </h1>
              <h2 className="max-w-prose text-base text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.
              </h2>
              <button className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-white">
                View Portfolio
                <BriefcaseBusiness className="h-4 w-4"/>
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/250x250"
                alt="Profile"
                width={250}
                height={250}
                unoptimized
                className="rounded-xl"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
