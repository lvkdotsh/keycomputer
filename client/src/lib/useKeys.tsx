import useSWR from 'swr';

import { KeyType } from '../../../server/src/types/KeyType';

const DEFCON = 'DEFCON';

export const ALL_KEYS: KeyType[] = [
    {
        name: 'CH751',
        slug: 'ch751',
        obtained_from: DEFCON,
        family: ['misc'],
    },
    { name: '501CH', slug: '501ch', obtained_from: DEFCON, family: ['misc'] },
    { name: 'CAT 74', slug: 'cat74', obtained_from: DEFCON, family: ['misc'] },
    {
        name: 'C413A',
        slug: 'c413a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'C390A',
        slug: 'c390a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'C415A',
        slug: 'c415a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'C346A',
        slug: 'c346a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'C642A',
        slug: 'c642a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'C420A',
        slug: 'c420a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'C420A',
        slug: 'c420a',
        family: ['cabinet'],
        obtained_from: DEFCON,
    },
    {
        name: 'X4002',
        slug: 'x4002',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'FEO-K1',
        slug: 'feok1',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'EPCO 2',
        slug: 'epco2',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'EPCO 1',
        slug: 'epco1',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'Server Key (K-333)',
        slug: 'k333',
        obtained_from: DEFCON,
        family: ['misc'],
    },
    {
        name: 'X4001',
        slug: 'x4001',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'EX 515',
        slug: 'ex515',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'EX 514',
        slug: 'ex514',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'EX 513',
        slug: 'ex513',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'EX 511',
        slug: 'ex511',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'KONE 5',
        slug: 'kone5',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'KONE 4',
        slug: 'kone4',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'KONE 3',
        slug: 'kone3',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'KONE 2',
        slug: 'kone2',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    {
        name: 'KONE 1',
        slug: 'kone1',
        family: ['tubular-7', 'elevator'],
        obtained_from: DEFCON,
    },
    { name: '2642', slug: '2642', obtained_from: DEFCON, family: ['newyork'] },
    { name: '1620', slug: '1620', obtained_from: DEFCON, family: ['newyork'] },
    {
        name: 'Tractor (1147)',
        slug: '1147',
        obtained_from: DEFCON,
        family: ['misc'],
    },
    {
        name: 'Golfcart Key (CC1)',
        slug: 'cc1',
        obtained_from: DEFCON,
        family: ['misc'],
    },
    {
        name: 'Handcuff Key',
        slug: 'handcuff',
        obtained_from: DEFCON,
        family: ['misc'],
    },
];

export const useKeys = (search: string) => {
    const { data, error } = useSWR('/api/keys', () => {
        return ALL_KEYS as KeyType[];
    });

    return { data, error };
};

export const useKeysByFamily = (family_id: string) => {
    const { data, error } = useSWR('/api/keys/' + family_id, () => {
        return ALL_KEYS.filter((key) =>
            key.family.includes(family_id)
        ) as KeyType[];
    });

    return { data, error };
};
