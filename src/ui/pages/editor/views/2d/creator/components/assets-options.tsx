import BtnOnOff from '@/ui/components/btn-on-off'
import LineIcon from '@/ui/components/icons/line-icon'
import RectIcon from '@/ui/components/icons/rect-icon'
import TextIcon from '@/ui/components/icons/text-icon'
import SelectIcon from '@/ui/components/icons/select-icon'
import ImageIcon from '@/ui/components/icons/image-icon'

type Props = {
  selected: number,
  onChange: (val: number) => void
}

export default function Component(props: Props) {
  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      Assets

      <div className="flex gap-3">
        <BtnOnOff label="Select symbol" onClick={props.onChange} index={0} selected={props.selected} >
          <SelectIcon state={props.selected === 0 ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create line"  onClick={props.onChange} index={1} selected={props.selected} >
          <LineIcon state={props.selected === 1 ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create rect"  onClick={props.onChange} index={2} selected={props.selected} >
          <RectIcon state={props.selected === 2 ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create text"  onClick={props.onChange} index={3} selected={props.selected} >
          <TextIcon state={props.selected === 3 ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create image"  onClick={props.onChange} index={4} selected={props.selected} >
          <ImageIcon state={props.selected === 4 ? 'on' : 'off' }  />
        </BtnOnOff>  
      </div>
    </section>
  )
}