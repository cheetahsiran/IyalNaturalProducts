import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';

import Styles from  './App.module.scss';
import Details from './Pages/Details/Details';
import Layout from './Pages/Layout/Layout';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import Container from '@mui/material/Container'
function App() {
  return (
    <Container maxWidth="lg">
    <Layout>
      <Switch>
      <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/Products" exact >
          <Products />
        </Route>
        <Route path="/Details" exact >
          <Details />
        </Route>
      </Switch>
    </Layout>
    </Container>
  );
}

export default App;
