import './App.css';
import Background from './components/Background.jsx';
import Terminal from './components/Terminal.jsx';

function App() {
  return (
    <>
      <div>
        <div className="hidden md:flex justify-center h-screen w-full items-center font-josefin">
          <Terminal />
        </div>
        <div className="flex justify-center items-center md:hidden  w-full h-full overflow-hidden mt-[35%]">
          <h2 className="text-center font-bold text-xl p-2">
            This Website is Not Responsive. Switch to Desktop 🙂💻
          </h2>
        </div>
      </div>
      <Background />
    </>
  );
}

export default App;
