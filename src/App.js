import './Assent/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mincomponents from './components/mincomponents';
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
        <BrowserRouter>
        <Mincomponents />
        </BrowserRouter>
  );
}

export default App;
