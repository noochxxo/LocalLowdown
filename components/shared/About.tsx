import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "../ui/aspect-ratio";

// The route will determine which styles to use
// /welcome use styles for LocalLowdown about
// /community/[community-name] use styles for community about

const cardData = [
  {
    title: "About LocalLowdown",
    content:
      "Welcome to LocalLowdown – your digital hub for all things local! Discover the heart of your community through our platform that connects you to the latest events, local news, and vibrant discussions in your town. From community gatherings to business directories, LocalLowdown brings neighbors together, fostering a stronger, more connected neighborhood experience. Join us in celebrating the unique spirit of your local area!",
    image: "/assets/images/LocalLowdown_about.webp",
  },
  {
    title: "Mission",
    content:
      "LocalLowdown’s mission is to strengthen community bonds by providing a dynamic and user-friendly platform where small towns and neighborhoods can connect, share, and grow together. We're dedicated to enriching local experiences, promoting engagement, and celebrating the unique character of every community.",
    image: "/assets/images/LocalLowdown_mission.webp",
  },
  {
    title: " Values",
    content:
      "At LocalLowdown, our values are rooted in community, connection, and inclusivity. We believe in empowering local voices, fostering collaborative spaces, and nurturing a sense of belonging for all. Our commitment to authenticity, respect, and sustainability guides us in building a platform that not only serves but also enriches the communities we touch.",
    image: "/assets/images/LocalLowdown_values.webp",
  },
];

const About = () => {
  return (
    <section className="h-full mt-5 flex flex-col items-center md:flex-row md:items-start md:flex-wrap justify-center">
      {cardData.map((card, idx) => (
        <div key={idx}
        className="flex  flex-wrap gap-4 items-center"
        >
          <AspectRatio ratio={16 / 9} className="overflow-hidden mt-4 mx-3 max-w-sm">
            <Image
              src={card.image}
              alt="A vibrant community event in a small town setting, featuring a local market with stalls, people engaging in conversations, and a community garden, set against a backdrop of a purple-hued sunset sky, symbolizing local engagement and neighborhood connection."
              width={1792}
              height={1024}
              className="mx-auto"
            />
          </AspectRatio>
          <Card
            className="
              mx-3
              max-w-sm
            "
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
          
        </div>
      ))}
    </section>
  );
};

export default About;
