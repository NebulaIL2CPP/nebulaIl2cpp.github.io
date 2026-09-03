# Controlled-Target Integration

> Modify only APKs that you own, use in a test environment, or have written authorization to modify. Nebula does not provide a universal injector, signature bypasses, integrity-check bypasses, or game assets.

## 1. Place the Native Library

```text
libNebula.so -> lib/arm64-v8a/libNebula.so
```

The target process must use `arm64-v8a`.

## 2. Merge the DEX

`classes.dex` contains:

```text
dev.nebula.il2cpp.NebulaLoader
dev.nebula.il2cpp.NebulaOverlayView
```

Do not overwrite an existing DEX. Rename it to the next unused name, such as `classes4.dex`, and merge it according to the target's build process.

## 3. Start from the Activity

After the original `onCreate()` completes in the `UnityPlayerActivity` commonly used by Unity, call:

```java
NebulaLoader.attach(this);
```

Or in smali:

```smali
invoke-static {p0}, Ldev/nebula/il2cpp/NebulaLoader;->attach(Landroid/app/Activity;)V
```

`attach()` loads the SO, initializes the Download log, and adds a transparent `GLSurfaceView`. You do not need to call `System.loadLibrary()` again.

## 4. Sign and Verify

After modifying the APK, re-sign it according to Android platform requirements and install it on a dedicated test device or emulator. The user is responsible for signing, distribution, compatibility, and permission from the target application; this site does not provide bypass methods.

Integration is recommended after `libil2cpp.so` has been loaded but before `il2cpp_init` has completed. Late loading may cause Bootstrap to wait indefinitely.
