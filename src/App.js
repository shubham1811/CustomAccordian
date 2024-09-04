import Accordian from "./component/Accordian.jsx";
import { useState } from "react";

function App() {
  const [data, Setdata] = useState([
    {
      header: "Accordion Item #1",
      data: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      header: "Accordion Item #2",
      data: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
    {
      header: "Accordion Item #3",
      data: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      open: false,
    },
  ]);
  const UpdateOpenValue = (i, val) =>
    Setdata(
      data.map((item, index) =>
        index === i ? { ...item, open: val } : { ...item, open: false }
      )
    );

  return (
    <div className="App">
      {data.map((value, id) => {
        return (
          <Accordian value={value} id={id} UpdateOpenValue={UpdateOpenValue} />
        );
      })}
    </div>
  );
}

export default App;
