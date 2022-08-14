import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { KeyType } from '../../../server/src/types/KeyType';
import { useFamily } from '../lib/useFamily';
import { useKey } from '../lib/useKey';

const VARIATIONS = [
    ['/set/front/$ID.webp', 'Front'],
    ['/set/back/$ID.webp', 'Back'],
    ['/set/coin/$ID.webp', 'Coin'],
];

const ImageData: FC<{ data: KeyType }> = ({ data }) => {
    const [activeVariation, setActiveVariation] = useState(0);

    return (
        <div className="w-full sm:w-64 max-w-full flex sm:flex-col justify-center">
            <div
                className="w-64 max-w-full h-fit bg-neutral-800 border-2 border-neutral-700"
                style={{ aspectRatio: '3/4' }}
            >
                <img
                    src={VARIATIONS[activeVariation]
                        .at(0)
                        .replace('$ID', data.slug)}
                    alt=""
                />
            </div>
            <div className="h-full sm:h-auto sm:w-full max-w-full sm:pt-4 pl-2 flex flex-col sm:flex-row sm:flex-row justify-around gap-2 sm:px-4">
                {VARIATIONS.map((variation, index) => (
                    <button
                        key={index}
                        className={'h-fit w-20 sm:w-full'}
                        onClick={() => {
                            setActiveVariation(index);
                        }}
                    >
                        <div
                            className="w-full bg-neutral-700"
                            style={{ aspectRatio: '3 / 4' }}
                        >
                            <img
                                src={variation.at(0).replace('$ID', data.slug)}
                                className={
                                    activeVariation == index
                                        ? 'outline-yellow-500 outline'
                                        : ''
                                }
                                alt={variation.at(1)}
                            />
                        </div>
                        <div className="hidden sm:block">{variation.at(1)}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

const FamilyLink: FC<{ family_id: string }> = ({ family_id }) => {
    const { data, error } = useFamily(family_id);

    if (data)
        return (
            <Link to={`/family/${data.slug}`} className="hover:underline">
                {data.name}
            </Link>
        );

    if (error) return <>Unknown</>;

    return <>Resolving...</>;
};

const KeyDataPage: FC<{ data: KeyType }> = ({ data }) => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex justify-center">
                    <ImageData data={data} />
                </div>
                <div className="pt-4 w-full">
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                    <h2 className="text-base px-2 py-1 bg-neutral-700 w-fit">
                        {data.slug}
                    </h2>
                    <div className="mt-4 w-full">
                        <h2 className="">{data.description}</h2>
                        <div className="flex flex-col gap-4">
                            <div className="h-16 bg-neutral-700 relative w-full overflow-hidden px-4 py-2">
                                <div
                                    className="absolute right-0 top-0 h-full"
                                    style={{
                                        background: `linear-gradient(to left, transparent, rgb(64, 64, 64)), url("/set/vendor/${data.obtained_from.toLowerCase()}.webp")`,
                                        backgroundSize: 'cover',
                                        aspectRatio: '6 / 4',
                                    }}
                                />
                                <div className="font-bold">Vendor</div>
                                <div>{data.obtained_from}</div>
                            </div>
                            {data.family.map((family, index) => (
                                <Link
                                    to={`/family/${family}`}
                                    className="h-16 bg-neutral-700 hover:brightness-90 relative w-full overflow-hidden px-4 py-2"
                                    key={index}
                                >
                                    <div
                                        className="absolute right-0 top-0 h-full"
                                        style={{
                                            background: `linear-gradient(to left, transparent, rgb(64, 64, 64)), url("/set/family/${family.toLowerCase()}.webp")`,
                                            backgroundSize: 'cover',
                                            aspectRatio: '6 / 4',
                                        }}
                                    />
                                    <div className="font-bold">Family</div>
                                    <div>{family}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const KeyPage: FC = () => {
    const { key_id } = useParams();
    const { data, error, isValidating } = useKey(key_id);

    if (isValidating) return <div>Loading...</div>;

    if (!data) return <div>No Data</div>;

    return <KeyDataPage data={data} />;
};
