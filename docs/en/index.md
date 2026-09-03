---
layout: home

hero:
  name: NebulaIL2CPP
  text: Android ARM64 Unity IL2CPP Native Mod Loader
  tagline: A native mod development framework for controlled environments, integrating IL2CPP Runtime resolution, ARM64 inline hooks, a mod lifecycle, JSON configuration, and a Dear ImGui overlay.
  image:
    src: /logo.png
    alt: NebulaIL2CPP Logo
  actions:
    - theme: brand
      text: Quick Start
      link: /en/guide/quick-start
    - theme: alt
      text: Project Overview
      link: /en/guide/overview

features:
  - title: Native Android ARM64 Support
    details: Built for arm64-v8a builds and integration, with clear toolchain requirements, artifact descriptions, and controlled-target integration steps.
    link: /en/guide/build
    linkText: View Build Guide
  - title: IL2CPP Runtime API
    details: Dynamically resolves exported interfaces from libil2cpp.so and supports common operations involving classes, methods, fields, objects, strings, and Runtime invocation.
    link: /en/api/runtime
    linkText: Browse Runtime API
  - title: Hooks, Configuration, and Overlay
    details: Integrates ARM64 inline hooks, typed JSON configuration, structured logging, and an independent GLES3 Dear ImGui overlay.
    link: /en/api/hooks
    linkText: View Core APIs
  - title: Clear Mod Lifecycle
    details: Organize modules with OnLoad, OnUpdate, and OnGUI so initialization, per-frame logic, and UI rendering have clearly defined responsibilities.
    link: /en/development/mod-lifecycle
    linkText: Learn the Lifecycle
  - title: Start with a Minimal Example
    details: Use ready-to-reference minimal mods and development examples to quickly implement registration, compilation, configuration persistence, and ImGui UI integration.
    link: /en/development/minimal-mod
    linkText: Create Your First Mod
  - title: Safety and Compatibility Reference
    details: Review thread boundaries, Unity version differences, pointer lifetimes, known limitations, and common troubleshooting methods before integration.
    link: /en/reference/safety
    linkText: Read the Reference
---
