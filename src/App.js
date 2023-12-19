import Header from './component/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Card from './pages/Card';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Category from './pages/Category';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/card' element={<Card />}></Route>
          <Route path='/category/:id' element={<Category />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='*' element={"Not Found Page"}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
