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
    {
      id: 1,
      name: "BMW 8 Series",
      img: bmw_8_series,
      price: 19500,
      ratings: 4,
      colors: ["Black", "White", "Silver"],
      description: `The BMW 8 Series is a luxury grand tourer that offers both power and elegance. It’s equipped with the latest technology, including a high-performance engine and an interior designed for comfort and style.`,
      engineTransmission: {
        engineType: "4.4L V8",
        transmission: "8-speed automatic",
      },
      mechanical: `The BMW 8 Series features adaptive suspension, rear-wheel drive, and advanced stability control.`,
      electrical: false,
    },
    {
      id: 2,
      name: "BMW 7 Series",
      img: bmw_7_series,
      price: 19000,
      ratings: 4,
      colors: ["Blue", "Black", "White"],
      description: `The BMW 7 Series is a full-size luxury sedan known for its advanced technology and comfort.`,
      engineTransmission: {
        engineType: "3.0L I6",
        transmission: "8-speed automatic",
      },
      mechanical: `The 7 Series comes with adaptive air suspension, all-wheel drive, and dynamic traction control.`,
      electrical: false,
    },
    {
      id: 3,
      name: "BMW 3 Series",
      img: bmw_3_series,
      price: 19000,
      ratings: 4.5,
      colors: ["Grey", "White", "Black"],
      description: `The BMW 3 Series is a compact luxury sedan that has long been a favorite for drivers who want a balance of performance and luxury.`,
      engineTransmission: {
        engineType: "2.0L I4",
        transmission: "8-speed automatic",
      },
      mechanical: `The 3 Series features rear-wheel drive, advanced steering response, and sport suspension.`,
      electrical: false,
    },
    {
      id: 4,
      name: "BMW X6",
      img: bmw_X6,
      price: 16000,
      ratings: 5,
      colors: ["Red", "Silver"],
      description: `The BMW X6 is a luxury SUV with a coupe-like design. It offers the power and performance of a sports car while providing the space and comfort of an SUV.`,
      engineTransmission: {
        engineType: "4.4L V8",
        transmission: "8-speed automatic",
      },
      mechanical: `The X6 features all-wheel drive, adaptive suspension, and precision steering.`,
      electrical: false,
    },
    {
      id: 5,
      name: "BMW M3",
      img: bmw_M3,
      price: 19556,
      ratings: 3.4,
      colors: ["White", "Blue", "Black"],
      description: `The BMW M3 is a high-performance version of the 3 Series, designed for drivers who want the thrill of speed without sacrificing comfort.`,
      engineTransmission: {
        engineType: "3.0L I6 Twin Turbo",
        transmission: "6-speed manual",
      },
      mechanical: `The M3 comes with rear-wheel drive, sport-tuned suspension, and dynamic traction control.`,
      electrical: false,
    },
    {
      id: 6,
      name: "BMW Z6",
      img: bmw_Z6,
      price: 29900,
      ratings: 4.1,
      colors: ["Silver", "Black"],
      description: `The BMW Z6 is a luxury roadster with a sleek design and powerful engine. It’s perfect for those who love open-top driving.`,
      engineTransmission: {
        engineType: "3.0L I6",
        transmission: "8-speed automatic",
      },
      mechanical: `The Z6 includes rear-wheel drive, adaptive suspension, and a high-performance braking system.`,
      electrical: false,
    },
    {
      id: 7,
      name: "BMW X1",
      img: bmw_x1,
      price: 14000,
      ratings: 3.8,
      colors: ["White", "Silver"],
      description: `The BMW X1 is a compact luxury SUV that offers great value for drivers who want a blend of performance, technology, and practicality.`,
      engineTransmission: {
        engineType: "2.0L I4",
        transmission: "8-speed automatic",
      },
      mechanical: `The X1 comes with all-wheel drive, precision steering, and a comfortable suspension setup.`,
      electrical: false,
    },
    {
      id: 8,
      name: "BMW i3",
      img: bmw_i3,
      price: 19700,
      ratings: 4.6,
      colors: ["Black", "White", "Blue"],
      description: `The BMW i3 is an all-electric car designed for eco-conscious drivers. It offers excellent range, advanced technology, and a modern design.`,
      engineTransmission: {
        engineType: "Electric Motor",
        transmission: "Single-speed automatic",
      },
      mechanical: `The i3 comes with rear-wheel drive, regenerative braking, and a lightweight chassis.`,
      electrical: true,
    },
  ];

  const rolls_royce = [
    {
        id: 1,
        name: "Dawn",
        img: Dawn,
        price: 233000,
        ratings: 5,
        colors: ["Black", "White", "Red"],
        description: "The Rolls-Royce Dawn is a stunning convertible that combines breathtaking performance with exquisite luxury.",
        engineTransmission: {
            engineType: "6.6L V12 Twin Turbo",
            transmission: "8-speed automatic",
        },
        mechanical: "Features include adaptive cruise control, night vision, and self-leveling air suspension.",
        electrical: false,
    },
    {
        id: 2,
        name: "GTY",
        img: GTY,
        price: 210000,
        ratings: 3.9,
        colors: ["Silver", "Dark Blue", "Green"],
        description: "The GTY is a luxurious coupe designed for performance with a handcrafted interior.",
        engineTransmission: {
            engineType: "6.6L V12 Twin Turbo",
            transmission: "8-speed automatic",
        },
        mechanical: "Includes advanced aerodynamics and dynamic driving modes for a thrilling experience.",
        electrical: false,
    },
    {
        id: 3,
        name: "Cullinan",
        img: Cullinan,
        price: 1000000,
        ratings: 5,
        colors: ["Black", "Silver", "Champagne"],
        description: "The Rolls-Royce Cullinan is an ultra-luxury SUV that offers supreme comfort and off-road capabilities.",
        engineTransmission: {
            engineType: "6.75L V12 Twin Turbo",
            transmission: "8-speed automatic",
        },
        mechanical: "It features all-wheel drive, air suspension, and a panoramic sunroof.",
        electrical: false,
    },
    {
        id: 4,
        name: "Ghost",
        img: Ghost,
        price: 200000,
        ratings: 3.6,
        colors: ["White", "Black", "Bronze"],
        description: "The Ghost is a masterclass in luxury, featuring an elegant design and cutting-edge technology.",
        engineTransmission: {
            engineType: "6.75L V12 Twin Turbo",
            transmission: "8-speed automatic",
        },
        mechanical: "Equipped with advanced safety features and a luxurious interior.",
        electrical: false,
    },
    {
        id: 5,
        name: "Phantom",
        img: Phantom,
        price: 200000,
        ratings: 4.3,
        colors: ["Black", "Silver", "Burgundy"],
        description: "The Rolls-Royce Phantom is the epitome of luxury, offering an unparalleled experience in craftsmanship and performance.",
        engineTransmission: {
            engineType: "6.75L V12",
            transmission: "8-speed automatic",
        },
        mechanical: "Features a self-leveling air suspension and an advanced sound system.",
        electrical: false,
    },
    {
        id: 6,
        name: "Phantom Extended",
        img: Phantom_Extended,
        price: 220000,
        ratings: 4,
        colors: ["Ivory", "Black", "Dark Green"],
        description: "The Phantom Extended combines the luxury of the Phantom with additional space for enhanced comfort.",
        engineTransmission: {
            engineType: "6.75L V12",
            transmission: "8-speed automatic",
        },
        mechanical: "Includes enhanced interior features and ambient lighting.",
        electrical: false,
    },
    {
        id: 7,
        name: "Wraith",
        img: Wraith,
        price: 202040,
        ratings: 5,
        colors: ["Silver", "Navy Blue", "Purple"],
        description: "The Wraith is a luxurious grand tourer with powerful performance and an elegant silhouette.",
        engineTransmission: {
            engineType: "6.6L V12 Twin Turbo",
            transmission: "8-speed automatic",
        },
        mechanical: "Equipped with rear-wheel drive and active suspension.",
        electrical: false,
    },
    {
        id: 8,
        name: "Ghost Extended",
        img: Ghost_Extended,
        price: 234000,
        ratings: 4.1,
        colors: ["Black", "White", "Emerald"],
        description: "The Ghost Extended provides more space and luxury, making every journey exceptional.",
        engineTransmission: {
            engineType: "6.75L V12 Twin Turbo",
            transmission: "8-speed automatic",
        },
        mechanical: "Includes a bespoke audio system and luxurious leather interiors.",
        electrical: false,
    },
    
];


const toyota = [
  {
      id: 1,
      name: "Toyota Avalon",
      img: Avalon,
      price: 15000,
      ratings: 4,
      colors: ["White", "Black", "Silver"],
      description: "The Avalon is a full-size sedan that offers a spacious interior and advanced safety features.",
      engineTransmission: {
          engineType: "3.5L V6",
          transmission: "8-speed automatic",
      },
      mechanical: "Includes adaptive cruise control, lane departure warning, and a premium audio system.",
      electrical: false,
  },
  {
      id: 2,
      name: "Toyota Camry",
      img: Camry,
      price: 15200,
      ratings: 4.6,
      colors: ["Black", "Red", "Blue"],
      description: "The Camry is a reliable sedan known for its comfort, efficiency, and advanced safety technologies.",
      engineTransmission: {
          engineType: "2.5L 4-cylinder",
          transmission: "8-speed automatic",
      },
      mechanical: "Equipped with advanced safety features and spacious cargo space.",
      electrical: false,
  },
  {
      id: 3,
      name: "Toyota Highlander",
      img: Highlander,
      price: 16400,
      ratings: 3.7,
      colors: ["Silver", "Black", "Dark Blue"],
      description: "The Highlander is a midsize SUV offering three rows of seating and versatile cargo space.",
      engineTransmission: {
          engineType: "3.5L V6",
          transmission: "8-speed automatic",
      },
      mechanical: "Includes all-wheel drive and a suite of driver-assistance technologies.",
      electrical: false,
  },
  {
      id: 4,
      name: "Toyota Prius",
      img: Prius,
      price: 17000,
      ratings: 4,
      colors: ["Green", "White", "Blue"],
      description: "The Prius is a hybrid car known for its exceptional fuel efficiency and eco-friendly design.",
      engineTransmission: {
          engineType: "1.8L 4-cylinder",
          transmission: "CVT",
      },
      mechanical: "Equipped with regenerative braking and an advanced hybrid battery.",
      electrical: true,
  },
  {
      id: 5,
      name: "Toyota RAV4",
      img: RAV4,
      price: 10000,
      ratings: 5,
      colors: ["Black", "White", "Silver"],
      description: "The RAV4 is a compact SUV that combines rugged capability with urban practicality.",
      engineTransmission: {
          engineType: "2.5L 4-cylinder",
          transmission: "8-speed automatic",
      },
      mechanical: "Includes all-wheel drive and an advanced safety system.",
      electrical: false,
  },
  {
      id: 6,
      name: "Toyota Supra",
      img: Supra,
      price: 11000,
      ratings: 3.9,
      colors: ["Red", "Black", "Blue"],
      description: "The Supra is a sports car with a powerful engine and sleek design, made for performance enthusiasts.",
      engineTransmission: {
          engineType: "3.0L I6 Turbo",
          transmission: "8-speed automatic",
      },
      mechanical: "Features rear-wheel drive and adaptive suspension.",
      electrical: false,
  },
  {
      id: 7,
      name: "Toyota Yaris",
      img: Yaris,
      price: 7000,
      ratings: 4.2,
      colors: ["White", "Blue", "Black"],
      description: "The Yaris is a subcompact car that offers excellent fuel efficiency and a comfortable interior.",
      engineTransmission: {
          engineType: "1.5L 4-cylinder",
          transmission: "CVT",
      },
      mechanical: "Equipped with a rearview camera and a touch-screen display.",
      electrical: false,
  },
  {
      id: 8,
      name: "Corolla",
      img: corolla,
      price: 25000,
      ratings: 4.5,
      colors: ["Red", "Blue", "Black"],
      description: "The Tacoma is a midsize pickup truck known for its off-road capability and rugged design.",
      engineTransmission: {
          engineType: "3.5L V6",
          transmission: "6-speed automatic",
      },
      mechanical: "Includes four-wheel drive and off-road package.",
      electrical: false,
  },
 
];



  const values = {
    selectedProduct,
    setSelectedProduct,
    bmw,
    rolls_royce,
    toyota
  };

  return (
    <ProductContext.Provider
      value={values} 
    >
      {children}
    </ProductContext.Provider>
  );
};
