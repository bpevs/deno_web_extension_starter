/* @jsx h */

import { h, render } from "preact";
import Router from "preact-router";

import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Options from "./pages/Options.tsx";

const mountPoint = document.getElementById("mount");

if (mountPoint) {
  render(
    <article>
      <Header title="Browser Extension Boilerplate" />
      <Router>
        <Home default />
        <Options path="/options" />
      </Router>
    </article>,
    mountPoint,
  );
}
