# 已知限制与兼容性

| 项目 | 当前范围或限制 |
| --- | --- |
| ABI | 仅 `arm64-v8a` |
| Min SDK | `24` |
| Compile/Target SDK | `34` |
| NDK | `26.1.10909125` |
| CMake | `3.22.1` |
| Gradle | `8.9` |
| Android Gradle Plugin | `8.7.3` |
| C++ | C++17，静态链接 `c++_static` |
| Unity/IL2CPP | 导出符号、`MethodInfo` 布局和 ABI 可能随版本变化 |
| Overlay | 透明 View、输入分发依赖 ROM 与 Activity |
| Vulkan/EGL | 实验性，不保证所有 Swapchain 生命周期 |

`GetMethodAddress()` 依赖当前支持版本中的 `MethodInfo` 首字段布局；`ReadField()` / `WriteField()` 是无边界检查的裸指针读写；托管对象可能因场景切换或 GC 失效。当前没有动态 Mod 发现机制，构建脚本也不构建完整 APK。
