import { FaEgg, FaDrumstickBite, FaLeaf, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page">
      <h1>About Our Chicken Farm</h1>
      <p>
        Welcome to **Chicken Farm**, where we provide fresh, organic eggs and high-quality poultry.
        Our farm is dedicated to sustainable and ethical farming practices to ensure the best quality for our customers.
      </p>

      <div className="about-features">
        <div className="feature">
          <FaEgg className="icon" />
          <h3>Fresh Eggs</h3>
          <p>We deliver farm-fresh eggs daily, rich in nutrients and free from chemicals.</p>
        </div>

        <div className="feature">
          <FaDrumstickBite className="icon" />
          <h3>Organic Chickens</h3>
          <p>Our chickens are raised naturally, ensuring great taste and high quality.</p>
        </div>

        <div className="feature">
          <FaLeaf className="icon" />
          <h3>Sustainable Farming</h3>
          <p>We prioritize eco-friendly farming methods to protect the environment.</p>
        </div>

        <div className="feature">
          <FaUsers className="icon" />
          <h3>Customer Satisfaction</h3>
          <p>Your satisfaction is our priority. We ensure the best service and quality products.</p>
        </div>
      </div>
    </div>
  );
}


