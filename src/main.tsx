import React from 'react'
import ReactDOM from 'react-dom/client'
{/*import App from './App.tsx'*/}
import './index.css'
import 'tailwindcss/tailwind.css'
import ContentCategory from './components/contentCategory/ContentCategory.tsx';
{/*import Login from './components/login/Login.tsx'*/}
{/*import Home from './components/home/Home.tsx'*/}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Login/>*/}
    {/*<Home/>*/}
    <ContentCategory/>
  </React.StrictMode>,
)
