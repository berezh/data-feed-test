import { Feed } from "../../../lib/interfaces";
import { EuState } from "../components/data-gererator";
import { basicReduxAction } from "src/redux/utils/action";

const { action } = basicReduxAction("general");

export const GeneralActions = {
  loadStateFeedRequest: action<any>("loadStateFeedRequest"),
  loadStateFeedSuccess: action<Feed<EuState>>("loadStateFeedSuccess"),
};
