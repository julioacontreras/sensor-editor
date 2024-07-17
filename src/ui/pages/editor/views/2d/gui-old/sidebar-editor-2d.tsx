import { useState } from 'react'
import AssetOptions from '../creator/components/assets-options'
import BehaviorOptions from '../../behaviors/components/behavior-options'
import SymbolProperties from '../creator/components/symbol-properties'

export default function Component() {
  const [asset, setAsset] = useState(0)
  const [behavior, setBehavior] = useState(0)

  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      <AssetOptions selected={asset} onChange={setAsset}></AssetOptions>
      <BehaviorOptions asset={asset} selected={behavior} onChange={setBehavior}></BehaviorOptions>
      <SymbolProperties asset={asset} ></SymbolProperties>
      <p>Properties</p>
    </section>
  )
}