/* eslint-disable react/no-unescaped-entities */
import man from "../../assets/images/Testimonials_img/testimonial_man.jpg";
import road from "../../assets/images/Testimonials_img/Road.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonial.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
  };

  return (
    <div className="testimonials_container">
      <div className="flex testimonials_inner_content">
        <div className="testimonials_titles">
          <h4 data-aos="fade-down" >Find out Now</h4>
          <h1>
            User Testimonials: <br /> What Our Customers Are Saying
          </h1>
          <button data-aos="fade-left" >Buy Now</button>
        </div>

        <div className="testimonials_boxs slider-container">
          <Slider {...settings}>
            <div className="testimonials_single_box">
              <h2>"A Game-Changer in the Car Buying Arena"</h2>
              <p>
                "One of the aspects that impressed me the most was the diverse
                range of vehicles available for auction. Whether you're in the
                market for a sleek sedan, a robust SUV, or a vintage classic."
              </p>
              <div className="flex testimonials_img">
                <img src={man} alt="Man" />
                <div>
                  <h4>JONY JONY</h4>
                  <p>Japan</p>
                </div>
              </div>
            </div>
            <div className="testimonials_single_box">
              <h2>"A Game-Changer in the Car Buying Arena"</h2>
              <p>
              "One of the aspects that impressed me the most was the diverse
                range of vehicles available for auction. Whether you're in the
                market for a sleek sedan, a robust SUV, or a vintage classic."
              </p>
              <div className="flex testimonials_img">
                <img src={man} alt="Man" />
                <div>
                  <h4>JONY JONY</h4>
                  <p>Japan</p>
                </div>
              </div>
            </div>
            <div className="testimonials_single_box">
              <h2>"A Game-Changer in the Car Buying Arena"</h2>
              <p>
              "One of the aspects that impressed me the most was the diverse
                range of vehicles available for auction. Whether you're in the
                market for a sleek sedan, a robust SUV, or a vintage classic."
              </p>
              <div className="flex testimonials_img">
                <img src={man} alt="Man" />
                <div>
                  <h4>JONY JONY</h4>
                  <p>Japan</p>
                </div>
              </div>
            </div>
            <div className="testimonials_single_box">
              <h2>"A Game-Changer in the Car Buying Arena"</h2>
              <p>
              "One of the aspects that impressed me the most was the diverse
                range of vehicles available for auction. Whether you're in the
                market for a sleek sedan, a robust SUV, or a vintage classic."
              </p>
              <div className="flex testimonials_img">
                <img src={man} alt="Man" />
                <div>
                  <h4>JONY JONY</h4>
                  <p>Japan</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
