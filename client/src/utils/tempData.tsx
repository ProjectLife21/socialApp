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

type TFeed = {
  id: number;
  img: string;
  author: {
    name: string;
    img: string;
  };
  date: string;
  desc: string;
  likes: number;
  comments: string;
};

export const feeds: TFeed[] = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&w=300",
    author: {
      name: "Safak Kocaoglu",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    date: "5 mins ago",
    desc: "Love For All, Hated for None.",
    likes: 60,
    comments: "2 comments",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=300",
    author: {
      name: "Alex Durden",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    date: "1 hour ago",
    desc: "Every moment is a fresh begining.",
    likes: 12,
    comments: "1 comment",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=300",
    author: {
      name: "Dora Hawks",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    date: "4 hour ago",
    desc: "I lova traveling!",
    likes: 19,
    comments: "0 comments",
  },
];
