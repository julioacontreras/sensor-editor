import { useEffect, useRef, useState } from 'react'
import Sidebar from '@/ui/components/sidebar'
import { useViewer } from '@/services/viewer'
import Topbar from './views/topbar/topbar'
import Sidebar2D from './views/2d/sidebar-2d'
import Sidebar3D from './views/3d/sidebar-3d'
import { MODE_2D, MODE_3D } from '@/consts/modes'
import { CanvasContext, createCleanData } from '@/context/canvas'

export default function Component() {
  const [mode, setMode] = useState<string>('')
  const viewer3D = useRef(null)
  const data = createCleanData()
  const viewer = useViewer()

  useEffect(() => {
    if (viewer3D?.current) {
      (viewer3D.current as HTMLElement).appendChild(viewer.getDOM())
    }
  }, [])

  return (
    <CanvasContext.Provider value={data} >
      <div className='p-3 flex flex-col gap-3'>
        <Topbar onChangeMode={setMode}></Topbar>
        <div className="flex gap-2">
          <Sidebar>
            <div>
              {mode === MODE_2D && (<Sidebar2D></Sidebar2D>)}          
              {mode === MODE_3D && (<Sidebar3D></Sidebar3D>)}   
            </div>
          </Sidebar>  
          <div className='w-[900px] h-[725px] border border-gray-800 z-10 rounded-lg overflow-hidden' ref={viewer3D}></div>
        </div>
      </div>
    </CanvasContext.Provider>
  )
}
