import Navigation from "./pages/Navigations/Navigation";
import Recomanded from "./pages/Recomanded/Recomanded";
import Sidebar from "./pages/Sidebar/Sidebar";
import Products from "./pages/products/Products";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Navigation />
      <Recomanded />
      <Products />
    </div>
  );
}

export default App;
