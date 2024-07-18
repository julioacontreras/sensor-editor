import { Position2D } from '@/types/position-2d'

export const useCreateRectangle = (
  /* send canvas to create */
  /* callback */
) => {
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
        posStart.x = event.x
        posStart.y = event.y
        console.log('click', posStart)
        // create line helpers
      }

      // creating
      const handleMouseMove = (event: MouseEvent) => {
        console.log('move', event)
        // moving line helpers
      }
      
      // created
      const handleMouseUp = (event: MouseEvent) => {
        console.log('up', event)
        // destroy line helpers
        // ...

        // create rectangle
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

