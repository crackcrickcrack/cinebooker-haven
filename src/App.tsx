import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import MovieDetails from "@/pages/MovieDetails"
import Promotions from "@/pages/Promotions"
import ComingSoon from "@/pages/ComingSoon"
import Bookings from "@/pages/Bookings"
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cinebooker-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App