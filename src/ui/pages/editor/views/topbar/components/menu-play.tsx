import { Tabs, Tab } from '@nextui-org/react'
import { optionsPlay } from '@/consts/play'

export default function Component() {
  return (
    <>
      <Tabs aria-label="Play" items={optionsPlay}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
          </Tab>
        )}
      </Tabs>
    </>
  )
}