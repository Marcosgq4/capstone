import Button from "./Button";
import { Image } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1 clasName="heading">Little Lemon</h1>
        <h2 className="sub-heading">Chicago</h2>
        <p className="description">
          Savor the vibrant flavors of the Mediterranean! Fresh ingredients,
          bold flavors, and a cozy atmosphere for an unforgettable meal. Your
          table is ready, come feast with us!
        </p>
        <Button text="Reserve a Table" route="reservations" />
      </div>
      <div className="hero-image">
        <Image
          src="assets/icons_assets/restauranfood.jpg"
          alt="restaurant interior"
          className="chef-image"
          fluid
        />
      </div>
    </section>
  );
};

export default Hero;
