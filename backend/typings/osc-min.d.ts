declare module "osc-min" {
    export function fromBuffer(buffer: Buffer, strict?: boolean): OSCPacket;
    export function toBuffer(object: OSCPacket, strict?: boolean): Buffer;
    export function toBuffer(address: string, args: OSCArgument[] | OSCArgument, strict?: boolean): Buffer;
    export function applyAddressTransform(buffer: Buffer, transform: (address: string) => string): Buffer;
    export function applyMessageTransform(buffer: Buffer, transform: (message: OSCMessage) => OSCMessage): Buffer;
    export function timetagToDate(ntpTimeTag: [number, number]): Date;
    export function dateToTimetag(date: Date): [number, number];
    export function timetagToTimestamp(timeTag: [number, number]): number;
    export function timestampToTimetag(timeStamp: number): [number, number];

    export type OSCPacket = OSCMessage | OSCBundle;

    export interface OSCMessage {
        oscType?: "message";
        address: string;
        args: OSCArgument[] | OSCArgument;
    }

    export interface OSCArgument {
        type:
            | "string"
            | "float"
            | "integer"
            | "blob"
            | "true"
            | "false"
            | "null"
            | "bang"
            | "timetag"
            | "array"
            | "double";
        value?: string | number | Buffer | boolean | null | [number, number] | OSCArgument[];
    }

    export interface OSCBundle {
        oscType: "bundle";
        timetag: null | number | Date | [number, number];
        elements: (OSCMessage | OSCBundle)[];
    }
}
