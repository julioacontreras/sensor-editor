import { Button } from '@nextui-org/react'

type Props = {
  selected: number,
  label: string,
  index: number,
  onClick: (val: number) => void
  children: JSX.Element
}

export default function Component(props: Props) {
  return (
    <Button onClick={() => { props.onClick(props.index) }} className={ props.selected === props.index ? 'bg-white' : 'bg-gray-700 ' }  isIconOnly aria-label={props.label} >
      { props.children }
    </Button>  
  )
}