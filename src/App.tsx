import HeroHeader from "./components/HeroHeader.tsx"
import Input from "./components/Input.tsx"

export default function App() {
  return (
    <div className="w-[100dvw] h-screen bg-zinc-800 flex flex-col gap-10">
      <HeroHeader />
      <Input />
    </div>
  )
}
