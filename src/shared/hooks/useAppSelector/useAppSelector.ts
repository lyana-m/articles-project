import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'app/providers/StoreProvider/ui/StoreProvider';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
