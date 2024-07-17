import { Tabs, Tab } from '@nextui-org/react'
import SymbolSection from './gui/symbol-section'
import CreatorSection from './creator/creator-section'
import { CREATOR_2D, GUI_2D, tabs } from './consts/tabs-2d'

export default function Component() {
  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
       <Tabs aria-label="2D" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.id === GUI_2D &&
              <>
                <SymbolSection></SymbolSection>
              </>
            }
            {item.id === CREATOR_2D &&
              <>
                <CreatorSection></CreatorSection>
              </>
            }
          </Tab>
        )}
      </Tabs>
    </section>
  )
}
