// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Product from "../Product";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../../actions/ProductActions";
// import Loader from "../Loader";
// import Message from "../Message";

// function HomeScreen() {
//   const dispatch = useDispatch();
//   const productsList = useSelector((state) => state.productsList);
//   const { error, loading, products } = productsList;

//   // State to store logged-in user info
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     dispatch(listProducts());

//     // Function to update userInfo from localStorage
//     const updateUserInfo = () => {
//       const storedUser = localStorage.getItem("userInfo");
//       setUserInfo(storedUser ? JSON.parse(storedUser) : null);
//     };

//     // Initial load
//     updateUserInfo();

//     // Listen for login/logout events
//     window.addEventListener("userLogin", updateUserInfo);
//     window.addEventListener("userLogout", updateUserInfo);

//     return () => {
//       window.removeEventListener("userLogin", updateUserInfo);
//       window.removeEventListener("userLogout", updateUserInfo);
//     };
//   }, [dispatch]);

//   return (
//     <Container>
//       <h2 style={{ textAlign: "center" }}> بهترین فست فود گرگان </h2>
//       <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
//         {userInfo ? `Welcome, ${userInfo.username}` : "YOU ARE NOT LOGGED IN"}
//       </h5>

//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Row>
//           {products.map((product) => (
//             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//               <Product product={product} />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// }

// export default HomeScreen;


import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../Product.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/ProductActions';
import Loader from '../Loader.jsx';
import Message from '../Message';

function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList;
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <h2 style={{ textAlign: 'center' }}> بهترین فست فود گرگان </h2>
      <h5 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {userInfo ? `Welcome, ${userInfo.username}` : 'YOU ARE NOT LOGGED IN'}
      </h5>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomeScreen;
