import React, { useMemo } from "react"

export const InvalidCredential = ({ message, type }) => {
        const parentStyle = `flex items-center w-80 justify-between p-4 border rounded border-red-900/10 ${type} ? bg-green-50 : bg-red-50`
        const color = type ? 'text-green' : 'text-red'
        const childStyle = `text-sm font-medium ${color} `    
    return (
            <div
                className={parentStyle}
                role="alert"
            >
            <strong className={childStyle}>{ message } </strong>
            
    
            </div>
        )
   
}
