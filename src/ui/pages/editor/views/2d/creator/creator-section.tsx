import { useState, useContext } from 'react'
import TypeSimbolsSelect from './components/type-symbol-select'
import AssetOptions from './components/assets-options'
import SymbolProperties from './components/symbol-properties'
import BehaviorOptions from '../../behaviors/components/behavior-options'
import { CanvasContext } from '@/context/canvas'

export default function Component() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [typeSymbol, setTypeSymbol] = useState<string>('')
  const [asset, setAsset] = useState(0)
  const [behavior, setBehavior] = useState(0)

  const context = useContext(CanvasContext)

  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      { context }
      <TypeSimbolsSelect onChange={setTypeSymbol}></TypeSimbolsSelect>
      <AssetOptions selected={asset} onChange={setAsset}></AssetOptions>
      <BehaviorOptions asset={asset} selected={behavior} onChange={setBehavior}></BehaviorOptions>
      <SymbolProperties asset={asset} ></SymbolProperties>
    </section>
  )
}
