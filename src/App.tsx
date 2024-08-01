// import spider from "./assets/spider.svg";
import Spider from "./components/Spider";
import Counter from "./components/Counter";

function SpiderMap() {
  return (
    <div>
      <br />
      <code>/ - - O - O - O - O</code>
      <br />
      <code>/ | | | |</code>
      <br />
      <code>| / - O - O - O - O</code>
      <br />
      <code>| / | | | |</code>
      <br />
      <code>O - - O - O - O - O</code>
      <br />
      <code>| \ | | | |</code>
      <br />
      <code>| \ - O - O - O - O</code>
      <br />
      <code>\ | | | |</code>
      <br />
      <code>\ - - O - O - O - O</code>
      <br />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Spider />
      <Counter />
      <SpiderMap />
    </div>
  );
}
