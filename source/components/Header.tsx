import { h } from "preact";

export default function Header(props: any) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}
