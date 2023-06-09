import { useState } from "react";

const Example = () => {
  const OPTIONS = ["Apple", "Banana", "Cherry"];
  const [selected, setSelected] = useState("Banana");

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      <select
        name=""
        id=""
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {OPTIONS.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
      <div>選択された果物：{selected}</div>
    </>
  );
};

export default Example;
