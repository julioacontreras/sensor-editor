import { Vector2 } from 'three'
import { Size } from '@/types/size'
import { Offset } from '@/types/offset';

export const pointerMove = (pointer: Vector2, event: MouseEvent, size: Size, offset: Offset ) => {
	pointer.x = ( event.clientX - offset.left / size.w  - offset.left) * 2 - 1;
	pointer.y = - (event.clientY  - offset.top / size.h  - offset.top) * 2 + 1;
	console.log(pointer)
	return pointer
}
