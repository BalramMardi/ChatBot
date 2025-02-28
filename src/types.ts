export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface CDP {
  id: string;
  name: string;
  docsUrl: string;
  logo: string;
  textcolor: string;
  color: string;
}

export interface CDPData {
  [key: string]: CDP;
}
