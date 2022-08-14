import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FamilyType } from '../../../server/src/types/FamilyType';
import { useFamily } from '../lib/useFamily';

const FamilyDataPage: FC<{ data: FamilyType }> = ({ data }) => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="w-full flex gap-4">
                <h1 className="text-2xl font-bold">{data.name}</h1>
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
