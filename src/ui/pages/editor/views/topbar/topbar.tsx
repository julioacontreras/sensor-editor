import TopBar from '@/ui/components/topbar'
import MenuArea from './components/menu-mode'
import MenuPlay from './components/menu-play'
import MenuLogin from './components/menu-login'

type Props = {
  onChangeMode: (mode: string) => void
}

export default function Component(props: Props) {
  return (
    <TopBar>
      <section className='flex justify-between'>
        <MenuArea onChangeMode={props.onChangeMode}></MenuArea>
        <MenuPlay></MenuPlay>
        <MenuLogin></MenuLogin>
      </section>
    </TopBar>
  )
}