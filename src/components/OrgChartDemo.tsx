import OrganizationChart from "@dabeng/react-orgchart";
import React, { useCallback, useRef, useState } from "react";
import { datas } from "../mock/orgChartData";
import MyNode from "./MyNode";

interface IorgChartDemoProps {}

type OrgChartRef = {
  exportTo: (filename: string, extenson: string) => void;
  expandAllNodes: () => void;
};

const OrgChartDemo = (props: IorgChartDemoProps) => {
  const orgChartRef = useRef<OrgChartRef>();
  const [chartData, setChartData] = useState(datas);
  const [editorValue, setEditorValue] = useState<string>(
    JSON.stringify(datas, undefined, 2)
  );

  const handleExport = useCallback((ext: "pdf" | "png") => {
    orgChartRef.current?.exportTo("org-chart_" + Number(new Date()), ext);
  }, []);

  const expandAllNodes = useCallback(() => {
    orgChartRef.current?.expandAllNodes();
  }, []);

  return (
    <div style={{ width: "100vw", display: "flex" }}>
      <div style={{ width: "75%" }}>
        <OrganizationChart
          ref={orgChartRef}
          collapsible={true}
          datasource={chartData}
          chartClass="myChart"
          NodeTemplate={MyNode}
          zoom={false}
        />
        <div>
          {/* <button onClick={expandAllNodes}>Expand nodes</button> */}
          {"    "}
          <button onClick={() => handleExport("png")}>Export to image</button>
          {"     "}
          <button onClick={() => handleExport("pdf")}>Export to pdf</button>
        </div>
      </div>
      <div style={{ width: "20%" }}>
        <textarea
          value={editorValue}
          style={{ height: "100%", width: "100%", margin: "0.5em" }}
          onChange={(e) => setEditorValue(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            try {
              setChartData(JSON.parse(editorValue));
            } catch (e) {
              alert("input invalid.  " + e);
            }
          }}
        >
          apply
        </button>
      </div>
    </div>
  );
};

export default OrgChartDemo;
