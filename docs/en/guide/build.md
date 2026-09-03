# Build and Artifacts

## PowerShell Parameters

| Parameter | Default | Description |
| --- | --- | --- |
| `-OutputDir` | `./dist` | Final SO and DEX directory |
| `-Configuration` | `Release` | `Debug`, `Release`, or `RelWithDebInfo` |
| `-CMakeVersion` | `3.22.1` | Preferred CMake version |
| `-NdkVersion` | `26.1.10909125` | Preferred NDK version |
| `-BuildToolsVersion` | Automatic | Uses the highest installed version when empty |
| `-CompileSdk` | `34` | Android API platform |
| `-AndroidAbi` | `arm64-v8a` | Target ABI |
| `-AndroidPlatform` | `24` | Minimum Native platform |
| `-CleanOutput` | No | Clears the specified output directory |

```powershell
.\build-nebula.ps1 `
  -Configuration RelWithDebInfo `
  -CompileSdk 34 `
  -OutputDir "E:\Output\Nebula" `
  -CleanOutput
```

If the specified CMake or NDK version is unavailable, the script falls back to the highest installed version in the SDK and prints a warning. Missing JDK, SDK, toolchain, or Android platform components cause an immediate error.

## Android Studio

You can open the repository in Android Studio and build the `app` Library module. If Gradle cannot download dependencies, use the PowerShell script; it builds the Native library and DEX independently.

## Dependencies

Dobby provides ARM64 hooks, Dear ImGui provides the Overlay, and nlohmann/json provides configuration support. The C++ Runtime is statically linked, so an additional `libc++_shared.so` is not required.
