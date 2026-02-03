import { useEffect, useRef } from "react";
import "./Gallery.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * UNIVERSAL IMAGE FORMATTER
 * Supports:
 * ✅ AWS S3
 * ✅ Google images
 * ✅ CloudFront
 * ✅ Normal URLs
 */
const formatImageUrl = (url) => {
  if (!url) return "";

  // ✅ AWS / CloudFront → return directly
  if (url.includes("amazonaws.com") || url.includes("cloudfront.net")) {
    return url;
  }

  // ✅ Google images
  if (url.includes("googleusercontent")) {
    if (url.includes("=s") || url.includes("=w")) {
      return url;
    }
    return `${url}=s800`;
  }

  // ✅ Everything else
  return url;
};

const Gallery = ({ photos = [] }) => {
  const sliderRef = useRef(null);

  /* AUTO SCROLL */
  useEffect(() => {
    if (!photos.length) return;

    const interval = setInterval(() => {
      sliderRef.current?.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [photos]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  if (!photos.length) return null;

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-wrapper">
        <button className="gallery-arrow left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="gallery-row" ref={sliderRef}>
          {photos.map((img, index) => {
            const formattedUrl = formatImageUrl(img);

            return (
              <div className="gallery-card" key={`${formattedUrl}-${index}`}>
                <img
                  src={formattedUrl}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  draggable={false}
                  onError={(e) => {
                    // fallback image
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=No+Image";
                  }}
                />
              </div>
            );
          })}
        </div>

        <button className="gallery-arrow right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
