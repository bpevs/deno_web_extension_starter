import { h } from "preact";

export default function Home(props: {
  default?: boolean;
  path?: string;
}) {
  return (
    <div>
      <p>It feels like home</p>
      <a href="/options">go to options</a>
    </div>
  );
}
