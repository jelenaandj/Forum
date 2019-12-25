import React,{useState} from 'react';
import './App.css';
import Header from './layout/Header';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './layout/Content';
import Footer from './layout/Footer';

export const UserContext=React.createContext()


function App() {
//setujem usera u loginu
  const [user,setUser] = useState()

console.log(user)


  return (
    <div className='app'>
      <UserContext.Provider value={user}>

      <Router>
      <Header user={user} logedIn={user} setUser={setUser}/>
      <Content setUser={setUser} user={user}/>
      <Footer/>
      </Router>

      </UserContext.Provider>
     
    </div>
  );
}

export default App;
