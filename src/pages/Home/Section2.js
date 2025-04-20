import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Savor the juiciest, most flavorful patty grilled to perfection, topped with fresh veggies, melty cheese, and our signature sauce—all packed in a toasted bun that hits just right.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `At Tasty Burger, we use only the freshest ingredients—from farm-picked veggies to premium-grade patties—crafted with care to deliver mouthwatering flavor in every bite. No shortcuts, just real, honest food made to satisfy.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Craving something delicious? We bring the burger joy to your door in no time—hot, fresh, and packed with flavor.Because great taste shouldn’t keep you waiting!`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
              Welcome to Tasty Burger – Where Every Bite is a Flavor Explosion!
              Craving something juicy, cheesy, and downright irresistible? You’ve just landed in burger heaven.
              At tasty burger, we craft burgers that go beyond the ordinary—grilled to perfection, loaded with bold
              flavors, and served fresh every single time. From classic favorites to creative twists, each burger is
              a masterpiece stacked with premium ingredients, sizzling patties, and love at first bite.
                
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
