# 受控目标接入

> 只对自有、测试环境或已获得书面授权的 APK 进行修改。Nebula 不提供通用注入器、签名绕过、完整性校验绕过或游戏资源。

## 1. 放置 Native 库

```text
libNebula.so → lib/arm64-v8a/libNebula.so
```

目标进程必须是 `arm64-v8a`。

## 2. 合并 DEX

`classes.dex` 包含：

```text
dev.nebula.il2cpp.NebulaLoader
dev.nebula.il2cpp.NebulaOverlayView
```

不要覆盖已有 DEX；重命名为下一个未占用名称，例如 `classes4.dex`，并按目标构建流程合并。

## 3. 从 Activity 启动

在 Unity 通常使用的 `UnityPlayerActivity` 完成原有 `onCreate()` 后调用：

```java
NebulaLoader.attach(this);
```

或在 smali 中：

```smali
invoke-static {p0}, Ldev/nebula/il2cpp/NebulaLoader;->attach(Landroid/app/Activity;)V
```

`attach()` 会加载 SO、初始化 Download 日志并添加透明 `GLSurfaceView`，不需要重复调用 `System.loadLibrary()`。

## 4. 签名与验证

修改 APK 后按 Android 平台要求重新签名，并在专用测试设备/模拟器安装。签名、发布、兼容性和目标应用许可由使用者负责；本站不提供绕过方案。

推荐在 `libil2cpp.so` 已加载但 `il2cpp_init` 尚未完成时接入，晚加载可能导致 Bootstrap 等待。
