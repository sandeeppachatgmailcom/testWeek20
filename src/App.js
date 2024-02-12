

import './App.css';
import Root from './components/MainComponent';

 
import appStore from './utils/reduxStore'; 
import { Provider } from 'react-redux';
const App = ()=>{
  return (
    <div className="App">
    <Provider store={appStore}>
    
       <Root/>
    
    </Provider>
    </div>
  );
}

export default App;
