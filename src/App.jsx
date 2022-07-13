import './App.css';
import Home from './components/home/Home';
import SalesProcess from './components/sales_process/salesProcess';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'
import HomeFooter from './components/home_footer/homeFooter';

function App() {
  return (
    <>
      <Home />
      <HomeFooter />
      <SalesProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
