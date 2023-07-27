import { names,Tree } from '@nrwl/devkit';

import { renameAndReplaceContentInFile } from '../-shared/rename-and-place-content-in-file';

export async function renameAndReplaceContent(
  tree: Tree,
  appDir: string,
  oldName: string,
  newName: string
) {
  const oldClassName = names(oldName).className; // AppName
  const newClassName = names(newName).className; // CustomName

  const oldPropertyName = names(oldName).propertyName; // appName
  const newPropertyName = names(newName).propertyName; // customName

  const filesToRename = [
    'controller.ts',
    'controller.spec.ts',
    'module.ts',
    'service.ts',
    'service.spec.ts',
  ];
  const replacements = {
    [`${oldClassName}Controller`]: `${newClassName}Controller`,
    [`${oldClassName}Service`]: `${newClassName}Service`,
    [`${oldClassName}Module`]: `${newClassName}Module`,
    [`${oldClassName}.controller`]: `${newClassName}.controller`,
    [`${oldClassName}.service`]: `${newClassName}.service`,
    [`${oldClassName}.module`]: `${newClassName}.module`,

    [`${oldPropertyName}Controller`]: `${newPropertyName}Controller`,
    [`${oldPropertyName}Service`]: `${newPropertyName}Service`,
    [`${oldPropertyName}Module`]: `${newPropertyName}Module`,
    [`${oldPropertyName}.controller`]: `${newPropertyName}.controller`,
    [`${oldPropertyName}.service`]: `${newPropertyName}.service`,
    [`${oldPropertyName}.module`]: `${newPropertyName}.module`,
  };

  for (const file of filesToRename) {
    await renameAndReplaceContentInFile(
      tree,
      appDir,
      `app/${oldName}.${file}`, // app.controller.ts
      `app/${newName}.${file}`, // custom-name.controller.ts
      replacements
    );
  }

  await renameAndReplaceContentInFile(
    tree,
    appDir,
    'main.ts',
    'main.ts',
    replacements
  );
}
