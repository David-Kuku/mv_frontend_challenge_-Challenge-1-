import './App.css';
import CreateAccount from './Components/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Modal from './Modals/Modal';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateAccount />
        <Modal/>
        <Footer/>
      </div>
    </Provider>

  );
}

export default App;
