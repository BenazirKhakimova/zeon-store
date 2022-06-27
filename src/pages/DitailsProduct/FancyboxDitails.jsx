import { useContext } from "react";
import { contextProduct } from "../../context/productContext";
import Fancybox from "./Fancybox";
import "./styles.css";
export default function FancyboxDitails() {
  const { oneProduct } = useContext(contextProduct);

  return (
    <Fancybox>
      <div className="images">
        <div data-fancybox="gallery" href={oneProduct.image1}>
          <img alt="" src={oneProduct.image1} className="rounded" />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image2}>
          <img alt="" src={oneProduct.image2} className="rounded" />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image3}>
          <img alt="" src={oneProduct.image3} />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image4}>
          <img alt="" src={oneProduct.image4} />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image5}>
          <img alt="" src={oneProduct.image5} />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image6}>
          <img alt="" src={oneProduct.image6} />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image7}>
          <img alt="" src={oneProduct.image7} />
        </div>

        <div data-fancybox="gallery" href={oneProduct.image8}>
          <img alt="" src={oneProduct.image8} />
        </div>
      </div>
    </Fancybox>
  );
}
