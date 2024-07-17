import { useState } from 'react'
import CategorySelect from './components/category-select'
import ListSymbol from './components/list-symbol'

export default function Component() {
  const [category, setCategory] = useState<string>('')

  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      <CategorySelect onChange={setCategory}></CategorySelect>
      <ListSymbol></ListSymbol>
      {category}
    </section>
  )
}