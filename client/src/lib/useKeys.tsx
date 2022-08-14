import useSWR from "swr";
import { KeyType } from "../../../server/src/types/KeyType";

export const ALL_KEYS: KeyType[] = [
    {
        name: "CH751",
        slug: "ch751",
    },
    { name: "501CH", slug: "501ch" },
    { name: "CAT 74", slug: "cat74" },
    { name: "C413A", slug: "c413a", family: "cabinet" },
    { name: "C390A", slug: "c390a", family: "cabinet" },
    { name: "C415A", slug: "c415a", family: "cabinet" },
    { name: "C346A", slug: "c346a", family: "cabinet" },
    { name: "C642A", slug: "c642a", family: "cabinet" },
    { name: "C420A", slug: "c420a", family: "cabinet" },
    { name: "C420A", slug: "c420a", family: "cabinet" },
    { name: "X4002", slug: "x4002", family: "tubular-7" },
    { name: "FEO-K1", slug: "feok1", family: "tubular-7" },
    { name: "EPCO 2", slug: "epco2", family: "tubular-7" },
    { name: "EPCO 1", slug: "epco1", family: "tubular-7" },
    { name: "Server Key (K-333)", slug: "k333" },
    { name: "X4001", slug: "x4001", family: "tubular-7" },
    { name: "EX 515", slug: "ex515", family: "tubular-7" },
    { name: "EX 514", slug: "ex514", family: "tubular-7" },
    { name: "EX 513", slug: "ex513", family: "tubular-7" },
    {
        name: "EX 511",
        slug: "ex511",
        family: "tubular-7",
    },
    { name: "KONE 5", slug: "kone5", family: "tubular-7" },
    { name: "KONE 4", slug: "kone4", family: "tubular-7" },
    { name: "KONE 3", slug: "kone3", family: "tubular-7" },
    { name: "KONE 2", slug: "kone2", family: "tubular-7" },
    { name: "KONE 1", slug: "kone1", family: "tubular-7" },
    { name: "2642", slug: "2642" },
    { name: "1620", slug: "1620" },
    { name: "Tractor (1147)", slug: "1147" },
    { name: "Golfcart Key (CC1)", slug: "cc1" },
    { name: "Handcuff Key", slug: "handcuff" },
];

export const useKeys = (search: string) => {
    const { data, error } = useSWR("/api/keys", () => {
        return ALL_KEYS as KeyType[];
    });

    return { data, error };
};
