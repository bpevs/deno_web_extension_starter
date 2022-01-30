import { h } from "preact";

export default function Options(props: {
  default?: boolean;
  path?: string;
}) {
  return (
    <div>
      <p>It feels like... options?</p>
      <a href="/home">go to home</a>
    </div>
  );
}
