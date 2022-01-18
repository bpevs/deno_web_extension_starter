import { h, render } from "preact";

const mountPoint = document.getElementById("mount");

if (mountPoint) {
  render(<h1>hello, world!</h1>, mountPoint);
}
