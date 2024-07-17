import { TypeSymbolCanvas } from '@/types/asset'
import { Input } from '@nextui-org/react'

type Props = {
  asset: number
}

export default function Component(props: Props) {
  if (props.asset === TypeSymbolCanvas.NULL) {
    return
  }
  return (
    <section>
      Position
      <div className="flex gap-2 pt-2">
        <Input type="text" labelPlacement="outside" label="X" />
        <Input type="text" labelPlacement="outside" label="Y" />
      </div>
    </section>
  )
}