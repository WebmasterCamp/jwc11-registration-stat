export interface Summary {
  date: Date;
  design: number;
  content: number;
  marketing: number;
  programming: number;
}

export interface CamperSummary {
  seperate: {
    authenticated: Summary[];
    submitted: Summary[];
  };
  accumulate: {
    authenticated: Summary[];
    submitted: Summary[];
  };
}

export enum Major {
  design = "design",
  content = "content",
  marketing = "marketing",
  programming = "programming",
  all = "all"
}
