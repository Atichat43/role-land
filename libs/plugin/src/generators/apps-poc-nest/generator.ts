import { formatFiles, readJson, Tree } from '@nx/devkit';
import { applicationGenerator } from '@nx/nest';

import { Nest } from '../utils';
import { AppsPocNestGeneratorSchema } from './schema';

export async function appsPocNestGenerator(
  tree: Tree,
  options: AppsPocNestGeneratorSchema
) {
  await applicationGenerator(tree, {
    ...options,
    directory: 'poc',
    e2eTestRunner: 'none',
    unitTestRunner: 'none',
    tags: 'poc',
  });

  const projectConfig = readJson(tree, `apps/poc/${options.name}/project.json`);
  const appDir = projectConfig.sourceRoot;

  const renameFile = { old: 'app', new: options.name };
  await Nest.renameAndReplaceContent(
    tree,
    appDir,
    renameFile.old,
    renameFile.new
  );

  await formatFiles(tree);
}

export default appsPocNestGenerator;
