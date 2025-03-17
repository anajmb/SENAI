import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";

function App() {
 

  return (
    <>
      <div className="App">
        <Header/>
        <Banner/>
        <main className="container">
          <h3 className="mt-3 mb-3">Cachorros</h3>
          <Cards/>

        </main>
      </div>
    </>
  )
}

export default App
