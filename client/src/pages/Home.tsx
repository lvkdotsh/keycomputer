import { FC } from "react";
import { Link } from "react-router-dom";
import { KeyPreviewCard } from "../components/KeyPreviewCard";
import { useFamilies } from "../lib/useFamily";
import { useKeys } from "../lib/useKeys";

const AllFamilies: FC = () => {
    const { data, error } = useFamilies();

    if (!data) return <></>;

    return (
        <div className="mt-4">
            <h1 className="text-4xl pt-4 pl-4 pb-8">
                Collections ({data.length})
            </h1>
            <ul className="grid px-4 gap-4 grid-cols-2 m:grid-cols-3 lg:grid-cols-4">
                {data &&
                    data.map((key, index) => (
                        <li key={index}>
                            <Link to={`/family/${key.slug}`} className="text-purple-500 hover:underline">{key.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

const AllKeys: FC = () => {
    const { data, error } = useKeys("*");

    if (!data) return <></>;

    return (
        <div className="mt-4">
            <h1 className="text-4xl pt-4 pl-4 pb-8">
                All Keys ({data.length})
            </h1>
            <div className="grid px-4 gap-4 grid-cols-2 m:grid-cols-3 lg:grid-cols-4">
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
            <AllFamilies />
            <AllKeys />
        </div>
    );
};
