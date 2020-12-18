import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const SliderData = [
  {
    image: 'https://www.tokkoro.com/picsup/2713778-range-rover-4k-pc-desktop-wallpaper-hd.jpg'
  },
  {
    image: 'https://www.tokkoro.com/picsup/2632189-range-rover-velar-4k-wallpaper-beautiful.jpg'
  },
  {
    image: 'https://images.unsplash.com/flagged/photo-1557225586-c21e48488706?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2690&q=80'
  },
  {
    image: 'https://images.unsplash.com/photo-1539703061-473d7576d772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80'
  }
];

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="container">
      <section className="slider">
        <FaArrowAltCircleLeft className="l-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="r-arrow" onClick={nextSlide} />
        {
          SliderData.map((slide, index) => {
            return (
              <div key={index} className={index === current ? 'slide active' : 'slide'}>
                {index === current && (<img src={slide.image} alt="Range Rover cars" className="image" />)}
              </div>
            );
          })
        }
      </section>
    </div>

  );
};

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Carousel slides={SliderData} />
      </div>
    );
  }
}
