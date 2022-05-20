import React from 'react';
import ReactDom from 'react-dom';
import {AuthProvider} from './auth-context'

export const AppProvider = ({children})=>{
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}