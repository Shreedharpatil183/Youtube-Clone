import './App.css';
import Header from './Header';
import Recommended from './Recommended';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    // BEM class naming conversation
    <div className="app">
      {/* <h1>Today We will be Building Youtube Clone</h1> */}
        <Router>
        <Header></Header>
          <Switch>
            <Route path="/search/:searchTerm">
            <div className="app__page">
               {/* Sidebar => <Sidebar> */}
                <Sidebar></Sidebar>
                <SearchPage></SearchPage>
               
            </div>
            </Route>
            <Route path="/">
            <div className="app__page">
               {/* Sidebar => <Sidebar> */}
                <Sidebar></Sidebar>
               {/* Recommended Videos =>  <Recomded Component>*/}
               <Recommended></Recommended>
            </div>
            </Route>
          </Switch>
        </Router>

      {/* Header => <Header> */}
      

     
     

      

    </div>
  );
}

export default App;
