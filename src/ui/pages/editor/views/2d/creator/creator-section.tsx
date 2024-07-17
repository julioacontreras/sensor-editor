import { useState, useEffect, useContext } from 'react'
import TypeSimbolsSelect from './components/type-symbol-select'
import AssetOptions from './components/assets-options'
import SymbolProperties from './components/symbol-properties'
import BehaviorOptions from '../../behaviors/components/behavior-options'
import { BOUND_NULL } from '@/types/symbol-canvas'
import { CanvasContext } from '@/context/canvas'
import { CanvasContextData, StateInteraction } from '@/types/canvas-context-data'

export default function Component() {
  const [typeBound, setTypeBound] = useState<number>(BOUND_NULL)
  const [asset, setAsset] = useState(0)
  const [behavior, setBehavior] = useState(0)

  const context = useContext(CanvasContext) as CanvasContextData
  
  useEffect(() => {
    context.interactions.state = StateInteraction.CREATE_ASSET
    console.log(asset)
  }, [asset, context.interactions])

  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      <TypeSimbolsSelect onChange={setTypeBound}></TypeSimbolsSelect>
      {
        (typeBound !== BOUND_NULL) &&
           (<>
          <AssetOptions selected={asset} onChange={setAsset}></AssetOptions>
          {
            (context.interactions.state === StateInteraction.SELECTED) && 
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
