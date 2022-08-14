import { FC } from 'react';
import { Link } from 'react-router-dom';

import { KeyType } from '../../../server/src/types/KeyType';

export const KeyPreviewCard: FC<{ data: KeyType }> = ({ data }) => {
    return (
        <Link to={`/key/${data.slug}`}>
            <div className="w-full bg-neutral-800 p-2 hover:bg-neutral-700 rounded-md">
                <div
                    className="block cursor-pointer w-full bg-neutral-400 rounded-md overflow-hidden"
                    style={{ aspectRatio: '3 / 4' }}
                >
                    <img
                        src={`/set/preview/${data.slug}.webp`}
                        className="w-full h-full object-cover rounded-md"
                        style={{ aspectRatio: '3 / 4' }}
                        alt={data.slug}
                    />
                </div>
                <div className="flex flex-col items-center px-2 py-2 mt-2">
                    <div className="font-bold">{data.name}</div>
                </div>
            </div>
        </Link>
    );
};
