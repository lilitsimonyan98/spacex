import React, {useState, useRef} from 'react'

import useDrag from '../hooks/useDrag'

export interface LaunchProps {
    children?: React.ReactNode;
    id: string;
    onClick?: () => void
}

const Launch: React.FC<LaunchProps> = ({children, id, onClick}) => {
    const dragRef: React.MutableRefObject<any> = useRef()
    const [classValue, setClassValue] = useState('grab')
    useDrag({
            id: id,
            effect: 'dragEffect',
            ref: dragRef,
            onDragStart: () => setClassValue('grabbing'),
            onDragEnd: () => {
                setClassValue('grab')
            }
        }
    )
    return <div className={`launches-container__column--item ${classValue}`} ref={dragRef} onClick={onClick}>
        {children}
    </div>
}
export default Launch
