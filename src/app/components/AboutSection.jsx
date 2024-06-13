"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>Word</li>
        <li>Excel</li>
        <li>React</li>
        <li>CSS</li>
        <li>Photoshop</li>
        <li>Ableton Live</li>
      </ul>
    ),
  },
  {
    title: "",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Social Media Manager - Mission Bildungschance</li>
        <li>Audio Engineer - Hofa College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Über mich</h2>
          <p className="text-base lg:text-lg">
         

          
Ich möchte gerne eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung beginnen und habe eine große Leidenschaft für die Erstellung interaktiver und responsiver Webanwendungen. Ich habe bereits Erfahrung im Frontend-Bereich mit JavaScript, React, HTML und CSS gesammelt. Nun möchte ich mein Wissen erweitern und mehr über die Backend-Entwicklung und die Programmierung in einem Unternehmensumfeld lernen. Ich lerne schnell und bin stets darauf bedacht, mein Wissen und meine Fähigkeiten zu erweitern. Als Teamplayer freue ich mich darauf, mit anderen zusammenzuarbeiten, um großartige Anwendungen zu entwickeln. Ich bin begeistert von der Möglichkeit, meine Fähigkeiten in einem Ausbildungsbetrieb weiterzuentwickeln und freue mich darauf, mich neuen Herausforderungen zu stellen.







          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Bildung{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
