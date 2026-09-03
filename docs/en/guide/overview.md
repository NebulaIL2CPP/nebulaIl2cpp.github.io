# Project Overview

NebulaIL2CPP is a Native Mod Loader for Android ARM64 Unity IL2CPP applications. Its core flow is: load the Native library -> wait for the IL2CPP Runtime -> register and load Mods -> initialize the Overlay -> update and render on the graphics thread.

## Startup Flow

```text
System.loadLibrary("Nebula") / JNI_OnLoad / ELF constructor
        |
        `-- Bootstrap thread
                |-- Wait for libil2cpp.so
                |-- Observe il2cpp_init
                |-- Attach the IL2CPP thread
                |-- Load configuration and Mods
                `-- Start the UI

NebulaLoader.attach(Activity)
        |-- Create the Download log
        `-- Add a transparent GLSurfaceView
                `-- Independent GLES3 + Dear ImGui
```

## Components

| Layer | Responsibility | Entry Point |
| --- | --- | --- |
| Bootstrap | Wait for the target library and `il2cpp_init` | `app/jni/src/Core/Runtime.cpp` |
| Runtime | Find classes, methods, and fields by name | `Nebula::Il2Cpp` |
| Hook | ARM64 inline hooks and trampolines | `Nebula::Hook::HookFunction` |
| Mods | Load, update, and GUI lifecycle | `IMod` / `ModManager` |
| Overlay | ImGui content and rendering backend | `Nebula::Overlay` |
| Java bridge | SO loading, transparent View, and file logging | `NebulaLoader` / `NebulaOverlayView` |
| Config | Typed JSON configuration | `Nebula::Config` |

## Rendering Path

An independent transparent `GLSurfaceView` is recommended. It uses a separate GLES3 context and does not depend on whether Unity uses GLES or Vulkan. EGL/Vulkan Present Hooks are experimental backends and are affected by the target renderer, Swapchain lifecycle, and hook timing.

## Thread Boundaries

- `OnLoad()` is called once on the Bootstrap thread.
- `OnUpdate()` and `OnGUI()` currently run on the Overlay graphics thread.
- A newly created Native thread must call `Il2Cpp::AttachCurrentThread()` before using the IL2CPP API.
- Do not retain managed object pointers that may become invalid across scenes for extended periods.

## Load-Timing Limitation

Nebula should be loaded after `libil2cpp.so` has been loaded but before `il2cpp_init` has completed. Loading it after initialization may prevent the observation hook from being captured, causing Bootstrap to wait indefinitely.
