import OrganizationChart from "@dabeng/react-orgchart";
import printHtmlToPDF from "print-html-to-pdf";
import React, { useCallback, useRef } from "react";
import { setTimeout } from "timers";
import { datas } from "../mock/orgChartData";
import MyNode from "./MyNode";
import "./OrgChartDemo.css";

interface IorgChartDemoProps {}

type OrgChartRef = {
  exportTo: (filename: string, extenson: string) => void;
  expandAllNodes: () => void;
};

const html2Pdf = (format: "a4" | "a3") => {
  const ele = document.querySelector(".myChart > ul");
  printHtmlToPDF.print(ele, {
    jsPDF: {
      format,
      orientation: "landscape",
      unit: "mm",
    },
    // fitToPage: true,
    fileName: "test.pdf",
    margin: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
    },
  });
};

const OrgChartDemo = (props: IorgChartDemoProps) => {
  const orgChartRef = useRef<OrgChartRef>();
  const containerRef = useRef<HTMLDivElement>(null);

  const expandAllNodes = useCallback(() => {
    orgChartRef.current?.expandAllNodes();
  }, []);

  const handleExportPdfWithScale = useCallback((format: "a4" | "a3") => {
    setTimeout(() => html2Pdf(format), 100);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div style={{ width: "100%", height: "100%" }} ref={containerRef}>
        <OrganizationChart
          ref={orgChartRef}
          collapsible={true}
          datasource={datas}
          chartClass="myChart"
          containerClass="container"
          NodeTemplate={MyNode}
          zoom={false}
        />
        <div className="notPrint buttonToolbar">
          <button onClick={expandAllNodes}>Expand nodes</button>
          {"    "}
          {/* <button onClick={() => scale()}>Scale Width</button> */}
          {"     "}
          <button
            onClick={() => {
              handleExportPdfWithScale("a4");
            }}
          >
            Export to pdf a4
          </button>
          {"    "}
          <button
            onClick={() => {
              handleExportPdfWithScale("a3");
            }}
          >
            Export to pdf a3
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgChartDemo;
