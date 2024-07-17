import { useEffect } from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import { BOUND_3D, BOUND_INTERFACE, BOUND_SPRITE } from '@/types/symbol-canvas'

export type Props = {
  onChange: (value: number) => void 
}

export default function Component(props: Props) {

  const typeSimbols = [
    {
      label: 'Interface',
      id: BOUND_INTERFACE
    },
    {
      label: 'Bound 3D',
      id: BOUND_3D
    },
    {
      label: 'Sprite',
      id: BOUND_SPRITE
    }
  ] 

  useEffect(() => {

  }, )

  return (
    <>
        <Select 
        label="Select type of symbol"
        className="max-w-xs"
        onChange={(event) => {props.onChange(event.target.value as unknown as number)}}
        >
          {typeSimbols.map((typeSimbol) => (
            <SelectItem
              key={typeSimbol.id}>
              {typeSimbol.label}
            </SelectItem>
          ))}
        </Select>      
    </>
  )
}