import './App.css';
import Background from './components/Background.jsx';
import Terminal from './components/Terminal.jsx';

function App() {
  return (
    <>
      <div>
        <div className="hidden lg:flex justify-center h-screen w-full items-center font-josefin">
          <Terminal />
        </div>
        <div className="sm:flex justify-center items-center lg:hidden  w-full h-full overflow-hidden mt-[35%]">
          <h2 className="text-center font-bold text-xl p-2">
            This Website is Not Responsive to mobile. Switch to Desktop Site🙂💻
          </h2>
        </div>
      </div>
      <Background />
    </>
  );
}

export default App;
