import './Assent/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mincomponents from './components/mincomponents';
import { BrowserRouter} from "react-router-dom";
import myStore from './components/redux/store';
import {Provider} from 'react-redux';

function App() {
  //console.log('App.js',myStore.getState());
  return (
        <Provider store={myStore}>
        <BrowserRouter>
        <Mincomponents />
        </BrowserRouter>
        </Provider>
  );
}

export default App;
