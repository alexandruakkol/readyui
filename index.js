import config from './config';
import {Navbar} from './lib/Navbar/Navbar.js';

const setConfig = (value) => {
  config.setConfig(value);
};

export { Navbar, setConfig };