import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import './sass/components/app.sass';

function App() {

  return (
    <>
     <div id="container">
        <div id="arthur-guilherme">
          <h1>Arthur Guilherme</h1>
        </div>
        <SideBar />
        <MainPage />
     </div>
    </>
  )
}

export default App
