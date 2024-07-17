import { createContext } from 'react'
import {type CanvasContextData, StateInteraction } from '@/types/canvas-context-data'

export const createCleanData = () => {
  const data: CanvasContextData = {
    canvas: {
      scenes: [],
      interfaces: []
    },
    interactions: {
      state: StateInteraction.NULL
      // orderCount: 0
      // prepapreCreateRectAsset
      // resizeRectAsset
      // createRectAsset
    }
  }
  return data
}

export const CanvasContext = createContext({})
