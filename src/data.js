import {
  FaHome,
  FaRegUser,
  FaBookOpen,
  FaLinkedin,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { BiMessageRounded, BiGitBranch } from "react-icons/bi";
import { nanoid } from "nanoid";
import { CgRadioChecked } from "react-icons/cg";
import { RiMailStarLine, RiMessengerLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { BsFillClipboardCheckFill } from "react-icons/bs";

export const social = [
  {
    id: nanoid(),
    Icon: BiGitBranch,
    url: "https://github.com/John-santhosh/React-portfolio-v1",
  },
  {
    id: nanoid(),
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/john-santhosh-664539219",
  },
  { id: nanoid(), Icon: AiFillGithub, url: "https://github.com/John-santhosh" },
];

export const navLinks = [
  { id: 1, Icon: FaHome, url: "#", text: "home" },
  { id: 2, Icon: FaRegUser, url: "#about", text: "about" },
  { id: 3, Icon: FaBookOpen, url: "#skills", text: "skills" },
  {
    id: 4,
    Icon: BsFillClipboardCheckFill,
    url: "#portfolio",
    text: "portfolio",
  },
  { id: 5, Icon: BiMessageRounded, url: "#contact", text: "contact" },
];

export const contacts = [
  {
    id: nanoid(),
    Icon: RiMailStarLine,
    text: "Send a mail",
    connect: "Email",
    connectId: "johnsantosh@gmail.com",
    url: "mailto:johnsantosh2@gamil.com",
  },
  {
    id: nanoid(),
    Icon: RiMessengerLine,
    text: "Send a message",
    connect: "Messenger",
    connectId: "john.santosh",
    url: "https://m.me/john.santosh.50",
  },
  {
    id: nanoid(),
    Icon: FaWhatsapp,
    text: "Send a message",
    connect: "Whatsapp",
    connectId: "7550188335",
    url: "https://Wa.me/7550188335",
  },
];

export const footerLinks = [
  {
    id: nanoid(),
    Icon: FaFacebookF,
    url: "https://www.facebook.com/john.santosh.50/",
  },
  {
    id: nanoid(),
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/john-santhosh-664539219",
  },
  {
    id: nanoid(),
    Icon: FaGithub,
    url: "https://github.com/John-santhosh1",
  },
];

export const skills = {
  frontend: [
    { id: nanoid(), Icon: CgRadioChecked, skill: "React", level: "Skilled" },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "JavaScript",
      level: "skilled",
    },
    { id: nanoid(), Icon: CgRadioChecked, skill: "HTML", level: "Skilled" },
    { id: nanoid(), Icon: CgRadioChecked, skill: "CSS", level: "Skilled" },

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
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "styled-components",
      level: "Skilled",
    },
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
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "Linux",
      level: "Intermediate",
    },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "WebAPI's",
      level: "Skilled",
    },
    {
      id: nanoid(),
      Icon: CgRadioChecked,
      skill: "AWS",
      level: "basic",
    },
  ],
};
