const About = () => {
  return (
    <section className="about" id="about">
      <div>
        <h1 clasName="heading">Little Lemon</h1>
        <h2 className="sub-heading">Chicago</h2>
        <p className="description">
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. Our dishes are crafted with fresh,
          locally sourced ingredients to bring out authentic flavors in every
          bite. At Little Lemon, we strive to create a warm, welcoming
          atmosphere where guests can enjoy memorable meals with loved ones.
          From classic favorites to unique specialties, our menu celebrates the
          rich culinary heritage of the Mediterranean.
        </p>
      </div>
      <div>
        <div className="about-images">
          <img
            src="/assets/icons_assets/Mario and Adrian A.jpg"
            alt="Mario and Adrian A.jpg"
            className="about-image"
          />
          <img
            src="/assets/icons_assets/Mario and Adrian b.jpg"
            alt="Mario and Adrian B.jpg"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
