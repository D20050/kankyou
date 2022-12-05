import MediaQuery from "react-responsive";
import PC from "./pc_cnt";
import PHONE from "./phone_cnt";

export default function App() {
  return (
    <div className="App">
      <MediaQuery query="(max-width: 767px)">
        <PC />
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <PHONE />
      </MediaQuery>
    </div>
  );
}
