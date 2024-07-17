import BtnOnOff from '@/ui/components/btn-on-off'
import TagIcon from '@/ui/components/icons/tag-icon'
import AlertIcon from '@/ui/components/icons/alert-icon'
import AnimationIcon from '@/ui/components/icons/animation-icon'

type Props = {
  asset: number,
  selected: number,
  onChange: (val: number) => void
}

export default function Component(props: Props) {
  if (props.asset === 0) {
    return
  }
  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      Behaviors

      <div className="flex gap-3">
        <BtnOnOff label="Create tag behavior" index={1} onClick={props.onChange} selected={props.selected} >
          <TagIcon state={props.selected === 1 ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create alert behavior" index={2} onClick={props.onChange} selected={props.selected} >
          <AlertIcon state={props.selected === 2 ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create animation behavior" index={3} onClick={props.onChange} selected={props.selected} >
          <AnimationIcon state={props.selected === 3 ? 'on' : 'off' }  />
        </BtnOnOff>  
      </div>
    </section>
  )
}