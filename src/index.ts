// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function(api: IApi) {
  // if (!api.userConfig.vconsole) return;

  const { vconsole = {} } = api.userConfig;
  const option = vconsole || {};

  api.describe({
    key: 'vconsole',
    config: {
      default: {
        defaultPlugins: ['system', 'network', 'element', 'storage'],
      },
      schema(joi) {
        return joi.object();
      },
    },
  });

  api.addEntryImports(() => {
    return [
      {
        source: 'vconsole',
        specifier: 'vconsole',
      },
    ];
  });

  api.addEntryCodeAhead(() => {
    return `window.vconsole = new vconsole(${JSON.stringify(option)});`;
  });
}
