import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import User from './components/user/User.jsx';
import Github, { githubInfoLoader } from './components/github/Github.jsx';

const router= createBrowserRouter(
  createRoutesFromElements(
    // / means the path will match the root url, no path means home componenet will be in root url itself inside the layout, layout component is rendered when user visits the root url, path about means it matches the about path relative to its parent 
   <Route path="/" element={<Layout/>}> 
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="user" element={<User/>}>
      <Route path=":userid" element={<User/>} />
      </Route>
      <Route loader={githubInfoLoader}
      path=":github" element={<Github/>}/>
      <Route path="*" element={<div>Not Found</div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
