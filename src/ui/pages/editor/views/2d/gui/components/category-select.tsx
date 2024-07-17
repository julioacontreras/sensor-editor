import { Select, SelectItem } from '@nextui-org/react'

export type Props = {
  onChange: (value: string) => void 
}

export default function Component(props: Props) {

  const layers = [
    {
      label: 'Temperature',
      id: 'temperature'
    },
    {
      label: 'Electric',
      id: 'electric'
    },
    {
      label: 'Gas',
      id: 'gas'
    },
    {
      label: 'On/Off',
      id: 'power'
    },
    {
      label: 'Mixed',
      id: 'mixed'
    },
    {
      label: 'Most used',
      id: 'most-used'
    },
    {
      label: 'Favorites',
      id: 'favorites'
    }
  ] 

  return (
    <>
        <Select 
        label="Select category"
        className="max-w-xs "
        onChange={(event) => { props.onChange(event.target.value) }}
        >
          {layers.map((layer) => (
            <SelectItem key={layer.id}>
              {layer.label}
            </SelectItem>
          ))}
        </Select>      
    </>
  )
}