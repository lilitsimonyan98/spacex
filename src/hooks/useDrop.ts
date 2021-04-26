import {RefObject, useEffect, useState} from 'react'

export interface useDropProps {
    ref: RefObject<HTMLInputElement>;
    onDrop: (source: string) => void;
}

const useDrop = ({ ref, onDrop }: useDropProps) => {
    const [dropState, updateDropState] = useState('droppable')
    const dropOverCb = (ev: Event) => {
        ev.preventDefault()
        updateDropState('dragging over')
    }

    const dropCb = (ev: any) => {
        ev.preventDefault()
        onDrop(ev.dataTransfer.getData('source'))
        updateDropState('dropped')
    }
    useEffect(() => {
        const elem = ref.current
        if (elem) {
            elem.addEventListener('dragover', dropOverCb)
            elem.addEventListener('drop', dropCb)
            return () => {
                elem.removeEventListener('dragover', dropOverCb)
                elem.removeEventListener('drop', dropCb)
            }
        }
    })
    return {
        dropState
    }
}

export default useDrop
