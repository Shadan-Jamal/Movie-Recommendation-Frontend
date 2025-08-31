import { 
    AlertDialog, 
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel
} from "@/components/ui/alert-dialog"

const BellIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline", verticalAlign: "middle" }}
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const InputGuide = () => {
  return (
    <div className="absolute top-2 right-2 md:top-5 md:right-5 z-50 flex items-center gap-2">
      
      <div className="  px-3 py-1 rounded-lg transition-all duration-300 hover:scale-104 ease-in-out">
        <AlertDialog>
          <AlertDialogTrigger className="cursor-pointer font-mono flex items-center gap-1">
          <BellIcon className="text-zinc-700 bg-white/70 rounded-full p-1 shadow-md transition-all duration-300 group-hover:scale-110 hover:bg-white" />
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-zinc-700">
            <AlertDialogDescription className="text-white font-mono mb-4">
              <h1 className="text-lg">For Description based inputs:</h1>
              <ul className="list-disc text-md">
                <li>Try to remember the main plot points of the movie.</li>
                <li>Try to use as many nouns as possible.</li>
              </ul>
              <p>Example: </p>
            </AlertDialogDescription>
            <AlertDialogDescription className="text-white font-mono">
              <h1 className="text-lg">For Emotion based inputs:</h1>
              <ul className="list-disc text-md">
                <li>Try not to be too vague.</li>
              </ul>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer bg-white/40 hover:bg-white font-mono font-bold">
                Close
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default InputGuide