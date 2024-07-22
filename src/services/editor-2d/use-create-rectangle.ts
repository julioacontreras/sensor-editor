import { Position2D } from '@/types/position-2d'
import { useViewer } from '../viewer'

export const useCreateRectangle = (
  /* callback */
) => {
  const viewer = useViewer()
  const canvas = document.querySelector('canvas')
  if (!canvas) {
    throw new Error('Not exist canvas')
  }
  const posStart: Position2D = {
    x: 0,
    y: 0
  }

  const prepareToCreateRectangle = () => {
    const el = document.querySelector('body')
      if (el) {
        el.style.cursor = 'crosshair'
      }

      // start create
      const handleMouseClick = (event: MouseEvent) => {
        const p = viewer.pointerMouse(event)
        posStart.x = p.x
        posStart.y = p.y
        console.log('click', posStart)
        // create line helpers
      }

      // creating
      const handleMouseMove = (event: MouseEvent) => {
        // moving line helpers
        viewer.pointerMouse(event)
      }
      
      // created
      const handleMouseUp = (event: MouseEvent) => {
        const p = viewer.pointerMouse(event)
        posStart.x = p.x
        posStart.y = p.y
        // destroy line helpers
        // ...

        /*
        // create rectangle
        viewer.createShape({
          size: {
            w: 300,
            h: 100
          },
          position: {
            x: posStart.x,
            y: 0,
            z: posStart.y
          },
          name: 'Test',
          backgroundColor: 0x222222,
          renderOnTop: true,
          renderOrder: 5,
          visible: true
        })
        */
        viewer.render()
        // ...

        // back default cursor
        const el = document.querySelector('body')
        if (el) {
          el.style.cursor = 'default'
        }

        // send callback element to add in json
        // ...

        // destroy events
        canvas.removeEventListener('mouseup', handleMouseUp)
        canvas.removeEventListener('click', handleMouseClick)
        canvas.removeEventListener('mousemove', handleMouseMove)
      }

      canvas.addEventListener('mousemove', handleMouseMove)
      canvas.addEventListener('click', handleMouseClick)
      canvas.addEventListener('mouseup', handleMouseUp)
  }
  
  return prepareToCreateRectangle
} 

