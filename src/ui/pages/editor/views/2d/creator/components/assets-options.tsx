import BtnOnOff from '@/ui/components/btn-on-off'
import LineIcon from '@/ui/components/icons/line-icon'
import RectIcon from '@/ui/components/icons/rect-icon'
import TextIcon from '@/ui/components/icons/text-icon'
import SelectIcon from '@/ui/components/icons/select-icon'
import ImageIcon from '@/ui/components/icons/image-icon'
import { TypeSymbolCanvas } from '@/types/asset'

type Props = {
  selected: number,
  onChange: (val: number) => void
}

export default function Component(props: Props) {
  return (
    <section className="pt-3 px-1 text-sm flex flex-col gap-3">
      Assets

      <div className="flex gap-3">
        <BtnOnOff label="Select symbol" onClick={props.onChange} index={TypeSymbolCanvas.NULL} selected={props.selected} >
          <SelectIcon state={props.selected === TypeSymbolCanvas.NULL ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create line"  onClick={props.onChange} index={TypeSymbolCanvas.LINE} selected={props.selected} >
          <LineIcon state={props.selected === TypeSymbolCanvas.LINE ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create rect"  onClick={props.onChange} index={TypeSymbolCanvas.RECT} selected={props.selected} >
          <RectIcon state={props.selected === TypeSymbolCanvas.RECT ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create text"  onClick={props.onChange} index={TypeSymbolCanvas.TEXT} selected={props.selected} >
          <TextIcon state={props.selected === TypeSymbolCanvas.TEXT ? 'on' : 'off' }  />
        </BtnOnOff>  
        <BtnOnOff label="Create icon"  onClick={props.onChange} index={TypeSymbolCanvas.ICON} selected={props.selected} >
          <ImageIcon state={props.selected === TypeSymbolCanvas.ICON ? 'on' : 'off' }  />
        </BtnOnOff>  
      </div>
    </section>
  )
}