
import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <Loader size={48} className="text-primary animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-primary animate-pulse">
        Loading Portfolio...
      </h2>
    </div>
  );
};

export default LoadingScreen;
