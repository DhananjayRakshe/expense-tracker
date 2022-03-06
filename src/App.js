import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import AddExpense from './pages/add-expenses';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>
      <div>Footer</div>
    </Router>
  );
}

export default App;
