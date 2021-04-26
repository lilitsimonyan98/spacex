import React, { useRef} from 'react'
import useDrop from '../hooks/useDrop'

export interface ColumnProps {
    children?: React.ReactNode;
    heading?: string;
    onDrop: (id: string | number) => void;
}

const Column: React.FC<ColumnProps> = ({ children, heading, onDrop }) => {
    const dropRef: React.Ref<any> = useRef()
    useDrop({
        ref: dropRef,
        onDrop
    })
    return (
        <div className='launches-container__column' ref={dropRef}>
            <h3>{heading}</h3>
            {children}
        </div>
    )
}

export default Column
