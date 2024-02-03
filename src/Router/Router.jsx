import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from '../Pages/Home'
import About from '../Pages/About/About'
import Shop from '../Pages/Shop/Shop'
import Articles from '../Pages/Articles/Articles'
import Contact from '../Pages/Contact/Contact'
import NotFound from '../Pages/NotFound/NotFound'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'


export default function Router() {
    return (
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} /> 
        </Routes>
        <Footer />
        </BrowserRouter>
    ) 
}
