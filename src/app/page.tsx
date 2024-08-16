import Header from './components/Header';
import HomePage from './HomePage/page';
import AboutPage from './about/page';
import Services from './services/page';
export default function Home() {
    return (
        <main>
            <Header/>
            <HomePage/>
            <AboutPage/>
            <Services/>
        </main>
    )
}