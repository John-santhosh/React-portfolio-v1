import { nanoid } from "nanoid";
import { FaHome, FaRegUser, FaBookOpen } from "react-icons/fa";
import { BiMessageRounded, BiMoveHorizontal } from "react-icons/bi";
export const social = [
  { id: nanoid(), FaHome, url: "#" },
  { id: nanoid(), FaHome, url: "#" },
  { id: nanoid(), FaHome, url: "#" },
];

export const navLinks = [
  { id: 1, Icon: FaHome, url: "#" },
  { id: 2, Icon: FaRegUser, url: "#about" },
  { id: 3, Icon: FaBookOpen, url: "#portfolio" },
  { id: 4, Icon: BiMessageRounded, url: "#contact" },
];
