
import { Home, Library, Search } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black p-6 flex flex-col gap-8">
      <div className="space-y-6">
        <h1 className="font-title text-2xl font-extrabold text-white">Música</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-4 text-player-secondary hover:text-white transition-colors">
            <Home size={24} />
            <span className="font-body">Inicio</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-player-secondary hover:text-white transition-colors">
            <Search size={24} />
            <span className="font-body">Buscar</span>
          </a>
          <a href="#" className="flex items-center gap-4 text-player-secondary hover:text-white transition-colors">
            <Library size={24} />
            <span className="font-body">Tu Biblioteca</span>
          </a>
        </nav>
      </div>
      
      <div className="mt-8">
        <h2 className="text-player-secondary font-body text-sm mb-4">LISTAS DE REPRODUCCIÓN</h2>
        <div className="space-y-2">
          <a href="#" className="block text-player-secondary hover:text-white transition-colors font-body">Mi Lista #1</a>
          <a href="#" className="block text-player-secondary hover:text-white transition-colors font-body">Favoritos</a>
          <a href="#" className="block text-player-secondary hover:text-white transition-colors font-body">Lo Mejor de 2024</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
