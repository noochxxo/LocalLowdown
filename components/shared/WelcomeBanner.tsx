import Image from "next/image";

import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import Link from "next/link";

const WelcomeBanner = () => {
  return (
    <div>
      <AspectRatio ratio={16 / 9} >
        <Image
          src={`/assets/images/LocalLowdown_header.webp`}
          alt="A vibrant community event in a small town setting, featuring a local market with stalls, people engaging in conversations, and a community garden, set against a backdrop of a purple-hued sunset sky, symbolizing local engagement and neighborhood connection."
          width={1792}
          height={1024}
          
        />
        <div
        className="
          absolute
          top-0
          w-full
          h-[102%]
          bg-gradient-to-b
          from-primary
          via-foreground
          to-primary
          opacity-20
        "
      ></div>
      </AspectRatio>
      
      <div
        className="
          absolute
          top-0
          w-full
          text-center
          mt-16
          md:mt-48
          lg:mt-64
        ">
        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-black
            md:text-6xl
            lg:text-8xl
          ">
          LocalLowdown
        </h1>
        <p
          className="
            mt-2
            text-lg
            leading-8
            text-secondary
          ">
          Bringing commnities together
        </p>

        <div className="mt-3 flex items-center justify-center gap-x-6">
          <Button>
            <Link href='/onboarding'>
              Login/Signup
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
