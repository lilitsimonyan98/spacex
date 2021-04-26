import {useState, useEffect, RefObject} from 'react'

export interface useDragProps {
    id: string;
    effect?: string;
    ref: RefObject<HTMLInputElement>;
    onDragStart?: () => void
    onDragOver?: () => void
    onDragEnd?: () => void
}
const useDrag = ({ id, effect, ref, onDragStart, onDragOver, onDragEnd }: useDragProps) => {
    const [dragState, updateDragState] = useState('draggable')
    const dragStartCb = (ev: any ) => {
        updateDragState('dragStart')
        ev.dataTransfer.dropEffect = effect
        ev.dataTransfer.setData('source', id)
        onDragStart && onDragStart()
    }
    const dragOverCb = () => {
        updateDragState('dragging')
        onDragOver && onDragOver()
    }

    const dragEndCb = () => {
        updateDragState('draggable')
        onDragEnd && onDragEnd()
    }
    useEffect(() => {
        const elem = ref.current
        if (elem) {
            elem.setAttribute('draggable', 'true')
            elem.addEventListener('dragstart', dragStartCb)
            elem.addEventListener('dragover', dragOverCb)
            elem.addEventListener('dragend', dragEndCb)
            return () => {
                elem.removeEventListener('dragstart', dragStartCb)
                elem.removeEventListener('dragover', dragOverCb)
                elem.removeEventListener('dragend', dragEndCb)
            }
        }
    }, [])
    return {
        dragState: dragState
    }
}

export default useDrag
