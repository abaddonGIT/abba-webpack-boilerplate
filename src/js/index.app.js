/**
 * Created by Abaddon on 06.02.2017.
 *  Application entry point
 */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "isMobile" }] */
import 'normalize.css';
import jQuery from 'jquery';
import '../css/style.less';
import './vendors/migrate';
import isMobile from './vendors/isMobile';
import App from './App';
import './vendors/pages';

global.$ = jQuery;
global.jQuery = jQuery;
$(document).ready(App.start());