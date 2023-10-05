import { Router } from 'preact-router';
import Home from '../routes/home';
import IoT from '../routes/iot'; // import the new route

export default () => (
  <Router>
    <Home path="/" />
    <IoT path="/iot" /> {/* add the new route */}
  </Router>
);