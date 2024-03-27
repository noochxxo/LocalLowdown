import Image from "next/image"

import { AspectRatio } from "../ui/aspect-ratio"

const WelcomeBanner = () => {
  return (
    <div>
      <AspectRatio ratio={16 / 9}>
        <Image
          src={`/assets/images/LocalLowdown_header.webp`}
          alt="LocalLowdown"
          
        />
      </AspectRatio>
    </div>
  )
}

export default WelcomeBanner