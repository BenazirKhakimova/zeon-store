import { useEffect } from "react";
import { useContext } from "react";
import img1 from "../../assets/img/about us/img1.png";
import img2 from "../../assets/img/about us/img2.png";
import img3 from "../../assets/img/about us/img3.png";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { contextProduct } from "../../context/productContext";
import "./AboutUs.css";
const AboutUs = () => {
  const { getProducts } = useContext(contextProduct);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <BreadCrumb />
      <div className="container about_wrapper">
        <div style={{ display: "flex", gap: "24px" }}>
          <div style={{ gap: "24px" }}>
            <div>
              <img src={img1} alt="" />
            </div>

            <br />
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="about-us-body">
          <div className="about-us-desc">
            <h2>О нас</h2>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
