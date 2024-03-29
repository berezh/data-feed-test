import { Feed } from "../../../lib/interfaces";
import { EuState } from "../components/data-gererator";
import { basicReduxAction } from "src/redux/utils/action";

const { action } = basicReduxAction("general");

export const GeneralActions = {
  loadStateFeedRequest: action<{ skip: number }>("loadStateFeedRequest"),
  loadStateFeedSuccess: action<Feed<EuState>>("loadStateFeedSuccess"),
};
