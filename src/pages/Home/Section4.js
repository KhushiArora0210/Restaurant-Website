import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              There’s something magical about a good burger—it’s more than just food; it’s an experience. 
              Whether you’re out with friends, on a casual date, or enjoying a family meal, a great burger 
              becomes the centerpiece of connection. It sparks conversations, shared laughs, and the kind of 
              comfort that only delicious food can provide. A juicy burger, fresh off the grill, has the power 
              to turn a regular moment into something special. It’s familiar yet exciting, simple yet satisfying. 
              No matter your background, tastes, or mood—a good burger speaks everyone’s language.
              
              Because when the grill’s hot, the flavors are bold, and the company’s good… that’s when the best
              memories are made. 🍔❤️
               
              </p>
              <ul>
                <li>
                  <p>
                  "Keep Calm and Burger On."
                  </p>
                </li>
                <li>
                  <p>"Juicy. Cheesy. Legendary."</p>
                </li>
                <li>
                  <p>
                  "Where Burgers Meet Their Best Life!"
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
