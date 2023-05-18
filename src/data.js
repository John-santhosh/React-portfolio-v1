import { nanoid } from "nanoid";
import { FaHome, FaRegUser, FaBookOpen } from "react-icons/fa";
import { BiMessageRounded, BiMoveHorizontal } from "react-icons/bi";
import { CgRadioChecked } from "react-icons/cg";

import { BsFillClipboardCheckFill } from "react-icons/bs";
export const social = [
  { id: nanoid(), FaHome, url: "#" },
  { id: nanoid(), FaHome, url: "#" },
  { id: nanoid(), FaHome, url: "#" },
];

export const navLinks = [
  { id: 1, Icon: FaHome, url: "#" },
  { id: 2, Icon: FaRegUser, url: "#about" },
  { id: 3, Icon: FaBookOpen, url: "#skills" },
  { id: 4, Icon: BsFillClipboardCheckFill, url: "#portfolio" },
  { id: 5, Icon: BiMessageRounded, url: "#contact" },
];

export const skills = {
  frontend: [
    { id: nanoid(), Icon: CgRadioChecked, skill: "HTML", level: "Skilled" },
    { id: nanoid(), Icon: CgRadioChecked, skill: "CSS", level: "Skilled" },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "JavaScript",
      level: "skilled",
    },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "JQuery",
      level: "Intermediate",
    },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "Bootstrap",
      level: "Intermediate",
    },
    { id: nanoid(), Icon: CgRadioChecked, skill: "React", level: "Skilled" },
  ],

  backend: [
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "Node JS",
      level: "Basic/Learning",
    },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "Express JS",
      level: "Basic/Learning",
    },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "MongoDB",
      level: "Learning",
    },
  ],

  others: [
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "Firebase",
      level: "Intermediate",
    },
    // {
    //   id: nanoid(),
    //   Icon: CgRadioChecked,
    //   skill: "Auth0",
    //   level: "Intermediate",
    // },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "WebAPI's",
      level: "Skilled",
    },
  ],
};
