'use client'

import { ThemeContext } from '@/context/theme-context'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext)

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, [])
    
    if (mounted) {
      return (
        <main className={theme}>{children}</main>
      )
    }
}

export default ThemeProvider