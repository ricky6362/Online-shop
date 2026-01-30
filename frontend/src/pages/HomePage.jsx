import React, { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./styles/Homepage.css";

function HomePage() {
  const featuredProducts = useMemo(
    () => [
      { id: "f1", name: "Soft Knit Lounge Set", price: 49.99, tag: "New", rating: 4.7, reviews: 128, imageClass: "img-knit" },
      { id: "f2", name: "Minimal Tote Bag", price: 34.0, tag: "Trending", rating: 4.6, reviews: 96, imageClass: "img-tote" },
      { id: "f3", name: "Everyday Sneakers", price: 69.0, tag: "Best Seller", rating: 4.8, reviews: 214, imageClass: "img-sneakers" },
      { id: "f4", name: "Silk Touch Scarf", price: 19.5, tag: "Limited", rating: 4.5, reviews: 72, imageClass: "img-scarf" },
      { id: "f5", name: "Classic Denim Jacket", price: 79.0, tag: "New", rating: 4.7, reviews: 141, imageClass: "img-denim" },
      { id: "f6", name: "Essential Gold Hoops", price: 22.0, tag: "Gift", rating: 4.6, reviews: 88, imageClass: "img-hoops" },
    ],
    []
  );

  const popularProducts = useMemo(
    () => [
      { id: "p1", name: "Relaxed Fit Tee", price: 18.0, tag: "Popular", rating: 4.6, reviews: 302, imageClass: "img-tee" },
      { id: "p2", name: "Everyday Joggers", price: 39.99, tag: "Hot", rating: 4.7, reviews: 265, imageClass: "img-joggers" },
      { id: "p3", name: "Ribbed Crop Top", price: 16.5, tag: "Popular", rating: 4.5, reviews: 198, imageClass: "img-crop" },
      { id: "p4", name: "Lightweight Hoodie", price: 44.0, tag: "Best Seller", rating: 4.8, reviews: 401, imageClass: "img-hoodie" },
      { id: "p5", name: "Clean Fit Cap", price: 14.0, tag: "Trending", rating: 4.4, reviews: 110, imageClass: "img-cap" },
      { id: "p6", name: "Daily Carry Backpack", price: 58.0, tag: "Popular", rating: 4.6, reviews: 177, imageClass: "img-backpack" },
    ],
    []
  );

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push("★");
      else if (i === full && half) stars.push("☆");
      else stars.push("☆");
    }
    return stars.join("");
  };

  return (
    <div className="homepage-page">
      <div className="homepage-container">
        <Header />

        <main className="homepage-content">
          {/* CTA (single text centered + button underneath, 60vh) */}
          <section className="homepage-cta">
            <div className="cta-card cta-centered">
              <h1 className="cta-title">
                Clean essentials. Confident style. Made for everyday life.
              </h1>

              <Link to="/products" className="cta-link cta-button">
                Browse All Products
              </Link>
            </div>
          </section>

          {/* FEATURED */}
          <section className="collection">
            <div className="section-head">
              <h2 className="section-title center-heading">Featured Collection</h2>
              <p className="section-subtitle center-text">
                Handpicked items we can’t stop recommending.
              </p>
            </div>

            <div className="products-grid">
              {featuredProducts.map((p) => (
                <article key={p.id} className="product-card">
                  <div className={`product-image ${p.imageClass}`}>
                    <span className="product-tag">{p.tag}</span>
                  </div>

                  <div className="product-body">
                    <h3 className="product-name">{p.name}</h3>

                    <div className="product-meta">
                      <div className="rating">
                        <span className="stars" aria-hidden="true">
                          {renderStars(p.rating)}
                        </span>
                        <span className="rating-text">
                          {p.rating.toFixed(1)} • {p.reviews} reviews
                        </span>
                      </div>

                      <div className="price">${p.price.toFixed(2)}</div>
                    </div>

                    <div className="product-actions">
                      <button className="btn btn-primary btn-sm" type="button">
                        Add to Cart
                      </button>
                      <button className="btn btn-ghost btn-sm" type="button">
                        Quick View
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* BRAND MISSION (between Featured and Popular) */}
          <section className="brand-mission">
            <div className="mission-card">
              <h2 className="section-title center-heading">Our Mission</h2>
              <p className="mission-text center-text">
                We design modern essentials that feel good, last longer, and fit real life—simple style,
                quality materials, and pieces you’ll reach for every day.
              </p>
            </div>
          </section>

          {/* POPULAR */}
          <section className="collection">
            <div className="section-head">
              <h2 className="section-title center-heading">Popular Collection</h2>
              <p className="section-subtitle center-text">
                Most-loved picks from customers right now.
              </p>
            </div>

            <div className="products-grid">
              {popularProducts.map((p) => (
                <article key={p.id} className="product-card">
                  <div className={`product-image ${p.imageClass}`}>
                    <span className="product-tag">{p.tag}</span>
                  </div>

                  <div className="product-body">
                    <h3 className="product-name">{p.name}</h3>

                    <div className="product-meta">
                      <div className="rating">
                        <span className="stars" aria-hidden="true">
                          {renderStars(p.rating)}
                        </span>
                        <span className="rating-text">
                          {p.rating.toFixed(1)} • {p.reviews} reviews
                        </span>
                      </div>

                      <div className="price">${p.price.toFixed(2)}</div>
                    </div>

                    <div className="product-actions">
                      <button className="btn btn-primary btn-sm" type="button">
                        Add to Cart
                      </button>
                      <button className="btn btn-ghost btn-sm" type="button">
                        Quick View
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;