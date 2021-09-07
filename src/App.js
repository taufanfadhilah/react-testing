import "./App.css";
import SampleCompRTL from "./testing/SampleCompRTL";
import SimpleShowHide from "./testing/SimpleShowHide";
import CompRole from "./testing/CompRole";
import CompVariant from "./testing/CompVariant";
import CompUserEvent from "./testing/CompUserEvent";
import CompAxiosCall from "./testing/CompAxiosCall";

function App() {
  return (
    <>
      <SampleCompRTL />
      <SimpleShowHide />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </>
  );
}

export default App;
