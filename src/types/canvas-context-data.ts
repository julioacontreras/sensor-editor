import { Canvas } from "./canvas"

export enum StateInteraction {
  NULL = 0,
  CREATE_ASSET,
  DRAGGING,
  DROPPED,
  SELECTED
}

export type CanvasContextData = {
  canvas: Canvas,
  interactions: {
    state: StateInteraction
  }
}