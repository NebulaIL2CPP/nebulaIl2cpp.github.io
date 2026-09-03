# Mod Lifecycle

`ModManager` stores `std::unique_ptr<IMod>` instances in registration order:

```text
Register() → LoadAll() → UpdateAll() every frame → DrawAll()
```

## `OnLoad()`

Use this callback to read configuration, resolve types, methods, and fields, install Hooks, and initialize state. If an operation fails, log the error and return safely.

## `OnUpdate()`

This callback runs on the Overlay graphics thread and is suitable for lightweight state synchronization and checking objects in the current scene. Do not perform disk scans, network requests, or lock waits of uncertain duration.

## `OnGUI()`

Each Mod should use a separate tab. `OnGUI()` may not be called while the menu is hidden, but `OnUpdate()` may continue to run.

## Threads and Objects

The Bootstrap thread is attached automatically; newly created Native threads are not:

```cpp
Il2Cpp::Get().AttachCurrentThread();
```

Managed instance pointers retained across scenes can easily become invalid. `SunMod` reads `Board.Instance` again on every frame. The current manager holds a mutex during callbacks, so do not re-enter Mod management APIs from within a callback.

