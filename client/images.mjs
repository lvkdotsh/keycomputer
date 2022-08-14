#!/usr/bin/env zx

async function resize(folder_name, output_folder, quality, sizeX, sizeY) {
    const files = await glob(`dataset/${folder_name}/**.(jpg|png)`);

    await $`rm -rf ${output_folder}`;

    await $`mkdir -p ${output_folder}`;

    for (const image of files) {
        await $`cwebp -resize ${sizeX} ${sizeY} -q ${quality} -o ${output_folder}/${image
            .split('/')
            .at(-1)
            .replace('.jpg', '.webp')
            .replace('.png', '.webp')} ${image}`;
    }
}

await resize('front', 'public/set/preview', 50, 300, 400);
await resize('front', 'public/set/front', 100, 960, 1280);
await resize('back', 'public/set/back', 100, 960, 1280);
await resize('coin', 'public/set/coin', 100, 960, 1280);

await resize('family', 'public/set/family', 50, 96, 64); // from 600 x 400
await resize('vendor', 'public/set/vendor', 50, 96, 64);

// await $`cat package.json | grep name`

// let branch = await $`git branch --show-current`
// await $`dep deploy --branch=${branch}`

// await Promise.all([
//   $`sleep 1; echo 1`,
//   $`sleep 2; echo 2`,
//   $`sleep 3; echo 3`,
// ])

// let name = 'foo bar'
// await $`mkdir /tmp/${name}`

// for file in *.jpg; do cwebp $file -o "${file%.*}.webp" $@; done
