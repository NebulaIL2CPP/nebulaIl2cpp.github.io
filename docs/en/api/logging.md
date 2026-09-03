# Logging and Diagnostics

Logcat tag:

```text
NebulaIL2CPP
```

```powershell
adb logcat -s NebulaIL2CPP
```

After `NebulaLoader.attach(activity)` is called, the framework attempts to create:

```text
Download/NebulaIL2CPP-yyyyMMdd-HHmmss.log
```

Android 10 and later use MediaStore. Android 9 and earlier require `WRITE_EXTERNAL_STORAGE`. Early logs generated between the ELF constructor and Java `attach()` are written only to Logcat. Failure to initialize Download logging does not prevent the Native framework from running.

Troubleshoot in this order: target library loading → Runtime ready → Mod loading → Overlay surface → Hook/field operations. Use `NEBULA_LOGD/I/W/E`, and avoid flooding logs from per-frame code paths.
