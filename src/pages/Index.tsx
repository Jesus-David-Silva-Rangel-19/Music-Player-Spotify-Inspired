
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/Sidebar";
import NowPlaying from "@/components/NowPlaying";
import MainContent from "@/components/MainContent";
import PlayerControls from "@/components/PlayerControls";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-player-background text-player-text">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <main className="flex-1 overflow-y-auto pb-24 md:pb-0">
            <MainContent />
          </main>
          <div className="fixed md:sticky bottom-0 w-full bg-player-surface border-t border-gray-800">
            <div className="container mx-auto px-0">
              <PlayerControls />
            </div>
          </div>
        </div>
        {!isMobile && <NowPlaying />}
      </div>
    </SidebarProvider>
  );
};

export default Index;
