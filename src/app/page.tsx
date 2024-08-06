import Header from './components/Header';
import HomePage from './HomePage/page';
import AboutPage from './about/page';

export default function Home() {
    return (
        <main>
            <Header/>
            <HomePage/>
            <AboutPage/>
            
        </main>
    )
}