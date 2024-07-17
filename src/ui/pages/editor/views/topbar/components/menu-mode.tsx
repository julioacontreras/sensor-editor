import { Tabs, Tab } from '@nextui-org/react'
import { modes } from '@/consts/modes'

type Props = {
  onChangeMode: (mode: string) => void
}

export default function Component(props: Props) {
  return (
    <>
      <Tabs onSelectionChange={ (key) => props.onChangeMode(key.toString()) } aria-label="Menu" items={modes}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
          </Tab>
        )}
      </Tabs>
    </>
  )
}