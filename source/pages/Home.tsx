/* @jsx h */

import { h } from "preact";

export interface HomeProps {
  default?: boolean;
  path?: string;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <p>It feels like home</p>
      <a href="/options">go to options</a>
    </div>
  );
}
