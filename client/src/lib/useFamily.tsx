import useSWR from 'swr';

import { FamilyType } from '../../../server/src/types/FamilyType';

export const ALL_FAMILY: FamilyType[] = [
    {
        name: 'Common Cabinet Locks',
        slug: 'cabinet',
        affiliated: [],
    },
    {
        name: 'Tubular 7-Pin',
        slug: 'tubular-7',
        affiliated: [],
    },
    {
        name: 'New York',
        slug: 'newyork',
        affiliated: [],
    },
    {
        name: 'Miscellaneous',
        slug: 'misc',
        affiliated: [],
    },
];

export const useFamilies = () => {
    const { data, error } = useSWR('/api/families', () => {
        return ALL_FAMILY as FamilyType[];
    });

    return { data, error };
};

export const useFamily = (family_id: string) => {
    const { data, error, isValidating } = useSWR(
        '/api/family/' + family_id,
        () => {
            const key = ALL_FAMILY.find((key) => key.slug == family_id);

            if (!key) throw new Error('Not Found');

            return key || undefined;
        }
    );

    return { data, error, isValidating };
};
