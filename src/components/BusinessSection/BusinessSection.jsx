import { useState } from "react";
import { images } from "../helpers/images";
import { SectionAnchor } from "../SectionAnchor/SectionAnchor.styled";
import BusinessModal from "./BusinessModal";

import {
  BusinessGallery,
  BusinessHead,
  BusinessPic,
  BusinessSectionWrap,
} from "./BusinessSection.styled";

export default function BusinessSection({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImg = images[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <BusinessSectionWrap>
      <SectionAnchor id={id} />
      <BusinessHead>
        <h3>This is what we do</h3>
        <h2>Business Cases</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </BusinessHead>
      <BusinessGallery>
        {images.map((item, index) => {
          return (
            <BusinessPic key={index} onClick={() => handleClick(index)}>
              <picture>
                <source
                  srcSet={`${item.webp} 1x, ${item.webp2} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${item.jpg} 1x, ${item.jpg2} 2x`}
                  type="image/jpeg"
                />
                <img src={item.img} alt={item.alt} />
              </picture>
            </BusinessPic>
          );
        })}
      </BusinessGallery>
      <BusinessModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        currentImg={currentImg}
        onNext={handleNext}
        onPrev={handlePrev}
        hasPrev={currentIndex > 0}
        hasNext={currentIndex < images.length - 1}
      />
    </BusinessSectionWrap>
  );
}
