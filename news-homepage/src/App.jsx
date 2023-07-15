import Home from "./components/pages/Home";
import useMobileProvider from "./hooks/useMobileProvider";

function App() {
  const [isMobileMenuOpen] = useMobileProvider();

  return (
    <div
      className={`relative min-h-screen w-full ${
        isMobileMenuOpen
          ? "overflow-hidden h-96 bg-gray-900 bg-opacity-40 inset-0"
          : "overflow-auto"
      }`}
    >
      <Home />
    </div>
  );
}

export default App;
