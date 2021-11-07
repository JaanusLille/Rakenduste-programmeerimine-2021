import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import { Layout } from 'antd';
import Posts from "./pages/Posts";
import Login from "./components/Login";
import Header from "./components/Header";
import ViewPosts from "./pages/ViewPosts";
import Register from "./components/Register";
import EditPost from "./pages/EditPosts";
import "antd/dist/antd.css";

function App() {
  const { Content, Footer } = Layout;
  return (
    <BrowserRouter>
      <Header>
        <Route path="/" component={Header}/>
      </Header>

      <Content style={{padding: '50px'}}>
          <div style={{background: '#fff', height: '100%', padding: '20px', backgroundColor: "lightblue"}}>
      <Switch>
        <Route exact path="/" component={ShowMagic} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/viewposts" component={ViewPosts}/>
        <Route exact path="/edit:handle" component={EditPost}/>
      </Switch>
      </div>
        </Content>
        <Footer theme="dark" style={{textAlign: 'center'}}> Hello, I am a footer</Footer>
    </BrowserRouter>
  );
}

export default App;
