import {Listbox, ListboxItem} from '@nextui-org/react'
import ListboxWrapper from '@/ui/components/listbox-wrapper'
import EnergyIcon from '@/ui/components/icons/energy-icon'

export default function Component() {
  return (
    <section>
      <p className='pb-2'>Symbols</p>
      <ListboxWrapper>
        <Listbox variant="flat" aria-label="Symbols">
          <ListboxItem
            key="new"
            description="Consume energy sensor"
            startContent={<EnergyIcon state="off" size="md" ></EnergyIcon>}
          >
            Energy
          </ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </section>
  )
}