import { createContext } from "react";
import { SAE_CONFIGS, SAEConfig } from "./SAEConfigs";
import { DEFAULT_SAE_MODEL } from "./config";
import { SidebarProvider } from "@/components/ui/sidebar";
import SAESidebar from "./components/SAESidebar";
import { useParams } from "react-router-dom";

interface SAEContextType {
  model: string;
  feature: number | undefined;
  SAEConfig: SAEConfig;
}

export const SAEContext = createContext<SAEContextType>({
  model: DEFAULT_SAE_MODEL,
  SAEConfig: SAE_CONFIGS[DEFAULT_SAE_MODEL],
  feature: SAE_CONFIGS[DEFAULT_SAE_MODEL].defaultDim,
});

export const SAEProvider = ({ children }: { children: React.ReactNode }) => {
  const { model: modelParam, feature: featureParam } = useParams();
  const model = modelParam ? modelParam : DEFAULT_SAE_MODEL;
  const feature = featureParam ? parseInt(featureParam) : undefined;

  return (
    <SAEContext.Provider
      value={{
        model: model,
        feature: feature,
        SAEConfig: SAE_CONFIGS[model],
      }}
    >
      <SidebarProvider>
        <SAESidebar />
        {children}
      </SidebarProvider>
    </SAEContext.Provider>
  );
};
