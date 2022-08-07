// import logo from './logo.svg';
import Main from "./components/Main";
import SideBar from './components/sidebar/SideBar.jsx'
import { AppContext } from "./context/Context";

function App() {

  return (
    <div className="App">

      <AppContext.Provider
        value={{

        }}
      >

        <div className=" flex flex-col min-h-screen md:flex-row font-[Raleway]">

          <div className=" w-full md:w-[30%]">
            <SideBar />
          </div>

          <div className=" w-full md:w-[70%]" >
            <Main />
          </div>

        </div>
      </AppContext.Provider>


    </div>
  );
}

export default App;
