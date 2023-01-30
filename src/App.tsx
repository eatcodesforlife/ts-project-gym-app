import { useState } from 'react'
import Layout from './pages/Layout'
import { NavMenuLinks } from './shared/types'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import SignInPage from './pages/SigninPage'
import MessageSent from './pages/MessageSent'
import PageNotFound from './pages/PageNotFound'

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
          <Route path='/pages/messagesent' element={<MessageSent />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
  )
}



export default App
