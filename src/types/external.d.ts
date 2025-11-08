/**
 * @packageDocumentation external.d implementation for types module
 */

declare module "ajv-formats" {
  import type Ajv from "ajv";
  /** Adds standard format validators (email, uri, etc.) to an Ajv instance. */
  export type AddFormats = (ajv: Ajv) => Ajv;
  const addFormats: AddFormats;
  export default addFormats;
  export { addFormats };
}

declare module "gray-matter" {
  import type { Buffer } from "node:buffer";

  interface GrayMatterFile<T = Record<string, unknown>> {
    data: T;
    content: string;
    excerpt?: string;
    orig: {
      data: string;
      content: string;
    };
    language?: string;
    matter?: string;
  }

  type GrayMatterInput = string | Buffer;

  interface GrayMatterOptions<T = Record<string, unknown>> {
    excerpt?: boolean | ((file: GrayMatterFile<T>) => unknown);
    engines?: Record<string, unknown>;
    language?: string;
  }

  export default function matter<T = Record<string, unknown>>(
    input: GrayMatterInput,
    options?: GrayMatterOptions<T>
  ): GrayMatterFile<T>;
}
