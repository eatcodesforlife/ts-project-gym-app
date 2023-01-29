import { useState } from 'react'
import Layout from './pages/Layout'
import { NavMenuLinks } from './shared/types'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import SignInPage from './pages/SigninPage'

function App() {
  const [ selectedPage, setSelectedPage ] = useState<NavMenuLinks>(NavMenuLinks.Home)
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>}>
            <Route index element={<Home selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>} />
          </Route>
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/signin' element={<SignInPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}



export default App
