import React from "react";

const Accordian = ({ value: { header, data, open }, id, UpdateOpenValue }) => (
  <div style={{ width: "90vw", margin: "30px" }}>
    <div
      className="accordion"
      style={{
        width: "100%",
        border: "1px solid black",
        height: "10vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          fontWeight: "800",
        }}
      >
        <p>{header}</p>
        <p
          onClick={() => UpdateOpenValue(id, !open)}
          style={{ cursor: "pointer" }}
        >
          ⏬
        </p>
      </div>
    </div>
    <div
      className="accordionData"
      style={{
        width: "100%",
        border: "1px solid black",
        height: "20vh",
        marginTop: "5px",
        display: open ? "block" : "none",
      }}
    >
      <p style={{ padding: "10px" }}>{data}</p>
    </div>
  </div>
);

export default Accordian;
