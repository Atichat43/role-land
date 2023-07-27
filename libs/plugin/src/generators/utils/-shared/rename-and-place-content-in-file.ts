import { joinPathFragments,Tree } from '@nrwl/devkit';

export async function renameAndReplaceContentInFile(
  tree: Tree,
  appDir: string,
  oldPath: string,
  newPath: string,
  replacements: Record<string, string>
) {
  const _oldPath = joinPathFragments(appDir, oldPath);
  const _newPath = joinPathFragments(appDir, newPath);

  // Rename the file
  tree.rename(_oldPath, _newPath);

  // Update the contents of the file
  let content = tree.read(_newPath, 'utf-8');

  if (content === null) return;

  for (const [oldValue, newValue] of Object.entries(replacements)) {
    content = content.replace(new RegExp(oldValue, 'g'), newValue);
  }

  tree.write(_newPath, content);
}
