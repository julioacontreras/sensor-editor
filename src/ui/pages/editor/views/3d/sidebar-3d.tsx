import { Tabs, Tab } from '@nextui-org/react'
import { tabs } from './consts/tabs'
import { SCENE_3D, SYMBOLS_3D } from './consts/tabs'

export default function Component() {
  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
       <Tabs aria-label="3D" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.id === SCENE_3D &&
              <>
                scene
              </>
            }
            {item.id === SYMBOLS_3D &&
              <>
                symbols
              </>
            }
          </Tab>
        )}
      </Tabs>
    </section>
  )
}
