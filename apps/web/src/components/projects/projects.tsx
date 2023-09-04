"use client";
import { Box, Grid, styled, Typography } from "@mui/material";
import { SiTypescript, SiRust, SiReact, SiNodedotjs, SiFirebase, SiElectron } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IProjectInfo, ProjectStatus } from "../../types/project";
import { Button } from "../dumb/button";

// I hate this btw 😅
const TypescriptIcon = ({ style, className }: { style: any; className: string }) => {
  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <SiTypescript className={className} style={{ ...style, zIndex: 10, position: "relative" }} />
      <div style={{ position: "absolute", top: 2, left: 2, width: 20, height: 20, background: "#ffffff", zIndex: 1 }} />
    </div>
  );
};

const languageToIcons: Record<string, { icon: any; color: string }> = {
  typescript: { icon: TypescriptIcon, color: "#3178C6" },
  nodejs: { icon: SiNodedotjs, color: "#5FA04E" },
  nextjs: { icon: TbBrandNextjs, color: "#fff" },
  electron: { icon: SiElectron, color: "#8CEAF9" },
  react: { icon: SiReact, color: "#8CEAF9" },
  rust: { icon: SiRust, color: "#fff" },
  firebase: { icon: SiFirebase, color: "#FFCB2B" },
};

type ProjectInfo = IProjectInfo & { tech?: string[] };

const PROJECTS: ProjectInfo[] = [
  {
    name: "bluelinky",
    desc: "An unofficial nodejs API wrapper for Hyundai bluelink",
    repoUrl: "https://github.com/Hacksore/bluelinky",
    websiteUrl: "https://bluelinky.readme.io",
    status: "alive",
    tech: ["nodejs", "typescript"],
  },
  {
    name: "skinview3d",
    desc: "Three.js powered Minecraft skin viewer",
    repoUrl: "https://github.com/bs-community/skinview3d",
    websiteUrl: "https://bs-community.github.io/skinview3d/",
    status: "alive",
    tech: ["typescript"],
  },
  {
    name: "react-skinview3d",
    desc: "React component for rendering Minecraft skins",
    repoUrl: "https://github.com/hacksore/react-skinview3d",
    websiteUrl: "https://hacksore.github.io/react-skinview3d/?path=/story/all-stories--basic",
    status: "alive",
    tech: ["typescript", "react"],
  },
  {
    name: "Hacksore",
    desc: "The site you are currently viewing",
    repoUrl: "https://github.com/hacksore/hacksore",
    websiteUrl: "https://boult.me",
    status: "alive",
    tech: ["typescript", "react", "firebase", "nextjs"],
  },
  {
    name: "onepassword-secret-util",
    desc: "Enhance 1password secret expansion with the opx CLI",
    repoUrl: "https://github.com/Hacksore/onepassword-secret-util",
    websiteUrl: "https://crates.io/crates/onepassword-secret-util",
    tech: ["rust"],
  },
  {
    name: "overlayed",
    desc: "A discord overlay built with electron and react",
    repoUrl: "https://github.com/hacksore/overlayed",
    websiteUrl: "https://overlayed.dev",
    tech: ["typescript", "electron", "react"],
  },
  {
    name: "overlayed-rust",
    desc: "A discord overlay built with tauri and react",
    repoUrl: "https://github.com/hacksore/overlayed-rust",
    tech: ["rust", "typescript", "react"],
  },
  {
    name: "rpc-discord",
    desc: "A discord RPC library for rust",
    repoUrl: "https://github.com/hacksore/rpc-discord",
    tech: ["rust"],
  },
  {
    name: "u2f",
    desc: "A Next app that shows websites that accept hardware tokens",
    repoUrl: "https://github.com/Hacksore/u2f",
    websiteUrl: "https://u2f.vercel.app",
    tech: ["nextjs", "typescript", "react"],
  },
  {
    name: "buildtray",
    desc: "Build notifications for Github",
    websiteUrl: "https://buildtray.com",
    tech: ["nodejs", "firebase", "react", "typescript"],
  },
];

const renderIconsFromLanguage = (langs: string[]) =>
  langs.map((lang: string) => {
    const Element = languageToIcons[lang].icon;
    return (
      <span key={lang}>
        <Element className="tech-icon" style={{ color: languageToIcons[lang].color }} />
      </span>
    );
  });

const STATUS_COLOR = {
  alive: "#3a8230",
  shambles: "#aa262f",
};

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const color = STATUS_COLOR[status];
  return (
    <Box sx={{ fontSize: 12, padding: "2px 12px 2px 12px", background: color, borderRadius: ".375rem" }}>{status}</Box>
  );
};

const ProjectCard = ({ project }: { project: ProjectInfo }) => {
  return (
    <div className="p-2 w-full rounded-lg h-[200px] bg-card-bg border border-card-border">
      <div className="text-lg p-2 font-bold">{project.name}</div>
      <div className="p-2">{project.desc}</div>

      <div className="flex gap-2 justify-end">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            <Button>Repo</Button>
          </a>
        )}
        {project.websiteUrl && (
          <a href={project.websiteUrl} target="_blank" rel="noreferrer">
            <Button>Website</Button>
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {PROJECTS.map((project: ProjectInfo) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};
