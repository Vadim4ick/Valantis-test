import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./shared/layout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./shared/style/index.css";

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </Provider>
  );
}

export default App;
