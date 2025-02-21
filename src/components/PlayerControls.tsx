
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react";

const PlayerControls = () => {
  return (
    <div className="py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/3">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Miniatura"
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="font-title text-sm font-bold">Nombre de la Canción</h4>
            <p className="text-xs text-player-secondary font-body">Artista</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-player-secondary hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Play size={16} className="text-black ml-1" />
            </button>
            <button className="text-player-secondary hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center gap-2">
            <span className="text-xs text-player-secondary font-body">2:14</span>
            <div className="flex-1 h-1 bg-gray-700 rounded-full">
              <div className="w-1/3 h-full bg-player-accent rounded-full"></div>
            </div>
            <span className="text-xs text-player-secondary font-body">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-1/3 justify-end">
          <Volume2 size={20} className="text-player-secondary" />
          <div className="w-24 h-1 bg-gray-700 rounded-full">
            <div className="w-1/2 h-full bg-player-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
