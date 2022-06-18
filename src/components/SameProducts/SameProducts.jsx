// import React, { useContext, useEffect } from "react";
// import { useState } from "react";
// import Card from "../Card/Card";
// import axios from "axios";
// import { contextProduct } from "../../context/productContext";
// import { useSearchParams } from "react-router-dom";
// const SameProducts = () => {
//   const [limit, setLimit] = useState(8);
//   const { products, getProducts } = useContext(contextProduct);
//   const [searchParams, setSearchParams] = useSearchParams();

//   function randoms(products, limit) {
//     return first(shuffle(products), limit);
//   }

//   function first(products, limit) {
//     return products.slice(0, limit);
//   }

//   function shuffle(products) {
//     let result = [];

//     while (products?.length > 0) {
//       let random = getRandomProducts(0, products.length - 1);
//       let elem = products.splice(random, 1)[0];
//       result.push(elem);
//     }
//     return result;
//   }

//   function getRandomProducts(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   randoms(products, limit);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   useEffect(() => {
//     setSearchParams({ _limit: limit });
//   }, [limit]);
//   useEffect(() => {
//     getProducts();
//   }, [searchParams]);
//   return (
//     <div>
//       {products.map((item) => {
//         <Card item={item} key={item.id} />;
//       })}
//     </div>
//   );
// };

// export default SameProducts;
