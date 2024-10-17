/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//BMW
//bmw_8_series
import bmw_8_series from "../../assets/images/cart-car/BMW/8-Series/bmw-8-series-convertible-ms-g14.jpg";
import bmw_8_series_2 from "../../assets/images/cart-car/BMW/8-Series/images (2).jpeg";


// bmw_7_series
import bmw_7_series from "../../assets/images/cart-car/BMW/BMW-7-series/2022042001_BMW_7Series.jpg";
import bmw_7_series_2 from "../../assets/images/cart-car/BMW/BMW-7-series/bmw-7-series-2023-interior-00.jpg";
import bmw_7_series_3 from "../../assets/images/cart-car/BMW/BMW-7-series/hq720 (1).jpg";
import bmw_7_series_4 from "../../assets/images/cart-car/BMW/BMW-7-series/P90458181-the-new-bmw-i7-xdrive60-04-2022-600px.jpg";


// bmw_3_series
import bmw_3_series from "../../assets/images/cart-car/BMW/M3/bmw-3-series-cs-m-automobiles-sp-desktop.jpg";
import bmw_3_series_2 from "../../assets/images/cart-car/BMW/M3/images (1).jpeg";
import bmw_3_series_3 from "../../assets/images/cart-car/BMW/M3/images.jpeg";
import bmw_3_series_4 from "../../assets/images/cart-car/BMW/M3/m3_031.webp";

// bmw_X6
import bmw_X6 from "../../assets/images/cart-car/BMW/X6/20200608074149_2020-BMW-X6-front.jpg";
import bmw_X6_2 from "../../assets/images/cart-car/BMW/X6/667b55ddd2a748b2a6e3fa5599a67c9e.jpg";
import bmw_X6_3 from "../../assets/images/cart-car/BMW/X6/BMW X6 M review-8.webp";
import bmw_X6_4 from "../../assets/images/cart-car/BMW/X6/images.jpeg";

// bmw_M3
import bmw_M3 from "../../assets/images/cart-car/BMW/M3/bmw-3-series-cs-m-automobiles-sp-desktop.jpg";
import bmw_M3_2 from "../../assets/images/cart-car/BMW/M3/images (1).jpeg";
import bmw_M3_3 from "../../assets/images/cart-car/BMW/M3/images.jpeg";
import bmw_M3_4 from "../../assets/images/cart-car/BMW/M3/m3_031.webp";

// bmw_Z6
import bmw_Z6 from "../../assets/images/cart-car/BMW/Z4/bmw-z4-m40i-roadster-cp-01.avif";
import bmw_Z6_2 from "../../assets/images/cart-car/BMW/Z4/bmw-zseries-z4-highlights-stage-sp-xxl.jpg";
import bmw_Z6_3 from "../../assets/images/cart-car/BMW/Z4/images.jpeg";
import bmw_Z6_4 from "../../assets/images/cart-car/BMW/Z4/Z4-3.webp";

// bmw_x1
import bmw_x1 from "../../assets/images/cart-car/BMW/x1/473346c61f0f44a63feeca7243563f0e.jpg";
import bmw_x1_2 from "../../assets/images/cart-car/BMW/x1/bmw-x1-facelift-right-front-three-quarter2.webp";
import bmw_x1_3 from "../../assets/images/cart-car/BMW/x1/images.jpeg";
import bmw_x1_4 from "../../assets/images/cart-car/BMW/x1/X1-interior.jpg";

// bmw_i3
import bmw_i3 from "../../assets/images/cart-car/BMW/i3/2019-BMW-i3-MLP-Hero.png";
import bmw_i3_2 from "../../assets/images/cart-car/BMW/i3/2014-BMW-i3-interior.jpg";
import bmw_i3_3 from "../../assets/images/cart-car/BMW/i3/images (1).jpeg";


//Rolls Royce "Cullinan"
import Cullinan from "../../assets/images/cart-car/Rolls-Royce/Cullinan/listing_main_Rolls-Royce_Cullinan_front_three_quarter.jpg"
import Cullinan_2 from "../../assets/images/cart-car/Rolls-Royce/Cullinan/2 Rolls-Royce Cullinan review.jpg"
import Cullinan_3 from "../../assets/images/cart-car/Rolls-Royce/Cullinan/images.jpeg"
import Cullinan_4 from "../../assets/images/cart-car/Rolls-Royce/Cullinan/images (1).jpeg"

//Rolls Royce "Dawn"
import Dawn from "../../assets/images/cart-car/Rolls-Royce/Dawn/sddefault.jpg"
import Dawn_2 from "../../assets/images/cart-car/Rolls-Royce/Dawn/Bohemian Red-R9B-153,0,21-640-en_US.avif"
import Dawn_3 from "../../assets/images/cart-car/Rolls-Royce/Dawn/images.jpeg"
import Dawn_4 from "../../assets/images/cart-car/Rolls-Royce/Dawn/Used-2020-Rolls-Royce-Dawn-1699229613.jpg"

//Rolls Royce "GTY"
import GTY from "../../assets/images/cart-car/Rolls-Royce/GTY/car-13.jpg"
import GTY_2 from "../../assets/images/cart-car/Rolls-Royce/GTY/car-15.jpg"

//Rolls Royce "Ghost"
import Ghost from "../../assets/images/cart-car/Rolls-Royce/Ghost/mansory-rolls-royce-ghost-my-2021-01.webp"
import Ghost_2 from "../../assets/images/cart-car/Rolls-Royce/Ghost/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg"
import Ghost_3 from "../../assets/images/cart-car/Rolls-Royce/Ghost/p90508471-highres-rolls-royce-ghost-ex-copy-64dbcad7a198e.avif"
import Ghost_4 from "../../assets/images/cart-car/Rolls-Royce/Ghost/rolls-royce_ghost_391.webp"

//Rolls Royce "Phantom"
import Phantom from "../../assets/images/cart-car/Rolls-Royce/Phantom/2018-rolls-royce-phantom-spied_827x510_51465384461.webp"
import Phantom_2 from "../../assets/images/cart-car/Rolls-Royce/Phantom/2024-rolls-royce-phantom-102-64bad70ba7661.avif"
import Phantom_3 from "../../assets/images/cart-car/Rolls-Royce/Phantom/maxresdefault.jpg"
import Phantom_4 from "../../assets/images/cart-car/Rolls-Royce/Phantom/phantom-scintilla-private-collection---0.webp"


//Rolls Royce "Phantom_Extended"
import Phantom_Extended from "../../assets/images/cart-car/Rolls-Royce/Phantom_Extended/5baa5c9f0119b20cf463ce23.webp"
import Phantom_Extended_2 from "../../assets/images/cart-car/Rolls-Royce/Phantom_Extended/images (1).jpeg"
import Phantom_Extended_3 from "../../assets/images/cart-car/Rolls-Royce/Phantom_Extended/images.jpeg"
import Phantom_Extended_4 from "../../assets/images/cart-car/Rolls-Royce/Phantom_Extended/rolls-royce-phantom-extended-2018-boot.jpg"

//Rolls Royce "Ghost_Extended"
import Ghost_Extended from "../../assets/images/cart-car/Rolls-Royce/Ghost-Extended/brabus-700-rolls-royce-ghost-extended-looks-like-a-million-bucks-costs-way-less-than-that_2.jpg";
import Ghost_Extended_2 from "../../assets/images/cart-car/Rolls-Royce/Ghost-Extended/front-left-side-47.webp";
import Ghost_Extended_3 from "../../assets/images/cart-car/Rolls-Royce/Ghost-Extended/images.jpeg";
import Ghost_Extended_4 from "../../assets/images/cart-car/Rolls-Royce/Ghost-Extended/the-new-rolls-royce-ghost-extended-10 (1).avif";

//Rolls Royce "Wraith"
import Wraith from "../../assets/images/cart-car/Rolls-Royce/Wraith/rolls-royce-black-badge-wraith-by-spofec.jpg";
import Wraith_2 from "../../assets/images/cart-car/Rolls-Royce/Wraith/maxresdefault.jpg";
import Wraith_3 from "../../assets/images/cart-car/Rolls-Royce/Wraith/rolls-royce-wraith-coupe-petrol-9ce88ad17788.jpg";


//Toyota "Avalon"
import Avalon from "../../assets/images/cart-car/Toyota/Avalon/2021-Toyota-Avalon-2-small.jpg";
import Avalon_2 from "../../assets/images/cart-car/Toyota/Avalon/hq720.jpg";
import Avalon_3 from "../../assets/images/cart-car/Toyota/Avalon/images.jpeg";
import Avalon_4 from "../../assets/images/cart-car/Toyota/Avalon/maxresdefault.jpg";

//Toyota "Camry"
import Camry from "../../assets/images/cart-car/Toyota/Camry/60d481d9-087d-42b0-baa8-75ef1b5c3115_20231116115639_2025_toyota_camry_rear.jpg";
import Camry_2 from "../../assets/images/cart-car/Toyota/Camry/2025-Toyota-Camry-1.jpg";
import Camry_3 from "../../assets/images/cart-car/Toyota/Camry/hq720.jpg";

//Toyota "Highlander"
import Highlander from "../../assets/images/cart-car/Toyota/Highlander/2024-toyota-grand-highlander.jpg";
import Highlander_2 from "../../assets/images/cart-car/Toyota/Highlander/2024_Toyota_Highlander.webp";
import Highlander_3 from "../../assets/images/cart-car/Toyota/Highlander/XSE_2024_highlander.png";

//Toyota "Prius"
import Prius from "../../assets/images/cart-car/Toyota/Prius/2018_PRIUS_PRIME_600x.webp";
import Prius_2 from "../../assets/images/cart-car/Toyota/Prius/001.jpg";
import Prius_3 from "../../assets/images/cart-car/Toyota/Prius/2022-toyota-prius-xle-nightshade-exterior-front-quarter.jpg";
import Prius_4 from "../../assets/images/cart-car/Toyota/Prius/driven-prius-prime-pic-videoSixteenByNine3000.jpg";

//Toyota "RAV4"
import RAV4 from "../../assets/images/cart-car/Toyota/RAV4/2023TOS110006_1280_01.webp";
import RAV4_2 from "../../assets/images/cart-car/Toyota/RAV4/20191120_02_31_s.jpg";
import RAV4_3 from "../../assets/images/cart-car/Toyota/RAV4/2024_toyota_rav4-hybrid_4dr-suv_se_fq_oem_1_1280.avif";
import RAV4_4 from "../../assets/images/cart-car/Toyota/RAV4/fa6bdfbc-670-0.jpg";

//Toyota "Supra"
import Supra from "../../assets/images/cart-car/Toyota/Supra/IMG_5754.webp";
import Supra_2 from "../../assets/images/cart-car/Toyota/Supra/2025-toyota-gr-supra-102-668c519da0fe1.avif";
import Supra_3 from "../../assets/images/cart-car/Toyota/Supra/2023-Supra-in-Clermont-FL-min.jpg";
import Supra_4 from "../../assets/images/cart-car/Toyota/Supra/N-Charlotte-Toyota-sports-car.jpeg";

//Toyota "Yaris"
import Yaris from "../../assets/images/cart-car/Toyota/Yaris/toyota-my-yaris-g-limited-aerokit-v3.jpg";
import Yaris_2 from "../../assets/images/cart-car/Toyota/Yaris/1-6272747.jpeg";
import Yaris_3 from "../../assets/images/cart-car/Toyota/Yaris/maxresdefault.jpg";
import Yaris_4 from "../../assets/images/cart-car/Toyota/Yaris/looking-back-at-toyotas-most-recent-hot-hatches-and-future-grmn-models_3.jpg";

//Toyota "corolla"
import corolla from "../../assets/images/cart-car/Toyota/corolla/2023_corolla_infrared_special_special_edition_002-scaled1696534031674.jpg";
import corolla_2 from "../../assets/images/cart-car/Toyota/corolla/2021-Toyota-Corolla-Hatchback-SE-Nightshade-3-scaled.avif";
import corolla_3 from "../../assets/images/cart-car/Toyota/corolla/2024-Toyota-Corolla-Cross-Interior-1024x571.png";



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetail] = useState([null]);
  console.log(productDetails);

  const bmw = [
    {
      id: 1,
      band:"BMW",
      name: "BMW 8 Series",
      img: [
        bmw_8_series,
        bmw_8_series_2,
      ],
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
      band:"BMW",
      name: "BMW 7 Series",
      img: [
        bmw_7_series,
        bmw_7_series_2,
        bmw_7_series_3,
        bmw_7_series_4,
      ],
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
      band: "BMW",
      name: "BMW 3 Series",
      img: [
        bmw_3_series,
        bmw_3_series_2,
        bmw_3_series_3,
        bmw_3_series_4,
      ],
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
      band: "BMW",
      name: "BMW X6",
      img: [
        bmw_X6,
        bmw_X6_2,
        bmw_X6_3,
        bmw_X6_4,
      ],
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
      band: "BMW",
      name: "BMW M3",
      img: [
        bmw_M3,
        bmw_M3_2,
        bmw_M3_3,
        bmw_M3_4

      ],
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
      band: "BMW",
      name: "BMW Z6",
      img: [
        bmw_Z6,
        bmw_Z6_2,
        bmw_Z6_3,
        bmw_Z6_4,
      ],
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
      band: "BMW",
      name: "BMW X1",
      img: [
        bmw_x1,
        bmw_x1_2,
        bmw_x1_3,
        bmw_x1_4,

      ],
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
      band: "BMW",
      name: "BMW i3",
      img: [
        bmw_i3,
        bmw_i3_2,
        bmw_i3_3,

      ],
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
        band:"Rolls Royce",
        name: "Dawn",
        img: [
          Dawn,
          Dawn_2,
          Dawn_3,
          Dawn_4,
        ],
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
        band:"Rolls Royce",
        name: "GTY",
        img:[
          GTY,
          GTY_2
        ],
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
        band:"Rolls Royce",
        name: "Cullinan",
        img: [
          Cullinan,
          Cullinan_2,
          Cullinan_3,
          Cullinan_4,

        ],
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
        band:"Rolls Royce",
        name: "Ghost",
        img: [
          Ghost,
          Ghost_2,
          Ghost_3,
          Ghost_4,
        ],
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
        band:"Rolls Royce",
        name: "Phantom",
        img: [
          Phantom,
          Phantom_2,
          Phantom_3,
          Phantom_4,
        ],
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
        band:"Rolls Royce",
        name: "Phantom Extended",
        img: [
          Phantom_Extended,
          Phantom_Extended_2,
          Phantom_Extended_3,
          Phantom_Extended_4,

        ],
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
        band:"Rolls Royce",
        name: "Wraith",
        img: [
          Wraith,
          Wraith_2,
          Wraith_3,
        ],
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
        band:"Rolls Royce",
        name: "Ghost Extended",
        img: [
          Ghost_Extended,
          Ghost_Extended_2,
          Ghost_Extended_3,
          Ghost_Extended_4,

        ],
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
      band: "Toyota",
      name: "Toyota Avalon",
      img: [
        Avalon,
        Avalon_2,
        Avalon_3,
        Avalon_4,

      ],
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
      band: "Toyota",
      name: "Toyota Camry",
      img: [
        Camry,
        Camry_2,
        Camry_3,
      ],
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
      band: "Toyota",
      name: "Toyota Highlander",
      img: [
        Highlander,
        Highlander_2,
        Highlander_3,

      ],
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
      band: "Toyota",
      name: "Toyota Prius",
      img: [
        Prius,
        Prius_2,
        Prius_3,
        Prius_4
      ],
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
      band: "Toyota",
      name: "Toyota RAV4",
      img: [
        RAV4,
        RAV4_2,
        RAV4_3,
        RAV4_4
        
      ],
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
      band: "Toyota",
      name: "Toyota Supra",
      img: [
        Supra,
        Supra_2,
        Supra_3,
        Supra_4,

      ],
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
      band: "Toyota",
      name: "Toyota Yaris",
      img: [
      Yaris,
      Yaris_2,
      Yaris_3,
      Yaris_4
    ],

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
      band: "Toyota",
      name: "Corolla",
      img: [
        corolla,
        corolla_2,
        corolla_3
      ],
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

const countCartedItem = ()=>{
    return cart.length;
}

const cartCarHandler = (product)=>{
  setCart([...cart, product]);
};

const deletCartSingleItemHandler = (itemIndex)=>{
  console.log(itemIndex)
  const updatedCart = cart.filter((car, index) => index !== itemIndex);
  setCart(updatedCart);
}



const productDeatilsHandler = (product)=>{
  setProductDetail(product)
};



  const values = {
    selectedProduct,
    setSelectedProduct,
    bmw,
    rolls_royce,
    toyota,
    countCartedItem,
    cartCarHandler,
    productDeatilsHandler,
    cart,
    productDetails,

    deletCartSingleItemHandler,
  };

  return (
    <ProductContext.Provider
      value={values} 
    >
      {children}
    </ProductContext.Provider>
  );
};
