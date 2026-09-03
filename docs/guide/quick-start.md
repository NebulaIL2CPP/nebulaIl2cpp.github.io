# 快速开始

本页生成 `libNebula.so` 与 `classes.dex`。只对自有、测试环境或明确获准测试的应用执行接入步骤。

## 1. 获取源码和子模块

```powershell
git clone --recursive https://github.com/Gaoshu705/NebulaIL2CPP.git
cd NebulaIL2CPP
git submodule update --init --recursive
```

## 2. 准备工具链

- Windows PowerShell 5.1 或 PowerShell 7
- JDK 17 或更高版本
- Android SDK Platform 34
- Android NDK `26.1.10909125`
- CMake `3.22.1`
- Android Build Tools

设置 `JAVA_HOME` 和 `ANDROID_SDK_ROOT`；未设置后者时脚本回退读取 `ANDROID_HOME`。

## 3. 构建

```powershell
.\build-nebula.ps1 `
  -OutputDir ".\dist\arm64-v8a" `
  -CleanOutput
```

输出：

```text
dist/arm64-v8a/
├── libNebula.so
└── classes.dex
```

## 4. 校验

```powershell
Get-FileHash .\dist\arm64-v8a\libNebula.so -Algorithm SHA256
Get-Item .\dist\arm64-v8a\classes.dex
```

目标 ABI 必须是 `arm64-v8a`。下一步阅读 [构建与产物](/guide/build) 或 [受控目标接入](/guide/integration)。
