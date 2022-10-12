import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/avatar-1.svg",
    userName: "Shah Tashfiq",
    subtitle: "CEO at HeavyTask",
    review:
      "Mohaiman is an asset to Heavy Task, he's a quick learner and can solve issues when they arise. He's a valuable member of our team, and I highly recommend him.",
  },
  {
    id: 2,
    avatar: "images/avatar-2.svg",
    userName: "Md.Rashedul Hoque Bhuiyan",
    subtitle: "TeamLead at Orko Health Ltd",
    review:
      "I had the opportunity to work with Mr. Mohaiman. He is very sincere and hard working person. He knows his stuff very well. I Highly recommanded him as a Frontend Dev.",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Recommendations" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
