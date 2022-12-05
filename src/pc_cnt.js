import "./styles.css";
import menu from "../public/menu";
import Header from "./header";
import Card from "./card";
import Card2 from "./card2";
import Click from "./click";
import Click2 from "./click2";

function menus(index) {
  const items = [];
  const keys = Object.keys(menu[index]);
  const values = Object.values(menu[index]);
  for (let i = 0; i < values.length; i++) {
    items.push(
      <li>
        {keys[i]}:{values[i]}
      </li>
    );
  }
  return <ul>{items}</ul>;
}

export default function App() {
  return (
    <>
      <Header />
      <h1>城田のお気に入り曲リスト</h1>
      <Click />
      <Card />
      {menus(0)}
      <Click2 />
      <Card2 />
      {menus(1)}
    </>
  );
}
