import { useCallback } from 'react';

export function useSelectCallback(
    action: (value: string) => void,
    ...params: any[]
): (e: React.FormEvent<HTMLSelectElement>) => void {
    return useCallback((e: React.FormEvent<HTMLSelectElement>) => {
        action(e.currentTarget.value);
    }, params);
}
