import OrganizationChart from "@dabeng/react-orgchart";
import React, { useCallback, useRef, useState } from "react";
import { datas } from "../mock/orgChartData";
import MyNode from "./MyNode";
import printHtmlToPDF from "print-html-to-pdf";
import "./OrgChartDemo.css";
import { setTimeout } from "timers";

type PageSize = {
  width: number;
  height: number;
};

const A4Size: PageSize = {
  width: 297,
  height: 210,
};

function setTransform(element: HTMLElement, scale: string): void {
  var transformString = "scale(" + scale + ") ";

  element.style.transform = transformString;
}

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
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleExportPdfWithScale = useCallback((format: "a4" | "a3") => {
    setTimeout(() => html2Pdf(format), 100);
  }, []);

  const scale = useCallback(() => {
    const ref = containerRef.current;
    if (ref) {
      const chartContainer = ref.children[0];
      const ul = chartContainer.children[0].children[0] as HTMLElement;

      const scaleRatio = (chartContainer.clientWidth / ul.clientWidth).toFixed(
        2
      );
      setTransform(ul, scaleRatio);
      setTimeout(() => {
        ul.scrollIntoView({
          block: "start",
          inline: "center",
        });
        setCount((c) => c + 1);
      }, 200);
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div style={{ width: "100%", height: "100%" }} ref={containerRef}>
        <OrganizationChart
          ref={orgChartRef}
          collapsible={true}
          datasource={chartData}
          chartClass="myChart"
          containerClass="container"
          NodeTemplate={MyNode}
          zoom={false}
          zoominLimit={count}
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
      {/* <div style={{ width: "20%" }} className="notPrint">
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
      </div> */}
    </div>
  );
};

export default OrgChartDemo;
