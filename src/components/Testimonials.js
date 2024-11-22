import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const testimonials = [
    {
      userName: "Emily R.",
      rating: 5,
      picture: "/assets/icons_assets/emily.jpg",
      review:
        "The food was amazing, and the service was excellent! Highly recommend.",
    },
    {
      userName: "James S.",
      rating: 4,
      picture: "/assets/icons_assets/james.jpg",
      review: "Great ambiance and delicious food. Will definitely come back.",
    },
    {
      userName: "Sarah W.",
      rating: 5,
      picture: "/assets/icons_assets/sarah.jpg",
      review: "Absolutely loved it! The best Mediterranean food in town.",
    },
  ];

  return (
    <section>
      <h1 className="heading testimonials-heading">Customer Reviews</h1>
      <div className="grid">
        {testimonials.map((testimonial, index) => (
          <ReviewCard
            key={index}
            userName={testimonial.userName}
            rating={testimonial.rating}
            picture={testimonial.picture}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
