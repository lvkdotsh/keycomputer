import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { KeyType } from "../../../server/src/types/KeyType";
import { useFamily } from "../lib/useFamily";
import { useKey } from "../lib/useKey";

const VARIATIONS = [
    [`/set/front/$ID.webp`, "Front"],
    [`/set/back/$ID.webp`, "Back"],
    [`/set/coin/$ID.webp`, "Coin"],
];

const ImageData: FC<{ data: KeyType }> = ({ data }) => {
    const [activeVariation, setActiveVariation] = useState(0);

    return (
        <div className="w-64 max-w-full">
            <div
                className="w-64 max-w-full bg-neutral-800 border-2 border-neutral-700"
                style={{ aspectRatio: "3/4" }}
            >
                <img
                    src={VARIATIONS[activeVariation][0].replace(
                        "$ID",
                        data.slug,
                    )}
                    alt=""
                />
            </div>
            <div className="w-full max-w-full pt-4 flex justify-around gap-2 px-4">
                {VARIATIONS.map((variation, index) => (
                    <button
                        key={index}
                        className={"flex-1"}
                        onClick={() => {
                            setActiveVariation(index);
                        }}
                    >
                        <img
                            src={variation[0].replace("$ID", data.slug)}
                            className={
                                activeVariation == index
                                    ? "outline-yellow-500 outline"
                                    : ""
                            }
                        />
                        <div>{variation[1]}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

const FamilyLink: FC<{ family_id: string }> = ({ family_id }) => {
    const { data, error } = useFamily(family_id);

    if (data) return <Link to={`/family/${data.slug}`} className="hover:underline">{data.name}</Link>;

    if (error) return <>Unknown</>;

    return <>Resolving...</>;
};

const KeyDataPage: FC<{ data: KeyType }> = ({ data }) => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="w-full flex gap-4">
                <div className="">
                    <ImageData data={data} />
                </div>
                <div className="pt-4">
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                    <h2 className="text-base px-2 py-1 bg-neutral-700 w-fit">
                        {data.slug}
                    </h2>
                    <div className="mt-4">
                        <div>
                            Obtained from{" "}
                            <span className="text-purple-300">
                                {data.obtained_from || "Unknown"}
                            </span>
                        </div>
                        <div>
                            Member of{" "}
                            <span className="text-purple-300">
                                <FamilyLink family_id={data.family} />
                            </span>
                        </div>
                        <h2 className="">{data.description}</h2>
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
