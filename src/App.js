import './App.css';
import Header from './components/Screens/header/Header';
import SurahList from './components/Screens/surahContainer/SurahList';
import ThemeProvider from './theming/ThemeProvider';

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <SurahList />
      </ThemeProvider>
    </div>
  );
}

export default App;
