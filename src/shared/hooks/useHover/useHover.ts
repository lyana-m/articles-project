import { useCallback, useState } from 'react';

interface BindFunctions {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverReturnType = [boolean, BindFunctions]

export const useHover = (): UseHoverReturnType => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return [isHovered, { onMouseEnter, onMouseLeave }];
};
