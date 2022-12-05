//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import StateExample from './StateExample'
//import DemoExample from './DemoExample'
//import Events from './Events'
//import JSX from './JSX'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App(){
  return(
    <section>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
     {/*<StateExample/>
      <JSX/>
      <Events/>
      <FuncProps carname="Rolls Royce" year="1998"/>*/}
      {/*<DemoExample name="Ammulu"age="18"/>
      <PropsExample name="Ammulu" age="18"/>
          <PropsExample name="Ammu" age="20"/>*/}
      {/*<p>Go to hell</p>
            <h1>Heading tag</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9O21otcibBfpaqFkA1iafXfXz7XK8xK9e7A&usqp=CAU" alt="tom and jerry"/>
            <ClassComponent/>*/}
    </section>
      )
}


export default App