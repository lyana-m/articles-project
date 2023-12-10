import { ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

export interface AnimationContextValues {
  Spring?: SpringType;
  Gesture?: GestureType;
  isLoaded: boolean;
}

const getAsyncLibs = async () => {
  return await Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

const AnimationContext = createContext<AnimationContextValues>({} as AnimationContextValues);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();

  useEffect(() => {
    getAsyncLibs().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded,
    }),
    [isLoaded]
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};

export const useAsyncAnimation = () => {
  return useContext(AnimationContext);
};
