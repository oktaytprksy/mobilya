import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Gallery } from "@/components/Gallery"
import { Contact } from "@/components/Contact"

function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="galeri" element={<Gallery />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
