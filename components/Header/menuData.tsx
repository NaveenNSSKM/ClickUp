import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
  },

 
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web Development",
        newTab: false,
      
      },
      {
        id: 34,
        title: "ERP Development",
        newTab: false,
       
      },
      {
        id: 35,
        title: "Local SEO",
        newTab: false,
        
      },
      {
        id: 35,
        title: "Google Adwords",
        newTab: false,
       
      },
    
    ],
  },

  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
  },
];

export default menuData;
