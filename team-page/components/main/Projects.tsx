import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center text-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-cyan-500 py-20">
        The Team
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        <ProjectCard
          src="/2.jpg"
          title="D"
          description="In the latter half of 2016, D embarked on a transformative journey that would spark a profound passion for AI bots, paving the way for a committed exploration into the intricacies and within this dynamic and ever-evolving field. This pivotal moment marked the beginning of his journey into the realm of bots, fueling a fervent dedication to uncovering the depths of this dynamic landscape."
        />
        <ProjectCard
          src="/1.jpeg"
          title="DeSigaar"
          description="Meet our dynamic business leader—a force in sales, marketing automation, and growth strategy with 15 years experience. He significantly shaped an award-winning online platform of 500k+ members, excelling in growth strategies and lead generation. A seasoned entrepreneur and COO, his expertise extends to crypto since 2017. Join us on a journey to success through strategic excellence."
        />
        <ProjectCard
          src="/3.png"
          title="El Brosky"
          description="Craig, an experienced developer at ArkiTech, has played a key role in the DeFi sector since 2021. With a vast expertise in web3, blockchain, and crypto, he operated a launch pad and led various blockchain projects to success. Additionally, he managed a trading company, blending market insights, professional chart analysis, as well as advanced technology to innovate in the DeFi sector."
        />
      </div>
      <div className="h-40% w-40% flex flex-col md:flex-row justify-around gap-24 px-10 mt-10">
        <ProjectCard
          src="/5.png"
          title="Nico"
          description="Nico, bringing over seven years of experience in agile software development, ventured into the DeFi space in 2020. By 2022, he furthered his impact in the sector as CTO at MEVFree, where he's been pivotal in developing its ecosystem. Operating from Germany, his blend of technical acumen and strategic foresight is driving forward DeFi innovations and building strong teams."
        />
        <ProjectCard
          src="/4.png"
          title="Profit"
          description="Profit, a polymath, effortlessly navigates diverse creative realms. As a graphic designer, he crafts visually stunning experiences that captivate audiences, pushing creative boundaries. His keen aesthetic sense and mastery elevate his work to artistic brilliance. As a visual effects producer, Profit employs digital magic to breathe life into narratives, consistently leaving viewers in awe."
        />
        
      </div>
    </div>
  );
};

export default Projects;
