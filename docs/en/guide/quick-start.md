# Quick Start

This page produces `libNebula.so` and `classes.dex`. Perform the integration steps only on applications you own, in test environments, or on applications you are explicitly authorized to test.

## 1. Get the Source and Submodules

```powershell
git clone --recursive https://github.com/Gaoshu705/NebulaIL2CPP.git
cd NebulaIL2CPP
git submodule update --init --recursive
```

## 2. Prepare the Toolchain

- Windows PowerShell 5.1 or PowerShell 7
- JDK 17 or later
- Android SDK Platform 34
- Android NDK `26.1.10909125`
- CMake `3.22.1`
- Android Build Tools

Set `JAVA_HOME` and `ANDROID_SDK_ROOT`. If the latter is not set, the script falls back to `ANDROID_HOME`.

## 3. Build

```powershell
.\build-nebula.ps1 `
  -OutputDir ".\dist\arm64-v8a" `
  -CleanOutput
```

Output:

```text
dist/arm64-v8a/
|-- libNebula.so
`-- classes.dex
```

## 4. Verify

```powershell
Get-FileHash .\dist\arm64-v8a\libNebula.so -Algorithm SHA256
Get-Item .\dist\arm64-v8a\classes.dex
```

The target ABI must be `arm64-v8a`. Next, read [Build and Artifacts](/en/guide/build) or [Controlled-Target Integration](/en/guide/integration).
