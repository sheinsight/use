---

sidebar_position: 1

---

# 介绍

`@shined/react-use` 是一个对 **SSR（服务端渲染）友好**、**全面**且**高度优化**的 React Hooks 库，提供了灵活且高效的钩子解决方案。完全采用 **TypeScript** 开发，配备了包含丰富示例的交互式文档🔥。

主要受到 [VueUse](https://vueuse.org/) 的启发，同时也吸取了 [react-use](https://github.com/streamich/react-use)、[ahooks](https://ahooks.js.org/) 以及社区内许多其他优秀库的影响。特别感谢开源社区，尤其是上述库的作者们，感谢他们的杰出工作和灵感。

## 🚀 特性

- **灵活性**：特性包括 [ElementTarget](/docs/features/element-target)、[Ref Getter](/docs/features/ref-getter)、[Pausable](/docs/features/pausable) 等。
- **可摇树优化**：采用 [ESM](https://nodejs.org/api/esm.html) 设计和交付，只导入你需要的内容。
- **交互式文档**：具有现场示例和 [Playground](https://react-online.vercel.app/#code=aW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnCmltcG9JdCB7IHVzZU1vdXNlLCB1c2VSZWFjdGl2ZSB9IGZyb20gJ0BzaGluZWQvcmVhY3QtdXNlJwoKCmZ1bmN0aW9uIEFwcCgpIHsKICBjb25zdCB7IHgsIHkgfSA9IHVzZU1vdXNlKCkKICBjb25zdCBbeyBjb3VudCB9LCBtdXRhdGVdID0gdXNlUmVhY3RpdmUoeyBjb3VudDogMCB9KQoKICBjb25zdCBhZGRPbmUgPSAoKSA9PiBtdXRhdGUuY291bnQrKwoKICByZXR1cm4gKAogICAgPGRpdj4KICAgICAgPGRpdj4oeCwgeSk6ICh7eH0sIHt5fSk8L2Rpdj4KICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRPbmV9PkNvdW50OiB7Y291bnR9PC9idXR0b24%2BCiAgICA8L2Rpdj4KICApCn0KCmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpLnJlbmRlcig8QXBwIC8%2BKQo%3D)。
- **轻量级**：自豪地宣布 [零依赖](https://github.com/sheinsight/react-use/blob/main/package.json)。
- **对 SSR 友好**：确保所有钩子与服务端渲染（SSR）兼容。
- **一流的 TypeScript 支持**：用 [TypeScript](https://www.typescriptlang.org/) 编写，拥有命名良好的类型定义和 [JSDoc](https://jsdoc.app/) 注释。
- **~~全面测试~~**：（即将推出……）

访问 [快速开始](/docs/get-started) 部分，探索如何将其集成到你的项目中。

## ⚡️ 优化

- **安全状态**：为所有有状态的钩子实现了 [安全状态](/docs/optimization/safe-state) 策略，减少了 bug 和不希望的行为。
- **函数稳定**：默认情况下，每个导出函数都受益于 [稳定化](/docs/optimization/stabilization)。
- **最新状态**：通过内部使用 [最新](/docs/optimization/latest-state) 状态，避免了过期闭包问题。
- **减少不必要的重渲染**：使用 [Pausable](/docs/features/pausable) 实例可选地控制某些钩子的行为。
