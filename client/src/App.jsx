import Blog from "./views/Blog.jsx";
import notFound from "./views/404.jsx";
import Post from "./views/Post.jsx";
import Sidebar from "./views/Sidebar.jsx";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact component={Sidebar}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/post/:id" exact component={Post}></Route>
        <Route path="/" component={notFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
