import { Action } from "redux";

/**
 * @description use it to reducer-methods. Extend Action, payload added.
 */
export interface ActionWith<PayloadType = any> extends Action {
  payload: PayloadType;
}
