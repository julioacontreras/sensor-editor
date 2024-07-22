import { Vector2 } from 'three'
import { Size } from '@/types/size'

export const pointerMove = (pointer: Vector2, event: MouseEvent, size: Size ) => {
	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components
	pointer.x = ( event.clientX / size.w ) * 2 - 1;
	pointer.y = - (event.clientY / size.h) * 2 + 1;
	console.log(pointer)
	return pointer
}
