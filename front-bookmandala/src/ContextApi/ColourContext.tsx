
import React, { createContext, useState, useContext } from 'react';

// Create a context for color mode
const ColorModeContext = createContext<any>(null);

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [islightmode, setIsLightMode] = useState(true);

  const toggleColorMode = () => {
    setIsLightMode(!islightmode);
  };

  return (
    <ColorModeContext.Provider value={{ islightmode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
