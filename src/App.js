import Header from './modules/header'
import { Provider } from 'react-redux';
import store from './store/store'
import Request from './modules/request'
import Rooms from './modules/Rooms'
import {ToastProvider, useToasts } from 'react-toast-notifications'
import './App.css';
import GoogleMapReact from 'google-map-react';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Header/>
        <Request/>
        <Rooms/>
        
      </ToastProvider>
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '123' }}
          defaultCenter={37.0902}
          defaultZoom={95.7129}
        >
          {/* <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    </Provider>
  );
}

export default App;
