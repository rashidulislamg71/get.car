/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//BMW
import bmw_8_series from "../../assets/images/cart-car/BMW/8-Series/bmw-8-series-convertible-ms-g14.jpg";
import bmw_7_series from "../../assets/images/cart-car/BMW/BMW-7-series/2022042001_BMW_7Series.jpg";
import bmw_3_series from "../../assets/images/cart-car/BMW/M3/bmw-3-series-cs-m-automobiles-sp-desktop.jpg";
import bmw_X6 from "../../assets/images/cart-car/BMW/X6/20200608074149_2020-BMW-X6-front.jpg";
import bmw_M3 from "../../assets/images/cart-car/BMW/M3/bmw-3-series-cs-m-automobiles-sp-desktop.jpg";
import bmw_Z6 from "../../assets/images/cart-car/BMW/Z4/bmw-z4-m40i-roadster-cp-01.avif";
import bmw_x1 from "../../assets/images/cart-car/BMW/x1/473346c61f0f44a63feeca7243563f0e.jpg";
import bmw_i3 from "../../assets/images/cart-car/BMW/i3/2019-BMW-i3-MLP-Hero.png";


//Rolls Royce
import Cullinan from "../../assets/images/cart-car/Rolls-Royce/Cullinan/listing_main_Rolls-Royce_Cullinan_front_three_quarter.jpg"
import Dawn from "../../assets/images/cart-car/Rolls-Royce/Dawn/sddefault.jpg"
import GTY from "../../assets/images/cart-car/Rolls-Royce/GTY/car-13.jpg"
import Ghost from "../../assets/images/cart-car/Rolls-Royce/Ghost/mansory-rolls-royce-ghost-my-2021-01.webp"
import Phantom from "../../assets/images/cart-car/Rolls-Royce/Phantom/2018-rolls-royce-phantom-spied_827x510_51465384461.webp"
import Phantom_Extended from "../../assets/images/cart-car/Rolls-Royce/Phantom_Extended/5baa5c9f0119b20cf463ce23.webp"
import Ghost_Extended from "../../assets/images/cart-car/Rolls-Royce/Ghost-Extended/brabus-700-rolls-royce-ghost-extended-looks-like-a-million-bucks-costs-way-less-than-that_2.jpg"
import Wraith from "../../assets/images/cart-car/Rolls-Royce/Wraith/rolls-royce-black-badge-wraith-by-spofec.jpg"

//Toyota
import Avalon from "../../assets/images/cart-car/Toyota/Avalon/2021-Toyota-Avalon-2-small.jpg"
import Camry from "../../assets/images/cart-car/Toyota/Camry/60d481d9-087d-42b0-baa8-75ef1b5c3115_20231116115639_2025_toyota_camry_rear.jpg"
import Highlander from "../../assets/images/cart-car/Toyota/Highlander/2024-toyota-grand-highlander.jpg"
import Prius from "../../assets/images/cart-car/Toyota/Prius/2018_PRIUS_PRIME_600x.webp"
import RAV4 from "../../assets/images/cart-car/Toyota/RAV4/2023TOS110006_1280_01.webp"
import Supra from "../../assets/images/cart-car/Toyota/Supra/IMG_5754.webp"
import Yaris from "../../assets/images/cart-car/Toyota/Yaris/toyota-my-yaris-g-limited-aerokit-v3.jpg"
import corolla from "../../assets/images/cart-car/Toyota/corolla/2023_corolla_infrared_special_special_edition_002-scaled1696534031674.jpg"



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const bmw = [
    { id: 1, name: "BMW 8 Series",img: bmw_8_series, price: 19000},
    { id: 2, name: "BMW 7 Series", img: bmw_7_series, price: 19000 },
    { id: 3, name: "BMW 3 Series", img: bmw_3_series, price: 19000 },
    { id: 4, name: "BMW X6", img: bmw_X6, price: 19000 },
    { id: 5, name: "BMW M3", img: bmw_M3, price: 19000 },
    { id: 6, name: "BMW Z6", img: bmw_Z6, price: 19000 },
    { id: 7, name: "BMW X1", img: bmw_x1, price: 19000 },
    { id: 8, name: "BMW i3", img: bmw_i3, price: 19000 },
  ];

  const rolls = [
    { id: 1, name: "Dawn", img: Dawn, price: 20000 },
    { id: 2, name: "GTY", img: GTY, price: 20000 },
    { id: 3, name: "Cullinan", img: Cullinan, price: 20000 },
    { id: 4, name: "Ghost", img: Ghost, price: 20000},
    { id: 5, name: "Phantom", img: Phantom, price: 20000 },
    { id: 6, name: "Phantom_Extended", img: Phantom_Extended, price: 20000 },
    { id: 7, name: "Wraith", img: Wraith, price: 20000 },
    { id: 8, name: "Ghost_Extended", img: Ghost_Extended, price: 20000 },
  ];

  const tyota = [
    { id: 1, name: "Avalon", img: Avalon, price: 15000, },
    { id: 2, name: "Camry", img: Camry, price: 15000, },
    { id: 3, name: "Highlander", img: Highlander, price: 15000, },
    { id: 4, name: "Prius", img: Prius, price: 15000,},
    { id: 5, name: "RAV4", img: RAV4, price: 15000, },
    { id: 6, name: "Supra", img: Supra, price: 15000, },
    { id: 7, name: "Yaris", img: Yaris, price: 15000, },
    { id: 8, name: "Corolla", img: corolla, price: 15000, },
  ];


  const x = {
    selectedProduct,
    setSelectedProduct,
    bmw,
    rolls,
    tyota
  };

  return (
    <ProductContext.Provider
      value={x} // wrapped values in an object
    >
      {children}
    </ProductContext.Provider>
  );
};
