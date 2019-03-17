import React, { useState, useEffect } from "react";
import RequestService from "../services/RequestService";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import { CamperSummary, Major } from "../types/summary";

const transformData = (data: CamperSummary) => {
  const output = [];
  for (let i = 0; i < data.accumulate.authenticated.length; i++) {
    const accAuth = data.accumulate.authenticated[i];
    const sepAuth = data.seperate.authenticated[i];
    const accSub = data.accumulate.submitted[i];
    const sepSub = data.seperate.submitted[i];
    output.push({
      name: accAuth.date.toLocaleDateString(),
      accumulatedAuthenticatedContent: accAuth.content,
      accumulatedAuthenticatedDesign: accAuth.design,
      accumulatedAuthenticatedMarketing: accAuth.marketing,
      accumulatedAuthenticatedProgramming: accAuth.programming,
      accumulatedAuthenticated:
        accAuth.content +
        accAuth.design +
        accAuth.marketing +
        accAuth.programming,
      seperatedAuthenticatedContent: sepAuth.content,
      seperatedAuthenticatedDesign: sepAuth.design,
      seperatedAuthenticatedMarketing: sepAuth.marketing,
      seperatedAuthenticatedProgramming: sepAuth.programming,
      seperatedAuthenticated:
        sepAuth.content +
        sepAuth.design +
        sepAuth.marketing +
        sepAuth.programming,
      accumulatedSubmittedContent: accSub.content,
      accumulatedSubmittedDesign: accSub.design,
      accumulatedSubmittedMarketing: accSub.marketing,
      accumulatedSubmittedProgramming: accSub.programming,
      accumulatedSubmitted:
        accSub.content + accSub.design + accSub.marketing + accSub.programming,
      seperatedSubmittedContent: sepSub.content,
      seperatedSubmittedDesign: sepSub.design,
      seperatedSubmittedMarketing: sepSub.marketing,
      seperatedSubmittedProgramming: sepSub.programming,
      seperatedSubmitted:
        sepSub.content + sepSub.design + sepSub.marketing + sepSub.programming
    });
  }
  return output;
};

type ChartProps = { major: Major; mode: string };

export default (props: ChartProps) => {
  const { major, mode } = props;
  const [onFetch, setOnFetch] = useState(true);
  const [summary, setSummary] = useState<CamperSummary>();
  const [data, setData] = useState();
  useEffect(() => {
    RequestService.getCamperSummary().then(summary => {
      setSummary(summary);
      setData(transformData(summary));
      setOnFetch(false);
    });
  }, []);

  const getKey = (prefix: string) => {
    if (major === Major.all) {
      return prefix;
    }
    if (major === Major.content) {
      return prefix + "Content";
    }
    if (major === Major.design) {
      return prefix + "Design";
    }
    if (major === Major.marketing) {
      return prefix + "Marketing";
    }
    if (major === Major.programming) {
      return prefix + "Programming";
    }
    return prefix;
  };

  return (
    <>
      {onFetch ? (
        "Fetching..."
      ) : (
        <LineChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={getKey(mode + "Submitted")}
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey={getKey(mode + "Authenticated")}
            stroke="#82ca9d"
          />
        </LineChart>
      )}
    </>
  );
};
