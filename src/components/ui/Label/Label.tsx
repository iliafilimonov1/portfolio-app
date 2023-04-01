import React, { useMemo } from 'react';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({children, size})=>{
    const styles = useMemo(()=> {
        switch (size) {
            case 's':
                return 'text-sm';
            case 'm':
                return 'text-md';
            case 'x':
                return 'text-xl';
            default:
                return 'text-lg'
        }
    }, [])
    
    return <div className={styles}>{children}</div>
}

export default React.memo(Label);