import { Backdrop } from "../Modal/Modal.styled";

import prevArr from "../../images/gallery/prev.png";
import nextArr from "../../images/gallery/next.png";

import close from "../../images/gallery/close.png";
import {
  BusinessImg,
  BusinessImgWrap,
  BusinessModalWrap,
  Close,
  Next,
  Prev,
} from "./BusinessSection.styled";

export default function BusinessModal({
  isOpen,
  currentImg,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) {
  return (
    <Backdrop
      style={{
        transition: "opacity 250ms ease",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? undefined : "none",
      }}
    >
      <BusinessModalWrap>
        <Close
          onClick={() => {
            onClose();
          }}
        >
          <img src={close} alt="close" />
        </Close>
        {hasPrev && (
          <Prev onClick={onPrev}>
            <img src={prevArr} alt="prev arrow" />
          </Prev>
        )}
        <BusinessImgWrap>
          <picture>
            <source
              srcSet={`${currentImg.webp} 1x, ${currentImg.webp2} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${currentImg.jpg} 1x, ${currentImg.jpg2} 2x`}
              type="image/jpeg"
            />
            <BusinessImg src={currentImg.jpg} alt={currentImg.alt} />
          </picture>
        </BusinessImgWrap>
        {hasNext && (
          <Next onClick={onNext}>
            <img src={nextArr} alt="next arrow" />
          </Next>
        )}
      </BusinessModalWrap>
    </Backdrop>
  );
}
