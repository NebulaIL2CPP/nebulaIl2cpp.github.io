# 日志与诊断

Logcat Tag：

```text
NebulaIL2CPP
```

```powershell
adb logcat -s NebulaIL2CPP
```

调用 `NebulaLoader.attach(activity)` 后会尝试创建：

```text
Download/NebulaIL2CPP-yyyyMMdd-HHmmss.log
```

Android 10 及以上使用 MediaStore；Android 9 及以下需要 `WRITE_EXTERNAL_STORAGE`。ELF constructor 到 Java `attach()` 之间的早期日志只进入 Logcat；Download 日志初始化失败不会阻止 Native 框架运行。

按“目标库加载 → Runtime ready → Mod 加载 → Overlay surface → Hook/字段操作”顺序定位。使用 `NEBULA_LOGD/I/W/E`，避免在每帧路径刷屏。
