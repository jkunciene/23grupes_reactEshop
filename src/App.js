import {   BrowserRouter as Router } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import ProductList from './components/ProductList';
import MyHeader from "./components/MyHeader";

const App = () => {
  return (
    <Router>
      <Container>
        <MyHeader/>
        <ProductList />
      </Container>
    </Router>
  )
}

export default App

