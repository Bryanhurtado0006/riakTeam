import { useDarkMode } from "./assets/hooks/useDarkMode";
import { useState,useEffect } from "react";

const Perfil: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

  
    useEffect(() => {
        
        document.documentElement.classList.add('dark');
        setTimeout(() => {
          document.documentElement.classList.remove('dark');
        }, 3000);
      }, []);
    
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen p-8 transition-colors duration-300">
            <div className="max-w-md mx-auto bg-green-50 dark:bg-gray-800 rounded-xl overflow-hidden md:max-w-2xl shadow-lg transition-colors duration-300">
                <div className="flex flex-col items-center p-6 space-y-4">
                    <img
                        className="h-32 w-32 object-cover mb-4 border-4 border-green-500 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvvaToYmpbZpR8i6-SkgfNS24uoSGKGl_AQ&s"
                        alt="Foto de perfil"
                        width={128}
                        height={128}
                    />
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">BB</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">bohemio de afición</p>
                    </div>
                    
                    <blockquote className="text-center text-gray-700 dark:text-gray-300 italic">
                        "Cuando el río suena, es porque piedras trae."
                    </blockquote>
                    
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <a
                            href="https://mail.google.com/mail/u/0/#inbox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                        >
                            Contactar
                        </a>
                        <a
                            href="https://github.com/Bryanhurtado0006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        
                        <button
                            onClick={toggleDarkMode}
                            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
