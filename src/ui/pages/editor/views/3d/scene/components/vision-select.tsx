import { Select, SelectItem } from '@nextui-org/react'

export type Props = {
  onChange: (value: string) => void 
}

export default function Component(props: Props) {

  const layers = [
    {
      label: 'All',
      id: 'all'
    },
    {
      label: 'Electricity',
      id: 'electricity'
    },
    {
      label: 'Hydraulics',
      id: 'hydraulics'
    },
    {
      label: 'Ventilation',
      id: 'ventilation'
    },
    {
      label: 'Walls',
      id: 'walls'
    },
    {
      label: 'Sensors',
      id: 'sensors'
    }
  ] 

  return (
    <>
        <Select 
        label="Select the vision"
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