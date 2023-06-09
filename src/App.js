import Container from 'react-bootstrap/Container';
import MyHeader from './components/MyHeader';
import About from './components/About';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Container>
      <MyHeader/>
      <About/>
      <ProductList/>
    </Container>
  )
}

export default App

