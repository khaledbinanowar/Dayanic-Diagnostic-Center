import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterLogIn from './Pages/Authentication/RegisterLogIn/RegisterLogIn';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Shared/Services/Services';
import Single from './Pages/Shared/Single/Single';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <RegisterLogIn></RegisterLogIn>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/Single/:serviceKey">
              <Single></Single>
            </PrivateRoute>
            <Route path="/Services">
              <Services></Services>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
