import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = function () {
    if (index === slides.length - 1) {
      return setIndex(0);
    }
    setIndex((prevState) => prevState + 1);
  };

  const prevSlide = function () {
    if (index === 0) {
      return setIndex(slides.length - 1);
    }
    setIndex((prevState) => prevState - 1);
  };
  // useEffect for outo slides

  useEffect(() => {
    let slider = setInterval(() => {
      if (index === slides.length - 1) {
        return setIndex(0);
      }
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index, slides.length]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {slides.map((item, ItemIndex) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (ItemIndex === index) {
            position = "activeSlide";
          }
          if (
            ItemIndex === index - 1 ||
            (index === 0 && ItemIndex === slides.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
