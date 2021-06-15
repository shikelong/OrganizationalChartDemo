import React from "react";
import { Bumon, defaultAvatarImg } from "../mock/orgChartData";
import "./MyNode.css";
import Avatar from "boring-avatars";

interface IMyNodeProps {
  nodeData: Bumon;
}

const rowMaxRenderPersonCount = 5;

const itemWidth = 80;

const getContainerWidth = (
  rowCount = rowMaxRenderPersonCount,
  count: number = 0
): number => {
  if (count < rowCount) {
    return count * itemWidth;
  }

  return rowCount * itemWidth;
};

const MyNode = ({ nodeData }: IMyNodeProps): JSX.Element => {
  return (
    <div className="leaf">
      <div className="header">
        <div>{nodeData.name}</div>
      </div>
      <ul
        className="stuff"
        style={{
          width: getContainerWidth(nodeData.rowCount, nodeData.staff?.length),
        }}
      >
        {(nodeData.staff || []).map((employee, index) => (
          <li
            key={employee.id + index}
            className={`person ${employee.isLeader ? "leader" : ""}`}
            style={{
              width: itemWidth,
              textOverflow: "clip",
            }}
          >
            {/* <img src={employee.avatar ?? defaultAvatarImg} alt="" /> */}
            <Avatar
              size={50}
              name={employee.name}
              square
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <span className="personName">{employee.name}</span>
            <span className="personDescription">{employee.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyNode;
