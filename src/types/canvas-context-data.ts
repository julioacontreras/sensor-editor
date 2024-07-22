import { Canvas } from './canvas'

export enum StateInteraction {
  NULL = 0,
  PREPARED_TO_CREATE,
  CREATING,
  DRAGGING,
  DROPPED,
  SELECTED
}

export enum TypeElement {
  NULL = 0,
  RECTANGLE_2D,  
  LINE_2D,  
  ICON_2D,  
  TEXT_2D,  
}


export type CanvasContextData = {
  canvas: Canvas,
  interactions: {
    stateInteraction: StateInteraction
    typeElement: TypeElement
  }
}