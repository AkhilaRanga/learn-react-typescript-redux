import React, { useContext, createContext, type ReactNode } from "react";

interface ThemeContextProps {
  themeColor: string;
}

interface ThemeContextProviderProps extends ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({ themeColor: "light" });

const ThemeContextProvider = ({
  themeColor,
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={{ themeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseContextExample = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContextProvider themeColor={"dark"}>
      <div>Current theme: {theme.themeColor}</div>
    </ThemeContextProvider>
  );
};
