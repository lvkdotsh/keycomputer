import useSWR from 'swr';

import { ALL_KEYS } from './useKeys';

export const useKey = (key_id: string) => {
    const { data, error, isValidating } = useSWR('/api/key/' + key_id, () => {
        const key = ALL_KEYS.find((key) => key.slug == key_id);

        return key || undefined;
    });

    return { data, error, isValidating };
};
