import { useState } from 'react'
import Navbar from './components/Navbar'
import Carrusel from './components/Carrusel'
import Footer from './components/Footer'
import CTA from './components/CTA'
import Form from './components/Form'
import Article from './components/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-slate-900">
      <Navbar />
      <Carrusel />
      <Article />
      <CTA />
      <Form />
      <Footer />
    </div>
  )
}

export default App
