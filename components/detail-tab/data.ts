import type { CSSProperties } from "vue";

export interface IList {
  text: string;
  id: string;
}
export interface IProps {
  style: CSSProperties;
  list: IList[];
}
