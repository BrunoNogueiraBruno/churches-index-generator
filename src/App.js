import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import ChurchItems from './components/ChurchItems';

function App() {
  return (
    <Provider store={store}>
      <ChurchItems />
    </Provider>
  );
}

export default App;
