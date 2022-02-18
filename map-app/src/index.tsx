import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';


if ( !navigator.geolocation){
  alert('You browser cant find the location permission!');
  throw new Error('Your browser does not have the location option')
}
ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

