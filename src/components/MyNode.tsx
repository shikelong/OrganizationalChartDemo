import React from "react";
import { Bumon } from "../mock/orgChartData";
import "./MyNode.css";

interface IMyNodeProps {
  nodeData: Bumon;
}

const rowMaxRenderPersonCount = 5;

const MyNode = ({ nodeData }: IMyNodeProps): JSX.Element => {
  return (
    <div className="leaf">
      <div className="header">
        <div>{nodeData.name}</div>
      </div>
      <ul className="stuff">
        {(nodeData.stuff || []).map((employee, index) => (
          <li
            key={employee.id + index}
            className="person"
            style={{
              // flexBasis:
              //   100 / (nodeData.rowCount ?? rowMaxRenderPersonCount) + "%",
              // width: 80,
              minWidth: 80,
            }}
          >
            <img src={employee.avatar} alt="" />
            <span className="personName">{employee.name}</span>
            <span className="personDescription">{employee.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyNode;
