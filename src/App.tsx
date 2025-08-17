import HeroHeader from "./components/HeroHeader.tsx"
import Input from "./components/Input.tsx"
import MovieCardSection from "./components/MovieCardSection.tsx"

export default function App() {
  return (
    <div className="w-[100dvw] min-h-screen h-auto bg-zinc-800 flex flex-col items-center overflow-x-hidden gap-3">
      <HeroHeader />
      <Input />
      <MovieCardSection />
    </div>
  )
}
