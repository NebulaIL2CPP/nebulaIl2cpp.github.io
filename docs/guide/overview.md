# 项目概览

NebulaIL2CPP 是面向 Android ARM64 Unity IL2CPP 应用的 Native Mod Loader。核心链路是：加载 Native 库 → 等待 IL2CPP Runtime → 注册并加载 Mods → 初始化 Overlay → 在图形线程上更新和绘制。

## 启动链路

```text
System.loadLibrary("Nebula") / JNI_OnLoad / ELF constructor
        │
        └── Bootstrap thread
                ├── 等待 libil2cpp.so
                ├── 观察 il2cpp_init
                ├── Attach IL2CPP thread
                ├── 加载配置和 Mods
                └── 启动 UI

NebulaLoader.attach(Activity)
        ├── 创建 Download 日志
        └── 添加透明 GLSurfaceView
                └── 独立 GLES3 + Dear ImGui
```

## 组成部分

| 层 | 责任 | 入口 |
| --- | --- | --- |
| Bootstrap | 等待目标库与 `il2cpp_init` | `app/jni/src/Core/Runtime.cpp` |
| Runtime | 按名称查类、方法和字段 | `Nebula::Il2Cpp` |
| Hook | ARM64 Inline Hook 与 trampoline | `Nebula::Hook::HookFunction` |
| Mods | 加载、更新和 GUI 生命周期 | `IMod` / `ModManager` |
| Overlay | ImGui 内容与渲染后端 | `Nebula::Overlay` |
| Java bridge | SO、透明 View、文件日志 | `NebulaLoader` / `NebulaOverlayView` |
| Config | JSON 类型配置 | `Nebula::Config` |

## 渲染路径

推荐使用独立透明 `GLSurfaceView`：它使用 GLES3 独立上下文，不依赖 Unity 使用 GLES 还是 Vulkan。EGL/Vulkan Present Hook 属于实验性后端，受目标渲染器、Swapchain 生命周期和 Hook 时机影响。

## 线程边界

- `OnLoad()` 在 Bootstrap 线程中调用一次。
- `OnUpdate()` 与 `OnGUI()` 当前在 Overlay 图形线程执行。
- 新建 Native 线程调用 IL2CPP API 前必须调用 `Il2Cpp::AttachCurrentThread()`。
- 不要跨场景长期保存容易失效的托管对象指针。

## 加载时机限制

推荐在 `libil2cpp.so` 已加载但 `il2cpp_init` 尚未完成时加载 Nebula。晚于初始化才加载可能无法捕获观察 Hook，Bootstrap 可能一直等待。
