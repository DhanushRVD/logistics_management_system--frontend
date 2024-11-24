import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData =[
  {
    title: 'Home',
    path: '/AdminDashboard',
    icon: <AiIcons.AiTwotoneHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Userprofile',
    path: '/userprofile',
    icon: <FaIcons.FaPersonBooth/>,
    cName: 'nav-text'
  },
  // {
  //   title: 'Employee',
  //   path: '/Employee',
  //   icon: <IoIcons.IoMdPerson/>,
  //   cName: 'nav-text'
  // },
  {
    title: 'OrderList',
    path: '/Order',
    icon: <AiIcons.AiOutlineOrderedList/>,
    cName: 'nav-text'
  },
  {
    title: 'Customer',
    path: '/Customer',
    icon: <IoIcons.IoIosPerson/>,
    cName: 'nav-text'
  },
  {
    title: 'Inventory',
    path: '/Inventory',
    icon: <FaIcons.FaWarehouse/>,
    cName: 'nav-text'
  },
  {
    title: 'Kanban',
    path: '/Kanban',
    icon: <AiIcons.AiFillBook/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/Report',
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <AiIcons.AiOutlineLogout/>,
    cName: 'nav-text'
  },

]


