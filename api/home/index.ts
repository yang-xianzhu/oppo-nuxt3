import Request from "../index";
import type { IResultData } from "../index";
import type { THomeData, IData } from "./type";

export const getHomeData = (type: THomeData = "oppo") =>
  Request.get<IResultData<IData>>("/home/info", {
    type,
  });
