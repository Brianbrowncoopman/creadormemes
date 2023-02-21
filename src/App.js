import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("soy 1");
  const [linea2, setLinea2] = useState("soy 2");
  const [img, setImg] = useState("fire");

  const onChangeLinea1 = function (e) {
    setLinea1(e.target.value);
  };

  const onChangeLinea2 = function (e) {
    setLinea2(e.target.value);
  };

  const onChangeImg = function (e) {
    setImg(e.target.value);
  };

  const onClickBtn = function (e) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">futurama</option>
        <option value="history">history</option>
        <option value="raptor">raptor</option>
        <option value="smart">smart</option>
        <option value="matrix">matrix</option>
        <option value="uma">Uma</option>
      </select>
      <br />

      <input onChange={onChangeLinea1} type="text" placeholder="linea 1" />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2" />
      <br />
      <button onClick={onClickBtn}>exportar</button>

      <div className="meme" id="meme">
        <span>{linea2}</span>
        <br />
        <span>{linea1}</span>
        <img src={"/images/" + img + ".jpg"} />
        <br />
      </div>
    </div>
  );
}

export default App;
