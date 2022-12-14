import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Menu from './components/Menu';
import PaginaPadrao from './components/PaginaPadrao';
import Cardapio from './pages/Cardapio';
import Inicio from './pages/Inicio';
import NotFound from './pages/NotFound';
import Sobre from './pages/Sobre';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />} >
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main >
    )
}