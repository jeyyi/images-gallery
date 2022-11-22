//import logo from './logo.svg';
import Header from './components/Header';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
        <Header title = "Images Gallery"></Header>
        <Search></Search>
    </div>
  );
}

export default App;
