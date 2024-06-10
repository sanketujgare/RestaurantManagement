import React, { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import MenuItem from "./components/MenuItem/MenuItem";
import CartItem from "./components/CartItem/CartItem";
import Cart from "./components/Cart/Cart";
import MenuPageView from "./components/Pages/MenuPageView/MenuPageView";
import CookingStaff from "./components/Pages/CookingStaff/CookingStaff";

import { getMenuitemsAPI } from "./services/MenuAPI";
import {
  cartItemType,
  menuItemType,
} from "./components/Pages/MenuPageView/MenuPageView.types";
import Order from "./components/Order/Order";

const App = () => {
  const [menuData, setMenuData] = useState<menuItemType[]>([]);
  const [cartData, setCartData] = useState<cartItemType[]>([]);

  const getdata = async () => {
    try {
      const data = await getMenuitemsAPI();
      if (data && data.length > 0) {
        console.log("some", data);
        setMenuData(data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  const [cartIsClicked, setCartIsClicked] = useState(false);
  const [menuIsClicked, setMenuIsClicked] = useState(true);
  const [ordersIsClicked, setOrdersIsClicked] = useState(false);

  const handleNavigation = () => {
    setCartIsClicked(!cartIsClicked);
    setMenuIsClicked(!menuIsClicked);
  };
  const handleOrders = () => {
    setMenuIsClicked(false);
    setCartIsClicked(false);
    setOrdersIsClicked(true);
  };
  return (
    <div>
      {menuIsClicked && (
        <MenuPageView
          menuData={menuData}
          cartData={cartData}
          setCartData={setCartData}
          setCartIsClicked={handleNavigation}
          setMenuIsClicked={handleNavigation}
        />
      )}
      {cartIsClicked && (
        <Cart
          cartData={cartData}
          setCartData={setCartData}
          setMenuIsClicked={handleNavigation}
          setCartIsClicked={handleNavigation}
          setOrderIsClicked={handleOrders}
        />
      )}
      {ordersIsClicked && <CookingStaff setOrderIsClicked={handleOrders} />}
    </div>
  );
};

export default App;

// const [currentPage,setcurrentPage]=useState("Menupage")
// const renderPage = () => {
//   switch (currentPage) {
//     case "MenuPage":
//       return <MenuPageView/>;
//     case "CartPage":
//       return <About />;
//     case "OrdersPae":
//       return <Cart />;
//     default:
//       return <Home />;
//   }
// };
