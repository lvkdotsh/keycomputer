import { FC } from 'react';
import { Link } from 'react-router-dom';

import { KeyPreviewCard } from '../components/KeyPreviewCard';
import { useFamilies } from '../lib/useFamily';
import { useKeys } from '../lib/useKeys';

const AllFamilies: FC = () => {
    const { data, error } = useFamilies();

    if (!data) return <></>;

    return (
        <div className="mt-4">
            <h2 className="text-3xl pt-4 pl-4 pb-8">
                Collections ({data.length})
            </h2>
            <ul className="grid px-4 gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {data &&
                    data.map((key, index) => (
                        <li key={index}>
                            <Link
                                to={`/family/${key.slug}`}
                                className="text-purple-500 hover:underline"
                            >
                                {key.name}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

const AllKeys: FC = () => {
    const { data, error } = useKeys('*');

    if (!data) return <></>;

    return (
        <div className="mt-4">
            <h2 className="text-3xl pt-4 pl-4 pb-8">
                All Keys ({data.length})
            </h2>
            <div className="grid px-4 gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {data &&
                    data.map((key, index) => (
                        <KeyPreviewCard data={key} key={index} />
                    ))}
            </div>
        </div>
    );
};

export const Home: FC = () => {
    return (
        <div className="mt-4">
            <div className="px-4">
                <h1 className="text-4xl">Key Computer</h1>
                <p className="mt-4 text-lg">
                    A database of common keys to common things. This list
                    contains basic information per key, categories, as well as
                    most common places the lock-key combination is deployed.
                    Hopefully this database helps you out with your next "art
                    project" 😉 <span className="text-yellow-500">~ Luc</span>
                </p>
            </div>
            <AllFamilies />
            <AllKeys />
        </div>
    );
};
