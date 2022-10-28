import "./App.css";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <h1 class="navbar-brand">Gabriel Marchetta</h1>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
      <section id="contenedorVideos"></section>
    </div>
  );
}

export default App;
