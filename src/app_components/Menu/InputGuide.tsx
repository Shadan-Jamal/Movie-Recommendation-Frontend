import { 
    AlertDialog, 
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"

interface InputGuideProps {
  isOpen: boolean
  onClose: () => void
}

const InputGuide = ({ isOpen, onClose }: InputGuideProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="bg-zinc-800 border-zinc-600 max-w-md">
        <AlertDialogTitle className="text-white text-xl font-bold mb-4">
          📖 Input Guide
        </AlertDialogTitle>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-white font-semibold mb-2">🎬 Description-based inputs:</h3>
            <AlertDialogDescription className="text-zinc-300 space-y-1">
              <p>• Try to remember the main plot points of the movie</p>
              <p>• Use as many nouns as possible</p>
              <p>• Include character names, locations, and key events</p>
            </AlertDialogDescription>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-2">😊 Emotion-based inputs:</h3>
            <AlertDialogDescription className="text-zinc-300 space-y-1">
              <p>• Try not to be too vague</p>
              <p>• Be specific about your mood or feelings</p>
              <p>• Examples: "I want to feel inspired", "I'm feeling nostalgic"</p>
            </AlertDialogDescription>
          </div>
        </div>
        
        <AlertDialogFooter>
          <AlertDialogCancel 
            onClick={onClose}
            className="bg-zinc-600 hover:bg-zinc-500 text-white border-0"
          >
            Got it!
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default InputGuide