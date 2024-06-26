import { readProjectConfiguration, Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { appsPocNestGenerator } from './generator';
import { AppsPocNestGeneratorSchema } from './schema';

describe('apps-poc-nest generator', () => {
  let tree: Tree;
  const options: AppsPocNestGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await appsPocNestGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
