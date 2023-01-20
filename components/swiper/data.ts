import type { CSSProperties } from "vue";

export interface IList {
  imgUrl: string;
  href?: string;
}

export interface IProps {
  list: IList[];
  imgStyle?: CSSProperties;
}
