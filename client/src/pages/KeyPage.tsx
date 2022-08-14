import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { KeyType } from "../../../server/src/types/KeyType";
import { useKey } from "../lib/useKey";

const VARIATIONS = [
    `/set/front/$ID.webp`,
    `/set/back/$ID.webp`,
    `/set/coin/$ID.webp`,
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
                    src={VARIATIONS[activeVariation].replace("$ID", data.slug)}
                    alt=""
                />
            </div>
            <div className="w-full max-w-full pt-4 flex justify-around gap-2 px-4">
                {VARIATIONS.map((variation, index) => (
                    <button
                        key={index}
                        className={
                            "flex-1 border-yellow-500" +
                            (activeVariation == index ? " border-4" : "")
                        }
                        onClick={() => {
                            setActiveVariation(index);
                        }}
                    >
                        <img src={variation.replace("$ID", data.slug)} />
                    </button>
                ))}
            </div>
        </div>
    );
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
                    <h2 className="text-2xl">{data.slug}</h2>
                    <h2 className="">{data.description}</h2>
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
