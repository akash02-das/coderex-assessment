import "./App.css";
import Nav from "./components/Navbar/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-indigo-100 w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl">React Developer Coding Assessment</h1>
      </div>
    </>
  );
}

export default App;
