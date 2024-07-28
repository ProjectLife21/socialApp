import React from "react";

// icons
import { MdRssFeed, MdGroups, MdSchool } from "react-icons/md";
import { BsChatSquareDots, BsQuestionSquareFill } from "react-icons/bs";
import { LiaVideoSolid } from "react-icons/lia";
import { FaBookmark, FaFolder, FaCalendar } from "react-icons/fa";

type TMenuLinks = {
  id: number;
  text: string;
  path: string;
  icon: React.ReactNode;
};

export const menuLinks: TMenuLinks[] = [
  {
    id: 0,
    text: "Feed",
    path: "/",
    icon: <MdRssFeed />,
  },
  {
    id: 1,
    text: "Chats",
    path: "/",
    icon: <BsChatSquareDots />,
  },
  {
    id: 2,
    text: "Videos",
    path: "/",
    icon: <LiaVideoSolid />,
  },
  {
    id: 3,
    text: "Groups",
    path: "/",
    icon: <MdGroups />,
  },
  {
    id: 4,
    text: "Bookmarks",
    path: "/",
    icon: <FaBookmark />,
  },
  {
    id: 5,
    text: "Questions",
    path: "/",
    icon: <BsQuestionSquareFill />,
  },
  {
    id: 6,
    text: "Jobs",
    path: "/",
    icon: <FaFolder />,
  },
  {
    id: 7,
    text: "Events",
    path: "/",
    icon: <FaCalendar />,
  },
  {
    id: 8,
    text: "Courses",
    path: "/",
    icon: <MdSchool />,
  },
];
