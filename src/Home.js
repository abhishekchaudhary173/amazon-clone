import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product Id, title, price, rating,image */}
      <div className="home__row">
        <Product
          id="12345435"
          title="2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
          price={239900}
          rating={5}
          image="./image/macbook.jpg"
        />

        <Product
          id="12345436"
          title="OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)"
          price={71999}
          rating={5}
          image="./image/oneplus.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345437"
          title="Pigeon Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)"
          price={600}
          rating={4}
          image="./image/pigeon.jpg"
        />

        <Product
          id="12345438"
          title="it luggage Certify |Hard Sided Suitcase | Expandable | Set of 3 Travel Bag | Fashionable 8 Wheel Trolley| 16-2618-08- Metallic Navy-54- 70-80 cm"
          price={21499}
          rating={5}
          image="./image/luggage.jpg"
        />

        <Product
          id="12345439"
          title="Apple Watch Series 7 (GPS + Cellular, 45mm) - Gold Stainless Steel Case with Gold Milanese Loop"
          price={77900}
          rating={5}
          image="./image/apple_watch.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345445"
          title="Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900AKXXL (Steel)"
          price={1349990}
          rating={5}
          image="./image/led.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
