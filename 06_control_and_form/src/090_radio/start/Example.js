import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("apple");
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      {/* <label>
        <input
          type="radio"
          value="Apple"
          checked={fruit === "Apple"}
          onChange={onChange}
        />
        Apple
      </label>
      <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}が食べたい</h3>
    </>
  );
};

export default Example;
