import Hero from "./components/Hero/Hero";
import List from "./components/List/List";
import SearchForm from "./components/SearchForm/SearchForm";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
function App() {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
      <TextInput placeholder='Napisz mi coś'></TextInput>
      <Button>Mała</Button>
    </Container>
  );
};

export default App;
