import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/ProductActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}> به رستوران گلشن خوش آمدید </h2>
      <br />
      <br />

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <div style={{ border:"2px solid black"}}>
            <Card className='my-3 p-3 rounded'  style={{paddingTop : "0px"}}>
            <img src={`http://127.0.0.1:8000${product.image}`} alt="burger" />
            </Card>
            <br />
            <h3 style={{textAlign : 'center'}}>{product.productname}</h3>
            <h6 style={{textAlign : 'center'}}>{product.category}</h6>
            <h6 style={{textAlign : 'center'}}>{product.price}</h6>
            <h6 style={{textAlign : 'center' , padding: '50px'}}>{product.productinfo}</h6>
            </div>
            <br /><br /><br /><br /> */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
