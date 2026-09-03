# Troubleshooting Guide

## Build Failures

Check `JAVA_HOME`, `ANDROID_SDK_ROOT`, the JDK, CMake, NDK, Build Tools, `android.jar`, and Git submodules. If a specified version is unavailable, the build script falls back to the highest installed version and prints a warning.

## Startup Timing Issues

Load Nebula after `libil2cpp.so` has been loaded but before `il2cpp_init` has completed. Loading it only after initialization may prevent the observation Hook from being captured, causing Bootstrap to wait indefinitely.

## Class and Method Resolution Failures

Check the assembly, namespace, class-name capitalization, and method parameter count. If resolution returns a null pointer or `0`, do not continue installing the Hook.

## Hook or Field Crashes

Check the return type, parameter order, instance pointer, hidden `MethodInfo*`, trampoline, field type, offset, and object lifetime. Use `SetReferenceField()` for managed reference fields; do not write them directly with a raw write.

## Mod Does Not Load

Confirm that the `.cpp` file has been added to `CMakeLists.txt`, the header has been included, `Register()` runs before `LoadAll()`, the device is using the latest SO, and inspect `adb logcat -s NebulaIL2CPP`.

## Overlay Does Not Appear

Confirm that `NebulaLoader.attach(this)` is called from a valid Activity, the transparent `GLSurfaceView` has been added to `android.R.id.content`, and check whether the ROM consumes the volume keys.

## Threading Issues

Call `AttachCurrentThread()` before using IL2CPP APIs from a newly created Native thread. Do not call graphics APIs or access shared ImGui content from the wrong thread.

