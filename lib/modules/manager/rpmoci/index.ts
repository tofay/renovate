export { updateArtifacts } from './artifacts';
import { DockerDatasource } from '../../datasource/docker';
import type { PackageDependency, PackageFileContent } from '../types';

export function extractPackageFile(content: string): PackageFileContent | null {
  const deps: PackageDependency[] = [];
  return { deps };
}

export const supportsLockFileMaintenance = true;

export const defaultConfig = {
  fileMatch: ['rpmoci\\.toml$'],
  commitMessageTopic: 'rpmoci',
  commitMessageExtra: 'to {{newValue}}',
  enabled: true,
};

export const supportedDatasources = [DockerDatasource.id];
