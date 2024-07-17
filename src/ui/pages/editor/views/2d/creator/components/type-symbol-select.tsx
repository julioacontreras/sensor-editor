import { Select, SelectItem } from '@nextui-org/react'

export type Props = {
  onChange: (value: string) => void 
}

export default function Component(props: Props) {

  const typeSimbols = [
    {
      label: 'Interface',
      id: 'gui'
    },
    {
      label: 'Vinculated',
      id: 'vonculated-position-3d'
    },
    {
      label: 'Sprite',
      id: 'sprite'
    }
  ] 

  return (
    <>
        <Select 
        label="Select type of symbol"
        className="max-w-xs "
        onChange={(event) => { props.onChange(event.target.value) }}
        >
          {typeSimbols.map((typeSimbol) => (
            <SelectItem key={typeSimbol.id}>
              {typeSimbol.label}
            </SelectItem>
          ))}
        </Select>      
    </>
  )
}