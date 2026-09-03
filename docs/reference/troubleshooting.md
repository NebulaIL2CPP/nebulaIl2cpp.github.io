# 排错手册

## 构建失败

检查 `JAVA_HOME`、`ANDROID_SDK_ROOT`、JDK、CMake、NDK、Build Tools、`android.jar` 和 Git submodule。指定版本不存在时构建脚本会回退到最高已安装版本并打印警告。

## 启动时机问题

推荐在 `libil2cpp.so` 已加载但 `il2cpp_init` 尚未完成时加载 Nebula。晚于初始化才加载可能无法捕获观察 Hook，Bootstrap 可能一直等待。

## 类与方法解析失败

检查程序集、命名空间、类名大小写和方法参数数量。解析失败返回空指针或 `0` 时，不要继续安装 Hook。

## Hook 或字段崩溃

检查返回类型、参数顺序、实例指针、隐藏 `MethodInfo*`、trampoline、字段类型、偏移和对象生命周期。托管引用字段使用 `SetReferenceField()`，不要直接 raw write。

## Mod 不加载

确认 `.cpp` 已加入 `CMakeLists.txt`，头文件已 include，`Register()` 早于 `LoadAll()`，设备使用最新 SO，并查看 `adb logcat -s NebulaIL2CPP`。

## Overlay 不显示

确认 `NebulaLoader.attach(this)` 在有效 Activity 中调用，透明 `GLSurfaceView` 已加入 `android.R.id.content`，并检查 ROM 是否消费音量键。

## 线程问题

新建 Native 线程调用 IL2CPP API 前执行 `AttachCurrentThread()`；不要在错误线程调用图形接口或共享 ImGui 内容。
