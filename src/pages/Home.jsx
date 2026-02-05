import Header from "../components/Header.jsx"
import Hero from "../components/Hero.jsx"
import Content from "../components/Content.jsx"
import Footer from "../components/Footer.jsx"

function Home () {
    return (
        <>
        <Header />
        <main>
            <Hero />
            <Content />
        </main>
        <Footer />
        </>
    )
}

export default Home