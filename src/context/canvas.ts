import { createContext } from 'react'
import {type CanvasContextData, StateInteraction, TypeElement } from '@/types/canvas-context-data'

export const createCleanData = () => {
  const data: CanvasContextData = {
    canvas: {
      scenes: [],
      interfaces: []
    },
    interactions: {
      stateInteraction: StateInteraction.NULL,
      typeElement: TypeElement.RECTANGLE_2D,
    }
  }
  return data
}

export const CanvasContext = createContext({})
