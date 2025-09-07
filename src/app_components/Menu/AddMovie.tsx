import { useState } from "react"
import { motion } from "motion/react"
import config from "@/config/config"
import { toast } from "sonner"
import { 
    AlertDialog, 
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"

interface AddMovieProps {
  isOpen: boolean
  onClose: () => void
}

const AddMovie = ({ isOpen, onClose }: AddMovieProps) => {
    const [imdbId, setImdbId] = useState("")

    const handleImdbSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (imdbId.trim()) {
            const createMovie = async (): Promise<{ name: string }> => {
                const response = await fetch(`${config.server_url}movie`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        imdbId: imdbId
                    }),
                });
                
                if (response.status === 409) {
                    throw new Error("Movie already exists");
                } else if (response.status === 404) {
                    throw new Error("Not a valid IMDB-ID for a movie");
                }
                
                setImdbId("");
                onClose(); // Close modal on success
                return { name: "Movie Created Successfully!" };
            };

            toast.promise(
                createMovie(),
                {
                    loading: "Adding Movie...",
                    success: (data) => data.name,
                    error: (err) => err.message || "An error occurred"
                }
            );
        }
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="bg-zinc-800 border-zinc-600 max-w-md font-mono">
                <AlertDialogTitle className="text-white text-xl font-bold mb-4">
                    🎬 Add Movie
                </AlertDialogTitle>
                
                <AlertDialogDescription className="text-zinc-300 mb-4">
                    Add a movie to the collection using its IMDB ID
                </AlertDialogDescription>
                
                <form onSubmit={handleImdbSubmit} className="space-y-4">
                    <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        value={imdbId}
                        onChange={(e) => setImdbId(e.target.value)}
                        placeholder="Enter IMDB ID (e.g., tt0111161)"
                        className="border-2 border-zinc-500 rounded-lg text-sm text-white w-full px-3 py-2 bg-zinc-700/50 backdrop-blur-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:bg-zinc-700/70 transition-all duration-300"
                    />
                    
                    <AlertDialogFooter className="gap-2">
                        <AlertDialogCancel 
                            onClick={onClose}
                            className="bg-zinc-600 hover:bg-zinc-500 text-white border-0"
                        >
                            Cancel
                        </AlertDialogCancel>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={imdbId.trim() === ""}
                            type="submit"
                            className={`text-white font-medium rounded-lg px-4 py-2 border-2 border-zinc-500 transition-all duration-300 text-sm ${
                                imdbId.trim() === "" 
                                    ? "cursor-not-allowed opacity-50" 
                                    : "hover:bg-zinc-600 hover:border-zinc-400 cursor-pointer"
                            }`}
                        >
                            Add Movie
                        </motion.button>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AddMovie