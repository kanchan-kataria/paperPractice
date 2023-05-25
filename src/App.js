import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import OrderSummary from './Components/OrderSummary'; 
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound'
import Product from './Components/Product'
import Featureproduct from './Components/FeatureProduct';
import NewProduct from './Components/NewProduct';
import User from './Components/users';
import UserDetail from './Components/userDetail';
import {Routes , Route} from 'react-router-dom'
import Counter from './ComponentsPropsBasic/Counter';
import Greeting from './ComponentsPropsBasic/Greeting';
import UseStateOne from './Hooks/useStateOne'
import UseStatePrev from './Hooks/useStatePrev'
import UseStateObject from './Hooks/useStateobject'
import UseEffectHook from  './Hooks/UseEffectHook'
import LifeCycle from './Hooks/LifeCycle'
import UseContextA from './Hooks/UseContext';
function App() {
 
  // const user = React.createContext();
  // const channel =React.createContext();
  return (
    <>
        {/* <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='order-summary' element={<OrderSummary/>}/>
          <Route path='product' element={<Product/>}>
              <Route index element={<Featureproduct/>}/> 
              <Route path='feature' element={<Featureproduct/>}/>
              <Route path='new' element={<NewProduct/>}/>
          </Route>
          <Route path='user' element={<User/>}>
              <Route path=':Id' element={<UserDetail/>}/>

          </Route>
          <Route path='/*' element={<NotFound/>}/>


        </Routes>
    
     */}


     {/* <Greeting name='Kanchan kataria'>
      hello world
      <p>hello paragraph</p>
      <button> press me </button>
     </Greeting> */}

    
     {/* <Counter  /> */}

     <LifeCycle/>
    </>
    
  )
}

export default App;
