import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaTags,
  FaUserShield,
  FaShippingFast,
  FaUndoAlt,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles/About.css";

function About() {
  const testimonials = useMemo(
    () => [
      {
        name: "Amina K.",
        title: "Verified Buyer",
        quote:
          "Quality feels premium and the delivery was faster than I expected. Everything matched the photos perfectly.",
        rating: 5,
        img: "/images/testimonials/amina.jpg"
      },
      {
        name: "Daniel M.",
        title: "Repeat Customer",
        quote:
          "The pricing is fair for what you get. I’ve ordered twice now and both experiences were smooth and reliable.",
        rating: 5,
        img: "/images/testimonials/daniel.jpg"
      },
      {
        name: "Wanjiku S.",
        title: "Verified Buyer",
        quote:
          "Customer support was quick and helpful. Returns were easy, but I ended up keeping the item—loved it.",
        rating: 5,
        img: "/images/testimonials/wanjiku.jpg"
      },
      {
        name: "Brian T.",
        title: "Verified Buyer",
        quote:
          "Clean design, great finish, and it holds up in everyday use. Exactly what I wanted—no regrets.",
        rating: 5,
        img: "/images/testimonials/brian.jpg"
      },
      {
        name: "Fatma N.",
        title: "Verified Buyer",
        quote:
          "The packaging was neat and everything felt carefully curated. The quality is genuinely impressive.",
        rating: 5,
        img: "/images/testimonials/fatma.jpg"
      },
      {
        name: "Kevin R.",
        title: "Verified Buyer",
        quote:
          "Fast shipping and the product looks even better in person. Great experience from start to finish.",
        rating: 5,
        img: "/images/testimonials/kevin.jpg"
      },
      {
        name: "Linet O.",
        title: "Repeat Customer",
        quote:
          "I love how simple and clean the whole shopping experience is. The pieces feel built for daily life.",
        rating: 5,
        img: "/images/testimonials/linet.jpg"
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = testimonials.length;

  const goTo = (idx) => setActiveIndex((idx + total) % total);
  const nextSlide = () => goTo(activeIndex + 1);
  const prevSlide = () => goTo(activeIndex - 1);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, total]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  // Swipe handlers (mobile + touch devices)
  const onTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 45;

    if (delta > threshold) nextSlide();
    if (delta < -threshold) prevSlide();

    setIsPaused(false);
  };

  return (
    <>
      <Header />
      <div className="about-us-container">
        {/* Our Story */}
        <div className="our-story">
          <div className="our-story-txt">
            <h2 className="center-aligned">Our Story</h2>
            <p className="message">
              We created this brand to make quality simple and shopping effortless.
              Every product is thoughtfully designed, responsibly made, and priced
              with honesty — no shortcuts, no unnecessary markups.
              <br />
              <br />
              Our focus is on delivering pieces that perform, last, and add real
              value to your everyday life, so you can shop with confidence and come
              back knowing you made the right choice.
            </p>
          </div>

          <div className="our-story-img">
            <div className="actual-story-img" aria-hidden="true"></div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-us">
          <h2 className="center-aligned">Why Choose Us?</h2>

          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="icon-wrapper">
                <FaStar />
              </div>
              <h3>Premium Quality</h3>
              <p>
                Every product is carefully designed and tested to meet high standards of durability,
                performance, and finish.
              </p>
            </div>

            <div className="why-us-card">
              <div className="icon-wrapper">
                <FaTags />
              </div>
              <h3>Honest Pricing</h3>
              <p>
                We work directly with trusted partners to remove unnecessary markups and deliver real value.
              </p>
            </div>

            <div className="why-us-card">
              <div className="icon-wrapper">
                <FaUserShield />
              </div>
              <h3>Customer-First Approach</h3>
              <p>
                Your feedback shapes our products, ensuring we focus on what truly matters to you.
              </p>
            </div>

            <div className="why-us-card">
              <div className="icon-wrapper">
                <FaShippingFast />
              </div>
              <h3>Fast & Reliable Shipping</h3>
              <p>
                Orders are processed quickly and shipped with trusted carriers for a smooth experience.
              </p>
            </div>

            <div className="why-us-card">
              <div className="icon-wrapper">
                <FaUndoAlt />
              </div>
              <h3>Easy Returns</h3>
              <p>
                Shop with confidence knowing we offer hassle-free returns and responsive support.
              </p>
            </div>

            <div className="why-us-card">
              <div className="icon-wrapper">
                <FaCheckCircle />
              </div>
              <h3>Built for Everyday Use</h3>
              <p>
                Our products are made to be practical, stylish, and dependable for real-life use.
              </p>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <section
            className="testimonials"
            aria-label="Customer testimonials"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className="testimonials-header">
              <h2 className="center-aligned testimonials-title">What Customers Say</h2>
              <p className="testimonials-subtitle">
                Swipe left or right on mobile to see more reviews.
              </p>
            </div>

            <div className="carousel-wrapper">
              <div
                className="carousel-viewport"
                role="region"
                aria-live="polite"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((t, idx) => (
                    <article className="testimonial-card" key={`${t.name}-${idx}`}>
                      <div className="testimonial-top">
                        <div className="testimonial-avatar">
                          <img
                            src={t.img}
                            alt={`${t.name} profile`}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <span className="testimonial-avatar-fallback" aria-hidden="true">
                            {t.name?.slice(0, 1)}
                          </span>
                        </div>

                        <div className="testimonial-meta">
                          <p className="testimonial-name">{t.name}</p>
                          <p className="testimonial-title">{t.title}</p>

                          <div className="testimonial-rating" aria-label={`${t.rating} out of 5 stars`}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <FaStar
                                key={i}
                                className={`star ${i < t.rating ? "filled" : "empty"}`}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="testimonial-quote-icon" aria-hidden="true">
                          <FaQuoteLeft />
                        </div>
                      </div>

                      <p className="testimonial-text">“{t.quote}”</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Controls: visible on tablet/desktop only */}
              <div className="carousel-controls" aria-label="Testimonials controls">
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>

                <div className="carousel-dots" aria-label="Testimonials navigation">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`dot ${i === activeIndex ? "active" : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="carousel-btn"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="about-cta" aria-label="Shop call to action">
            <div className="cta-card">
              <div>
                <h3>Ready to find your next favorite?</h3>
                <p>Browse our latest collection and shop with confidence.</p>
              </div>
              <a className="cta-btn" href="/shop">
                Shop Now
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
