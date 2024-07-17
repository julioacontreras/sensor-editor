import { useState } from 'react'
import VisionSelect from './components/vision-select'
import { Tabs, Tab } from '@nextui-org/react'

export default function Component() {
  const [vision, setVision] = useState<string>('')

  const tabs = [
    {
      id: "assets",
      label: "Assets"
    },
    {
      id: "properties",
      label: "Props"
    }
  ]

  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">

       <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.id === 'assets' &&
              <>              
                <VisionSelect onChange={setVision}></VisionSelect>
                {vision}
              </>
            }
          </Tab>
        )}
      </Tabs>
    </section>
  )
}