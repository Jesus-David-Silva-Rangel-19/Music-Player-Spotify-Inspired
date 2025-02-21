
import { Volume2 } from "lucide-react";

const NowPlaying = () => {
  return (
    <div className="w-96 bg-player-surface p-6 border-l border-gray-800 hidden lg:block">
      <div className="animate-fade-in">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Portada del álbum"
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
        />
        <div className="space-y-4">
          <div>
            <h3 className="font-title text-xl font-extrabold">Nombre de la Canción</h3>
            <p className="font-body text-player-secondary">Artista</p>
          </div>
          <div className="flex items-center gap-4">
            <Volume2 size={20} className="text-player-secondary" />
            <div className="flex-1 h-1 bg-gray-700 rounded-full">
              <div className="w-1/2 h-full bg-player-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
