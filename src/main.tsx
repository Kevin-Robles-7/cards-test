import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'tailwindcss/tailwind.css'
import ContentCategory from './components/contentCategory/ContentCategory.tsx';
import ContentDetails from './components/contentDetails/ContentDetails.tsx';
import Login from './components/login/Login.tsx'
import Home from './components/home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login/>
    <Home/>
    <ContentCategory/>
    <ContentDetails/>
  </React.StrictMode>,
)
