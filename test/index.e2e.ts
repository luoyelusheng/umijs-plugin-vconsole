import vconsole from 'vconsole';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
  container.vconsole = new vconsole();
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('test vconsole', async () => {
  expect(typeof container.vconsole).toEqual('object');
});
