import { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const attributes = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (attributes.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
