/**
 * Created by Abaddon on 06.02.2017.
 *  Application entry point
 */
"use strict";
import "normalize.css";
import "../css/style.less";
import jQuery from "jquery";
import "./vendors/migrate";
import App from './App';

global.$ = global.jQuery = jQuery;
$(document).ready(App.start());
