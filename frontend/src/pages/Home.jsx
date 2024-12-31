import Hero from '../components/Hero'
import FeaturedMaps from '../components/FeaturedMaps'
import About from '../components/About'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <FeaturedMaps />
      <About />
    </div>
  )
}

