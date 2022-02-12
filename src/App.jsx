import { Routes, Route, Link, Outlet } from "react-router-dom";
import store from "./store/store";
import { bugAdded, bugRemoved, bugResolved } from "./actions/actions";
import CakeContainer from "./cakeShop/components/cakeContainer";
import HooksCakeContainer from "./cakeShop/components/HooksCakeContainer";
import IceCreamContainer from "./cakeShop/components/IceCreamContainer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import './index.css';

const unsubscribe = store.subscribe(() => {
  console.log("Store changed! ", store.getState());
});

store.dispatch(bugAdded("Bug 1"));

unsubscribe(); // unsubscribing here
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));

console.log(store.getState());

function App() {
  return (
    <div>
      <Header />
      <div style={{textAlign: 'center'}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/7" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
