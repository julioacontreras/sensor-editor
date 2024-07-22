import { useState, useContext } from 'react'
import TypeSimbolsSelect from './components/type-symbol-select'
import AssetOptions from './components/assets-options'
import SymbolProperties from './components/symbol-properties'
import BehaviorOptions from '../../behaviors/components/behavior-options'
import { BOUND_NULL } from '@/types/symbol-canvas'
import { CanvasContext } from '@/context/canvas'
import { CanvasContextData, StateInteraction, TypeElement } from '@/types/canvas-context-data'
import { TypeSymbolCanvas } from '@/types/asset'
import { useCreateRectangle } from '@/services/editor-2d/use-create-rectangle'

export default function Component() {
  const [typeBound, setTypeBound] = useState<number>(BOUND_NULL)
  const [asset, setAsset] = useState(0)
  const [behavior, setBehavior] = useState(0)

  const context = useContext(CanvasContext) as CanvasContextData
  const createRectangle = useCreateRectangle()
  
  const createAsset = (asset: number) => {
    setAsset(asset)
    if (asset === TypeSymbolCanvas.RECT) {
      context.interactions.stateInteraction = StateInteraction.PREPARED_TO_CREATE
      context.interactions.typeElement = TypeElement.RECTANGLE_2D
      createRectangle()
    }
  }

  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      <TypeSimbolsSelect onChange={setTypeBound}></TypeSimbolsSelect>
      {
        (typeBound !== BOUND_NULL) &&
           (<>
          <AssetOptions selected={asset} onChange={createAsset}></AssetOptions>
          {
            (context.interactions.stateInteraction === StateInteraction.SELECTED) && 
            (<>
              <BehaviorOptions asset={asset} selected={behavior} onChange={setBehavior}></BehaviorOptions>
              <SymbolProperties asset={asset} ></SymbolProperties>                     
            </>)
          }
          </>)
      }
    </section>
  )
}
