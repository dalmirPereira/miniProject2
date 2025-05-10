import "./App.css";

import { AuthProvider } from "./contex/AuthenticationContex/AuthContext";
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <AuthProvider>
          <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
