import HomePage from "./../pages/home/index";
import ShopPage from "./../pages/shop/index";
import PlantPage from "./../pages/plant/index";
import BlogsPage from "./../pages/blogs/index";

const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    isPrivate: false,
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    element: <ShopPage />,
    isPrivate: false,
  },
  {
    id: 3,
    title: "Plant Care",
    path: "/plant",
    element: <PlantPage />,
    isPrivate: false,
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blogs",
    element: <BlogsPage />,
    isPrivate: false,
  },
];

export default navbar;
