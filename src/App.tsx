import "./shared/style/index.css";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./shared/layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
