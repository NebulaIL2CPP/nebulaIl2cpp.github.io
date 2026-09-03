# Known Limitations and Compatibility

| Item | Current Scope or Limitation |
| --- | --- |
| ABI | `arm64-v8a` only |
| Min SDK | `24` |
| Compile/Target SDK | `34` |
| NDK | `26.1.10909125` |
| CMake | `3.22.1` |
| Gradle | `8.9` |
| Android Gradle Plugin | `8.7.3` |
| C++ | C++17, statically linked with `c++_static` |
| Unity/IL2CPP | Exported symbols, `MethodInfo` layout, and ABI may vary by version |
| Overlay | Transparent View and input dispatch depend on the ROM and Activity |
| Vulkan/EGL | Experimental; not guaranteed to support every Swapchain lifecycle |

`GetMethodAddress()` depends on the first-field layout of `MethodInfo` in currently supported versions; `ReadField()` / `WriteField()` perform unchecked raw-pointer reads and writes; managed objects may become invalid after a scene change or garbage collection. There is currently no dynamic Mod discovery mechanism, and the build script does not build a complete APK.

