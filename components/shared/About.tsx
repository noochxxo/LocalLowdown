import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// The route will determine which styles to use
// /welcome use styles for LocalLowdown about
// /community/[community-name] use styles for community about

const cardData = [
  {
    title: "About LocalLowdown",
    content: "Welcome to LocalLowdown – your digital hub for all things local! Discover the heart of your community through our platform that connects you to the latest events, local news, and vibrant discussions in your town. From community gatherings to business directories, LocalLowdown brings neighbors together, fostering a stronger, more connected neighborhood experience. Join us in celebrating the unique spirit of your local area!"
  },
  {
    title: "Mission",
    content: "LocalLowdown’s mission is to strengthen community bonds by providing a dynamic and user-friendly platform where small towns and neighborhoods can connect, share, and grow together. We're dedicated to enriching local experiences, promoting engagement, and celebrating the unique character of every community."
  },
  {
    title: " Values",
    content: "At LocalLowdown, our values are rooted in community, connection, and inclusivity. We believe in empowering local voices, fostering collaborative spaces, and nurturing a sense of belonging for all. Our commitment to authenticity, respect, and sustainability guides us in building a platform that not only serves but also enriches the communities we touch."
  },
]

const About = () => {
  return (
    <section className="mt-5">
      {
        cardData.map((card) => (
          <Card
        className="
          mt-3
          w-96
          mx-auto
        "
      >
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{card.content}</p>
        </CardContent>
      </Card>
        ))
      }

    </section>
  );
};

export default About;
