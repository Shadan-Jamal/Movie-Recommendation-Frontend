import { useState } from "react"
import { 
    Menubar,
    MenubarContent,
    MenubarTrigger,
    MenubarItem,
    MenubarSeparator,
    MenubarMenu,
} from "@/components/ui/menubar"
import InputGuide from "./InputGuide"
import AddMovie from "./AddMovie"

const MenuOptions = () => {
  const [isInputGuideOpen, setIsInputGuideOpen] = useState(false)
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false)

  return (
    <>
      <Menubar className="absolute top-5 left-4 sm:top-5 sm:right-10 bg-transparent z-50 border-0">
        <MenubarMenu>
          <MenubarTrigger className="bg-white/70 hover:bg-white transition-all duration-100 ease-in-out cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="6" width="12" height="2" rx="1" fill="currentColor"/>
              <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/>
              <rect x="4" y="16" width="12" height="2" rx="1" fill="currentColor"/>
            </svg>
          </MenubarTrigger>

          <MenubarContent>
            <MenubarItem 
              className="cursor-pointer font-mono flex items-center gap-2"
              onClick={() => setIsInputGuideOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              Input Guide
            </MenubarItem>
            
            <MenubarSeparator />
            
            <MenubarItem 
              className="cursor-pointer font-mono flex items-center gap-2"
              onClick={() => setIsAddMovieOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Add Movie
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Modals */}
      <InputGuide isOpen={isInputGuideOpen} onClose={() => setIsInputGuideOpen(false)} />
      <AddMovie isOpen={isAddMovieOpen} onClose={() => setIsAddMovieOpen(false)} />
    </>
  )
}

export default MenuOptions