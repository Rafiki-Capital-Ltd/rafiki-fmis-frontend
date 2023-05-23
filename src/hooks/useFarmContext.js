import { useContext } from 'react';
import { FarmContext } from '../context';

export function useFarmContext() {
	return useContext(FarmContext);
}
