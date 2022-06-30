import { useEffect, useState } from "react";
import { useContext } from "react";
import img1 from "../../assets/img/about us/img1.png";
import img2 from "../../assets/img/about us/img2.png";
import img3 from "../../assets/img/about us/img3.png";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Loading from "../../components/Loading/Loading";
import { contextProduct } from "../../context/productContext";
import "./AboutUs.css";
const AboutUs = () => {
  const { getProducts, aboutUs, getAboutUs } = useContext(contextProduct);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts();
    getAboutUs();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <BreadCrumb />
      {aboutUs.length > 0
        ? aboutUs.map((item) => (
            <div className="container about_wrapper">
              <div className="about-img-wrapper">
                <div className="about-images">
                  <div>
                    <img className="first-img" src={item.img1} alt="" />
                  </div>

                  <br />
                  <div>
                    <img src={item.img2} alt="" />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={item.img3} alt="" />
                </div>
              </div>
              <div className="about-us-body">
                <div className="about-us-desc">
                  <h2>О нас</h2>
                  <p>{item.aboutUsDesc}</p>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default AboutUs;
