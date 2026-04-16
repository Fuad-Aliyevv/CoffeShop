import { useEffect, useState } from "react";

type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  img: string;
};

export default function TestimonialsSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);


  if (!reviews.length) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Yüklənir...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-section">
      <h2>⭐ Rəylər</h2>

      <div className="testimonial-row">
        {reviews.map((item) => (
          <div key={item.id} className="testimonial-card">
            <img src={item.img} />

            <div className="rating">
              {"⭐".repeat(item.rating)}
            </div>

            <p>{item.text}</p>

            <small>{item.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}