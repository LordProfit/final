"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "./OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Desk } from "./Desk";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Guardian Features",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <Link href={"/"} className="text-xl font-semibold text-orange-500 ">Check It Out</Link>
      </ul>
    ),
  },
  {
    title: "HoneyPot Features",
    id: "services",
    content: (
      <ul className="pl-2 list-disc">
        <li>1.</li>
        <li>2.</li>
      </ul>
    ),
  },
  {
    title: "BuyBot Features",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>1.</li>
      </ul>
    ),
  },
  {
    title: "ChatMate Features",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>1.</li>
        <li>2.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/desk/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.01} />
      </>
    );
  };
  <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
  <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
    <OrbitControls />
    
  <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
    <Suspense fallback={null}>
      <Model />
      <Environment preset="city" />
    </Suspense>
  </Canvas>
</div>


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  <Desk />
  return (
    <section className="text-white" id="about">
      
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
       
      <Desk />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">What Is <span className='text-secondary-400'>ArkiTech</span>?</h2>
          <p className="text-base lg:text-lg">
            
            Explore the sophisticated functionalities embodied in the ArkiTech 
            Guardian and Honeypot Checker bots. These advanced tools leverage the 
            capabilities of Artificial Intelligence (AI) to elevate the precision of 
            decision-making processes and enhance user experiences. Specifically 
            engineered for Telegram chat management, the ArkiTech Guardian stands as 
            a paragon of secure interactions. It incorporates robust security measures, 
            real-time monitoring, and intelligent threat detection, fortifying online 
            discussion groups against malicious activities. Embrace a heightened level 
            of online security with the ArkiTech Guardian, ensuring the integrity of your 
            discussions in the digital realm.
          </p>
          <div className="flex flex-row justify-start mt-8"s>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Guardian{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              HoneyPot Checker{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("services")}
              active={tab === "services"}
            >
              {" "}
              BuyBot{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              
              ChatMate{" "}
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
