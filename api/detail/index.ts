import Request from "../index";
import type { IResultData } from "../index";
import type { TDetail, IDetailData } from "./type";

export const getDetailData = (type: TDetail = "oppo") =>
  Request.get<IResultData<IDetailData>>("/oppoDetail", {
    type,
  });
