// import React, { useEffect} from "react";
// import { Container } from "react-bootstrap";
// import axios from "axios";
// import { Row, Col, Card } from "react-bootstrap";
// import Product from "../Product";
// import { useDispatch, useSelector } from "react-redux";
// import { listProducts } from "../../actions/ProductActions";
// import Loader from "../Loader";
// import Message from "../Message";

// function HomeScreen() {
//   const dispatch = useDispatch();
//   const productsList = useSelector((state) => state.productsList);
//   const { error, loading, products } = productsList;

//   useEffect(() => {
//     dispatch(listProducts());
//   }, [dispatch]);


//   return (
//   <Container>
//     <h2 style={{ textAlign: "center" }}>به رستوران گلشن خوش آمدید</h2>
//     <br /><br />

//     {loading ? (
//       <Loader />
//     ) : error ? (
//       <Message variant="danger">{error}</Message>
//     ) : (
//       <Row>
//         {products.map((product) => (
//           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//             <Product product={product} />
//           </Col>
//         ))}
//       </Row>
//     )}
//   </Container>
// );

// }

// export default HomeScreen;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/ProductActions";
import Loader from "../Loader";
import Message from "../Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList;

  // State to store logged-in user info
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    dispatch(listProducts());

    // Get user info from localStorage
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, [dispatch]);

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>به رستوران گلشن خوش آمدید</h2>
      <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
        {userInfo ? `Welcome, ${userInfo.username}` : "YOU ARE NOT LOGGED IN"}
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
