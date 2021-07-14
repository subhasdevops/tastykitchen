import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RestaurentDetails from './components/RestaurentDetails'
import Cart from './components/Cart'
import PaymentSuccess from './components/PaymentSuccess'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/restaurentDetails/:id"
        component={RestaurentDetails}
      />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <ProtectedRoute
        exact
        path="/cart/payment-success"
        component={PaymentSuccess}
      />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
