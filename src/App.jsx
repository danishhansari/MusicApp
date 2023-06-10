import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience';
import Download from './components/Download';
import Search from './components/Search';
import Footer from './components/Footer'
import './index.css'
import "cal-sans";
function App() {
  return (
    <div className='App text-white overflow-hidden'>
    <Header />
    <Hero />
    <Experience />
    <Search />
    <Download />
    <Footer />
    </div>
  )
}

export default App
