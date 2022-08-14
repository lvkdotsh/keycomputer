export type KeyType = {
    // Formal slug, used as slug, ex "ch751"
    slug: string;
    // Informal Name, used as title, ex "CH751, the universal key to everything"
    name: string;
    // Information about the key and its use cases
    description?: string;
    // 
    pinning?: string;
    // 
    warnings?: [string];
    // "tubular-7", ID relating to FamilyType;
    family?: string;
    //
    imgs?: string[];
};
