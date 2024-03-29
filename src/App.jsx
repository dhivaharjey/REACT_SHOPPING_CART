import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const [cartcount, setCartCount] = useState(0);
  const productCard = [
    {
      productName: "G-shock  ",
      image: "/watch.jpg",
      oldPrice: "₹20,000 ",
      price: "15,999",
      offers: "Offer price",
      details: "Special Edition",
    },
    {
      productName: "JDM Mens shoe",
      image: "/shoe.avif",
      oldPrice: "₹9,000 ",
      price: "8,999",
      offers: "",
      details: "SIZES: 8,9,10,11",
    },
    {
      productName: "S-R-S shoes",
      image: "/s1.webp",
      oldPrice: "₹7,799",
      price: "7,000",
      offers: "",
      details: "SIZES: 7,8,9,10,11",
    },
    {
      productName: "EYECRAFT EYEWEARS",
      image: "/glass.jpg",
      oldPrice: "₹18,000 ",
      price: "14,999",
      offers: "Offer price",
      details: "Golden frame",
    },
    {
      productName: "XYALX ",
      image: "/pant.jpg",
      oldPrice: "₹3,500",
      price: "2,000",
      offers: "Offer price",
      details: "SIZES: M , L  , XL",
    },
    {
      productName: "GOOGLE PIXAL 8 pro",
      image: "/phone.webp",
      oldPrice: "₹1,13,500",
      price: "1,12,500",
      offers: "",
      details: "256 gb storage,16gb ram",
    },
    {
      productName: "LPS causual shirt ",
      image: "/shirt.webp",
      oldPrice: "₹2,000",
      price: "1,500",
      offers: "Offer price",
      details: "SIZES: M , L  , XL",
    },
    {
      productName: "REES",
      image: "/t-shirts.jpg",
      oldPrice: "₹900",
      price: "700",
      offers: "",
      details: "SIZES: M , L  , XL",
    },
  ];

  return (
    <div>
      <NavBar cartcount={cartcount} />
      <Header />

      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-md-2 ">
          {productCard.map((item, index) => {
            return (
              <Products item={item} index={index} setCartCount={setCartCount} />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
