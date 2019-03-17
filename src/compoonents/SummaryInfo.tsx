import React, { useState, useEffect } from "react";
import RequestService from "../services/RequestService";

export default () => {
  const [onFetch, setOnFetch] = useState(true);
  const [campers, setCampers] = useState();
  useEffect(() => {
    RequestService.getCurrentCamperState().then(campers => {
      console.log(campers);
      setCampers(campers);
      setOnFetch(false);
    });
  }, []);
  return onFetch ? (
    <div>
        Fetching....
    </div>
  ) : (
    <table>
      <tr>
        <th> </th>
        <th>Content</th>
        <th>Design</th>
        <th>Marketing</th>
        <th>Programming</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>เลือกสาขาแล้ว</td>
        <td>
          {campers.content.onProcess.total -
            campers.content.onProcess.passGeneral}
        </td>
        <td>
          {campers.design.onProcess.total -
            campers.design.onProcess.passGeneral}
        </td>
        <td>
          {campers.marketing.onProcess.total -
            campers.marketing.onProcess.passGeneral}
        </td>
        <td>
          {campers.programming.onProcess.total -
            campers.programming.onProcess.passGeneral}
        </td>
        <td>
        {campers.summary.onProcess.total -
            campers.summary.onProcess.passGeneral}
        </td>
      </tr>
      <tr>
        <td>ตอบคำถามกลางแล้ว กำลังตอบคำถามสาขา</td>
        <td>
          {campers.content.onProcess.passGeneral -
            campers.content.onProcess.passMajor}
        </td>
        <td>
          {campers.design.onProcess.passGeneral -
            campers.design.onProcess.passMajor}
        </td>
        <td>
          {campers.marketing.onProcess.passGeneral -
            campers.marketing.onProcess.passMajor}
        </td>
        <td>
          {campers.programming.onProcess.passGeneral -
            campers.programming.onProcess.passMajor}
        </td>
        <td>
          {campers.summary.onProcess.passGeneral -
            campers.summary.onProcess.passMajor}
        </td>
      </tr>
      <tr>
        <td>ตอบคำถามสาขาแล้ว ยังไม่กดส่ง</td>
        <td>{campers.content.onProcess.passMajor}</td>
        <td>{campers.design.onProcess.passMajor}</td>
        <td>{campers.marketing.onProcess.passMajor}</td>
        <td>{campers.programming.onProcess.passMajor}</td>
        <td>{campers.summary.onProcess.passMajor}</td>
      </tr>
      <tr>
        <td>ส่งแล้ว</td>
        <td>{campers.content.submitted}</td>
        <td>{campers.design.submitted}</td>
        <td>{campers.marketing.submitted}</td>
        <td>{campers.programming.submitted}</td>
        <td>{campers.summary.submitted}</td>
      </tr>
      <tr>
        <td>รวม</td>
        <td>{campers.content.total}</td>
        <td>{campers.design.total}</td>
        <td>{campers.marketing.total}</td>
        <td>{campers.programming.total}</td>
        <td>{campers.summary.total}</td>
      </tr>
    </table>
  );
};
