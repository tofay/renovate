export type RegistryFlavor =
  /** https://crates.io, supports rawgit access */
  | 'crates.io'

  /** https://cloudsmith.io, needs git clone */
  | 'cloudsmith'

  /** A sparse registry accessed via HTTP, not git */
  | 'sparse'
  /** unknown, assuming private git repository */
  | 'other';

export interface RegistryInfo {
  flavor: RegistryFlavor;

  /** raw URL of the registry, as specified in cargo config */
  rawUrl: string;

  /** parsed URL of the registry */
  url: URL;

  /** download location of crates, as specified in the registry's config.json */
  dl?: string;

  /** path where the registry is cloned */
  clonePath?: string;
}

export interface CrateRecord {
  vers: string;
  yanked: boolean;
}

export interface CrateMetadata {
  description: string | null;
  documentation: string | null;
  homepage: string | null;
  repository: string | null;
}

export interface RegistryConfig {
  dl: string;
  api: string;
}
