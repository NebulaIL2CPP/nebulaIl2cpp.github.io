---
layout: home

hero:
  name: NebulaIL2CPP
  text: Android ARM64 Unity IL2CPP Native Mod Loader
  tagline: 面向受控环境的原生 Mod 开发框架，集成 IL2CPP Runtime 解析、ARM64 Inline Hook、Mod 生命周期、JSON 配置与 Dear ImGui 覆盖层。
  image:
    src: /logo.png
    alt: NebulaIL2CPP Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 项目概览
      link: /guide/overview

features:
  - title: Android ARM64 原生支持
    details: 针对 arm64-v8a 构建与接入，提供清晰的工具链要求、产物说明和受控目标集成流程。
    link: /guide/build
    linkText: 查看构建指南
  - title: IL2CPP Runtime API
    details: 动态解析 libil2cpp.so 导出接口，支持类、方法、字段、对象、字符串与 Runtime 调用等常用能力。
    link: /api/runtime
    linkText: 浏览 Runtime API
  - title: Hook、配置与覆盖层
    details: 集成 ARM64 Inline Hook、类型化 JSON 配置、结构化日志，以及独立 GLES3 Dear ImGui 覆盖层。
    link: /api/hooks
    linkText: 查看核心 API
  - title: 清晰的 Mod 生命周期
    details: 通过 OnLoad、OnUpdate 与 OnGUI 组织功能模块，让初始化、逐帧逻辑和界面绘制职责明确。
    link: /development/mod-lifecycle
    linkText: 了解生命周期
  - title: 从最小示例开始
    details: 使用可直接参考的最小 Mod 和开发示例，快速完成注册、编译、配置持久化与 ImGui 界面接入。
    link: /development/minimal-mod
    linkText: 创建第一个 Mod
  - title: 安全与兼容性参考
    details: 在接入前了解线程边界、Unity 版本差异、指针生命周期、已知限制与常见故障排查方法。
    link: /reference/safety
    linkText: 阅读参考文档
---
