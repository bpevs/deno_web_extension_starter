/* @jsx h */

import { h } from "preact";

export interface OptionsProps {
  default?: boolean;
  path?: string;
}

export default function Options(props: OptionsProps) {
  return (
    <div>
      <p>It feels like... options?</p>
      <a href="/home">go to home</a>
    </div>
  );
}
