import {Provider} from 'react-redux';
import store from './store';

  import RestaurantScreen from './components/RestaurantScreen';
export default function App() {
return <div>Hello, world.</div>;
return (
<Provider store={store}>

<RestaurantScreen />
</Provider>

);
}


  