# IL2CPP Runtime API

Header: `app/jni/include/Nebula/Il2Cpp/Il2Cpp.h`

Nebula dynamically resolves exported APIs from the loaded `libil2cpp.so`. The public header only requires opaque declarations.

## Initialization

```cpp
auto& il2cpp = Nebula::Il2Cpp::Get();
if (!il2cpp.IsReady() || !il2cpp.IsRuntimeInitialized()) return;
```

The API also provides `Initialize()`, `ObserveRuntimeInitialization()`, and `GetBaseAddress()`.

## Looking Up Classes and Methods

```cpp
Il2CppClass* player = il2cpp.GetClass(
    "Assembly-CSharp", "", "Player");
const MethodInfo* method = il2cpp.GetMethod(
    "Assembly-CSharp", "", "Player", "TakeDamage", 1);
uintptr_t address = il2cpp.GetMethodAddress(method);
```

Assembly matching is case-sensitive, and the `.dll` suffix may be included or omitted. For overloaded methods, pass the correct parameter count. Failed lookups return a null pointer or `0`.

> The current `GetMethodAddress()` implementation interprets the first field of `MethodInfo` as the method pointer. This depends on the `MethodInfo::methodPointer` layout of supported versions; different Unity versions, generic sharing, or special calling conventions may be incompatible.

## Field Access

Prefer the Runtime field APIs:

```cpp
FieldInfo* field = il2cpp.GetField(player, "health");
int32_t health = 0;
if (instance != nullptr && field != nullptr) {
    il2cpp.GetFieldValue(instance, field, &health);
    health = 9999;
    il2cpp.SetFieldValue(instance, field, &health);
}
```

The API also provides `GetFieldOffset()`, `ReadField<T>()`, `WriteField<T>()`, and static field APIs. Use `SetReferenceField()` for managed reference fields so the Runtime can execute the GC write barrier.

## Invocation and Objects

`Invoke()` calls `il2cpp_runtime_invoke` and receives exceptions through `Il2CppException**`; `params` is an array of pointers to argument storage. The API also provides `Unbox<T>()`, `NewString()`, `StringToUtf8()`, `GetObjectClass()`, and `NewObject()`.
