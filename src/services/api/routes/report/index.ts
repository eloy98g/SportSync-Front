import getReportReasons from "./methods/getReportReasons";
import report from "./methods/report";

export class Report {
  static async getReportReasons() {
    return getReportReasons();
  }

  static async report(input: any) {
    return report(input);
  }
}
