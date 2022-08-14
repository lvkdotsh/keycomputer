import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FamilyType } from '../../../server/src/types/FamilyType';
import { KeyPreviewCard } from '../components/KeyPreviewCard';
import { useFamily } from '../lib/useFamily';
import { useKeysByFamily } from '../lib/useKeys';

const Keys: FC<{ family_id: string }> = ({ family_id }) => {
    const { data, error } = useKeysByFamily(family_id);

    if (!data) return <></>;

    if (error) return <>Error</>;

    return (
        <div>
            <h2 className="mt-4 mb-4 text-xl">
                Keys in this Collection ({data.length})
            </h2>
            <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {data.map((key, index) => (
                    <div key={index} className="">
                        <KeyPreviewCard data={key} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FamilyDataPage: FC<{ data: FamilyType }> = ({ data }) => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="w-full">
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <div>
                    <Keys family_id={data.slug} />
                </div>
                {data.affiliated && (
                    <div>
                        {data.affiliated.map((affiliate, index) => (
                            <li key={index}>
                                <Link to={`/family/${affiliate}`}>
                                    {affiliate}
                                </Link>
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const FamilyPage: FC = () => {
    const { key_id } = useParams();
    const { data, error, isValidating } = useFamily(key_id);

    if (isValidating) return <div>Loading...</div>;

    if (!data) return <div>No Data</div>;

    return <FamilyDataPage data={data} />;
};
