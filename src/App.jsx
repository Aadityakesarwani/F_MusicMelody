
import CTA from "./components/Cta"
import FAQ from "./components/Faq"
import Footer from "./components/Footer"
import Generator from "./components/Generator"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
// import Hero from "./components/Hero"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <Header />
      <main className="flex-1">
      <Hero />
        <Generator />
        <HowItWorks/>
        <FAQ />
        <CTA />
      </main>
      <Footer/>
    </div>
  )
}

export default App