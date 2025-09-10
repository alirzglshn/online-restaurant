// import React, { useEffect } from "react";
// import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
// import {
//   Row,
//   Col,
//   Image,
//   ListGroup,
//   Button,
//   Card,
//   Form,
//   Container,
// } from "react-bootstrap";
// import { addToCart, removeFromCart } from "../../actions/CartActions";
// import { useDispatch, useSelector } from "react-redux";

// function CartScreen() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const productId = id;
//   const qty = location.search
//     ? Number(new URLSearchParams(location.search).get("qty"))
//     : 1;

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   // Get user info directly from localStorage
//   const userInfo = JSON.parse(localStorage.getItem("userInfo")); // null if not logged in

//   useEffect(() => {
//     if (productId) {
//       dispatch(addToCart(productId, qty));
//     }
//   }, [dispatch, productId, qty]);

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const checkoutHandler = () => {
//     if (userInfo) {
//       // User is logged in → go to checkout page (placeholder)
//       navigate("/checkout");
//     } else {
//       // User not logged in → go to login page first
//       navigate("/login?redirect=checkout");
//     }
//   };

//   return (
//     <>
//       <h1>Cart Items</h1>
//       {cartItems.length === 0 ? (
//         <div>
//           Your cart is empty <Link to="/">Go Back</Link>
//         </div>
//       ) : (
//         <Row>
//           <Col md={8}>
//             <Container>
//               <ListGroup variant="flush">
//                 {cartItems.map((item) => (
//                   <ListGroup.Item key={item.product}>
//                     <Row className="align-items-center">
//                       <Col md={2}>
//                         <Image
//                           src={`http://127.0.0.1:8000${item.image}`}
//                           alt={item.productname}
//                           fluid
//                           rounded
//                         />
//                       </Col>
//                       <Col md={3}>
//                         <Link to={`/product/${item.product}`}>
//                           {item.productname}
//                         </Link>
//                       </Col>
//                       <Col md={2}>{item.price} هزار تومن </Col>
//                       <Col md={3}>
//                         <Form.Control
//                           as="select"
//                           value={item.qty}
//                           onChange={(e) =>
//                             dispatch(
//                               addToCart(item.product, Number(e.target.value))
//                             )
//                           }
//                         >
//                           {[...Array(item.countInStock).keys()].map((x) => (
//                             <option value={x + 1} key={x + 1}>
//                               {x + 1}
//                             </option>
//                           ))}
//                         </Form.Control>
//                       </Col>
//                       <Col md={1}>
//                         <Button
//                           type="button"
//                           variant="light"
//                           onClick={() => removeFromCartHandler(item.product)}
//                         >
//                           <i className="fas fa-trash"></i>
//                         </Button>
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//                 ))}
//               </ListGroup>
//             </Container>
//           </Col>

//           <Col md={4}>
//             <Card>
//               <ListGroup variant="flush">
//                 <ListGroup.Item>
//                   <h2>
//                     Subtotal (
//                     {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
//                   </h2>
//                   {cartItems
//                     .reduce((acc, item) => acc + item.qty * item.price, 0)
//                     .toFixed(2)}{" "}
//                   تومان
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <Button
//                     type="button"
//                     className="btn-block btn-success"
//                     disabled={cartItems.length === 0}
//                     onClick={checkoutHandler}
//                   >
//                     Proceed To Checkout
//                   </Button>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card>
//           </Col>
//         </Row>
//       )}
//     </>
//   );
// }

// export default CartScreen;



import React, { useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
  Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/CartActions';

function CartScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const productId = id;
  const qty = location.search
    ? Number(new URLSearchParams(location.search).get('qty'))
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (userInfo) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=checkout');
    }
  };

  return (
    <>
      <h1>Cart Items</h1>
      {cartItems.length === 0 ? (
        <div>
          Your cart is empty <Link to="/">Go Back</Link>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <Container>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <Image
                          src={`http://127.0.0.1:8000${item.image}`}
                          alt={item.productname}
                          fluid
                          rounded
                        />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>
                          {item.productname}
                        </Link>
                      </Col>
                      <Col md={2}>{item.price} هزار تومن </Col>
                      <Col md={3}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option value={x + 1} key={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={1}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h2>
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}{' '}
                  تومان
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block btn-success"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default CartScreen;