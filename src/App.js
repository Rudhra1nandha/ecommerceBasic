import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import {  Switch, Route} from "react-router-dom";
import Product from "./component/product";
import Cart from './component/Cart';
import About from "./component/about";
import Contact from "./component/contact";
import Login from "./component/login";

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Home />
      </Switch>
    </>
  );
}

export default App;
