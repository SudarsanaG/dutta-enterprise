import Header from './components/Header';
import HomePage from './HomePage/page';
import AboutPage from './about/page';
import Services from './services/page';
import Sectors from './sectors/page';
import Head from 'next/head';
import Contact from './contact/page';

export default function Home() {
    return (
        <main>
            <Header/>
            <HomePage/>
            <AboutPage/>
            <Services/>
            <Sectors/>
            <Contact/>
            
        </main>
    )
}