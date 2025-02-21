
const MainContent = () => {
  const playlists = [
    {
      title: "Lista Diaria 1",
      description: "Música personalizada para ti",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Lo Mejor de 2024",
      description: "Los éxitos más populares",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Descubrimiento Semanal",
      description: "Nueva música cada lunes",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Tus Favoritos",
      description: "Las canciones que más te gustan",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="font-title text-3xl font-extrabold mb-6">Buenos días</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {playlists.map((playlist, index) => (
          <div
            key={index}
            className="bg-player-surface p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={playlist.image}
              alt={playlist.title}
              className="w-full aspect-square object-cover rounded-md mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <h3 className="font-title text-lg font-extrabold mb-1">{playlist.title}</h3>
            <p className="font-body text-sm text-player-secondary">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
