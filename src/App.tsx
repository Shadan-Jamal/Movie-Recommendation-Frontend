import HeroHeader from "./app_components/HeroHeader.tsx"
import Input from "./app_components/Input.tsx"
import MovieCardSection from "./app_components/MovieCardSection.tsx"
import InputGuide from "./app_components/InputGuide.tsx"

export default function App() {
  return (
    <div className="max-w-screen min-h-screen h-auto bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 flex flex-col items-center overflow-x-hidden font-mono relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      <InputGuide />
      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroHeader />
        <Input />
        <MovieCardSection />
      </div>
    </div>
  )
}
