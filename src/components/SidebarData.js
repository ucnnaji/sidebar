import React from "react";

import * as AiIcons from "react-icons/ai";

import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TbArticleFilledFilled } from "react-icons/tb";
import { MdOutlineUpcoming } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";


export const SidebarData = [

  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "News",
    path: "/News",
    icon: <FaRegNewspaper />,
    cName: "nav-text",
  },
  {
    title: "People",
    path: "/People",
    icon: <MdOutlinePeopleAlt />,
    cName: "nav-text",
  },
  {
    title: "PublishedArticle",
    path: "/PublishedArticle",
    icon: <TbArticleFilledFilled />,
    cName: "nav-text",
  },
  {
    title: "UpcomingEvents",
    path: "/UpcomingEvents",
    icon: <MdOutlineUpcoming />,
    cName: "nav-text",
  },
  {
    title: "Workshops",
    path: "/Workshops",
    icon: <FaChalkboardTeacher />,
    cName: "nav-text",
  }
];
