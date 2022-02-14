import Section from './Section';
import Heading from './Heading';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleButton from './components/ToggleButton';
import UserAuthContextProvider from './contexts/UserAuthContext';
import Counter from './components/Counter';
import CounterContextProvider from './reducerExample/CounterContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <UserAuthContextProvider>
          <Navbar/>
        </UserAuthContextProvider>
        <ToggleButton></ToggleButton>
      </ThemeContextProvider>

      <CounterContextProvider>
          <Counter></Counter>
      </CounterContextProvider>
      
      
      
      
      
      
      {/* <Section level={1}>
          <Heading>Title</Heading>
          <Section level={2}>
            <Heading>Heading 2</Heading>
            <Heading>Heading 2</Heading>
            <Heading>Heading 2</Heading>
          </Section>
          <Section level={3}>
            <Heading>Heading 3</Heading>
            <Heading>Heading 3</Heading>
            <Heading>Heading 3</Heading>
          </Section>
          <Heading>Heading 4</Heading>
          <Heading>Heading 5</Heading>
        {/* <Heading level={6}>Heading 6</Heading> */}
      {/* </Section>  */}
    </div>
  );
}

export default App;
