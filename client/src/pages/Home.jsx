import video from "../assets/videos/video.mp4";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home-page">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="description">
        <div className="product-desc">
          <p>Welcome to our organic chicken farm, where we provide fresh, high-quality eggs and poultry straight from our farm to your table.</p>
          <p>Experience the best in farm-raised goodness with healthy, naturally fed chickens.</p>
          <Link to="products">Visit All Products</Link>
        </div>

      </div>
    </div>

  );
}


