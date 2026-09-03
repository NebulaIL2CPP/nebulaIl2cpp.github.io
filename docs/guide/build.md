# 构建与产物

## PowerShell 参数

| 参数 | 默认值 | 说明 |
| --- | --- | --- |
| `-OutputDir` | `./dist` | 最终 SO 与 DEX 目录 |
| `-Configuration` | `Release` | `Debug`、`Release` 或 `RelWithDebInfo` |
| `-CMakeVersion` | `3.22.1` | 优先使用的 CMake |
| `-NdkVersion` | `26.1.10909125` | 优先使用的 NDK |
| `-BuildToolsVersion` | 自动 | 为空时使用最高已安装版本 |
| `-CompileSdk` | `34` | Android API 平台 |
| `-AndroidAbi` | `arm64-v8a` | 目标 ABI |
| `-AndroidPlatform` | `24` | Native 最低平台 |
| `-CleanOutput` | 否 | 清空指定输出目录 |

```powershell
.\build-nebula.ps1 `
  -Configuration RelWithDebInfo `
  -CompileSdk 34 `
  -OutputDir "E:\Output\Nebula" `
  -CleanOutput
```

缺少指定的 CMake 或 NDK 时，脚本会回退到 SDK 中最高的已安装版本并打印警告；缺少 JDK、SDK、工具链或 Android 平台会直接报错。

## Android Studio

可在 Android Studio 中打开仓库并构建 `app` Library 模块。若 Gradle 无法下载依赖，使用 PowerShell 脚本；它独立完成 Native 与 DEX 构建。

## 依赖

Dobby 用于 ARM64 Hook，Dear ImGui 用于 Overlay，nlohmann/json 用于配置。C++ Runtime 静态链接，不要求额外提供 `libc++_shared.so`。
