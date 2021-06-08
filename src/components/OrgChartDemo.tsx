import OrganizationChart from "@dabeng/react-orgchart";
import React, { useCallback, useRef } from "react";
import { datas } from "../mock/orgChartData";
import MyNode from "./MyNode";

interface IorgChartDemoProps {}

type OrgChartRef = {
  exportTo: (filename: string, extenson: string) => void;
};

const OrgChartDemo = (props: IorgChartDemoProps) => {
  const orgChartRef = useRef<OrgChartRef>();
  const handleExport = useCallback(() => {
    orgChartRef.current?.exportTo("org-chart_" + Number(new Date()), "pdf");
  }, []);

  return (
    <div>
      <OrganizationChart
        ref={orgChartRef}
        collapsible={false}
        datasource={datas}
        chartClass="myChart"
        NodeTemplate={MyNode}
        zoom={false}
      />
      <div>
        <button onClick={handleExport}>Export to pdf</button>
      </div>
    </div>
  );
};

export default OrgChartDemo;
