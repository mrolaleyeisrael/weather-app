// import logo from './logo.svg';
import Main from "./components/Main";
import SideBar from './components/sidebar/SideBar.jsx'
import AppContextProvider from "./context/Context";

function App() {

  return (
    <div className="App">

      <AppContextProvider>


        <div className=" flex flex-col h-full md:flex-row font-[Raleway]">

          <div className=" h-screen  w-full md:w-[30%]">
            <SideBar />
          </div>

          <div className="  w-full md:w-[70%]" >
            <Main />
          </div>

        </div>
      </AppContextProvider>


    </div>
  );
}

export default App;
