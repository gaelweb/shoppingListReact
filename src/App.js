import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar.jsx';
import ShopList from './views/ShopList.jsx';
import Spend from './components/Spend/Spend.jsx';

function App() {
  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
              <Spend />
            </Route>
            <Route path="/shoppingList">
              <ShopList />
            </Route>
          </Switch>
        </Router>
      </div>
  );

  function Home(){
    return <h2>Home</h2>
  }
}

export default App;
