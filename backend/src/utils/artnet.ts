/**
 * Builds an artnet package with all the required headers and data
 * @param universe the universe of the artnet package
 * @param data all data to be sent/ packed into the artnet package
 * @returns the artnet package as an array which just needs to be converted to a buffer before sending it
 */
export default function buildArtNetPackage(universe: number, data: Array<number>): Array<number> {
    let lenght = data.length;

    if (lenght > 512) {
        // DMX512 = 512 channels = 512 bytes
        lenght = 512;
    }

    if (lenght % 2) {
        lenght += 1;
    }

    const hUni = (universe >> 8) & 0xff;
    const lUni = universe & 0xff;
    const hLen = (lenght >> 8) & 0xff;
    const lLen = lenght & 0xff;

    // Protocol Name, Version, Sequence, Universe, Data Length
    const artnetHeader = [65, 114, 116, 45, 78, 101, 116, 0, 0, 80, 0, 14, 0, 0, lUni, hUni, hLen, lLen];
    const artnetPackage = artnetHeader.concat(data.slice(0, hLen * 256 + lLen));

    return artnetPackage;
}
