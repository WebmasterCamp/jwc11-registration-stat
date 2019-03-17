import axios from "axios";
import { CamperSummary } from "../types/summary";

class RequestService {
  getCamperSummary() {
    return axios
      .get<CamperSummary>(
        "https://us-central1-jwcxi-registration.cloudfunctions.net/campersSummary"
      )
      .then(res => {
        res.data.accumulate.authenticated.forEach(
          e => (e.date = new Date(e.date))
        );
        res.data.accumulate.submitted.forEach(e => (e.date = new Date(e.date)));
        res.data.seperate.authenticated.forEach(
          e => (e.date = new Date(e.date))
        );
        res.data.seperate.submitted.forEach(e => (e.date = new Date(e.date)));
        return res.data;
      });
  }
  getCurrentCamper() {
    return axios
      .get("https://us-central1-jwcxi-registration.cloudfunctions.net/campers")
      .then(res => res.data);
  }
  getCurrentCamperState() {
    return axios
      .get("https://us-central1-jwcxi-registration.cloudfunctions.net/info")
      .then(res => res.data);
  }
}

export default new RequestService();
