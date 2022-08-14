import { FC } from "react";
import { Link } from "react-router-dom";
import { KeyType } from "../../../server/src/types/KeyType";

export const KeyPreviewCard: FC<{ data: KeyType }> = ({ data }) => {
    return (
        <div className="w-full bg-neutral-600 p-2">
            <Link
                to={`/key/${data.slug}`}
                className="block cursor-pointer w-full bg-neutral-400"
                style={{ aspectRatio: "3 / 4" }}
            >
                <img
                    src={data.img}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "3 / 4" }}
                    alt={data.slug}
                />
            </Link>
            <div>{data.name}</div>
            <div>{data.slug}</div>
        </div>
    );
};
