import Home from "./components/Home/Home";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom'
import PageNotFound from "./components/PageNotFound/PageNotFound";
import List from "./components/List/List";

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
