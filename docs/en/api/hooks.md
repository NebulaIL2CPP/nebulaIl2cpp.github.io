# Hooks and ABI

Header: `app/jni/include/Nebula/Hook/Hook.h`

Dobby installs inline hooks on ARM64. On success, `original` receives the trampoline for the original function:

```cpp
using TakeDamageFn = void (*)(
    void*, int32_t, const MethodInfo*);
static TakeDamageFn original = nullptr;

uintptr_t target = Nebula::Il2Cpp::Get().GetMethodAddress(
    "Assembly-CSharp", "", "Player", "TakeDamage", 1);
if (target != 0) {
    Nebula::Hook::HookFunction(
        target, reinterpret_cast<void*>(&TakeDamageHook),
        reinterpret_cast<void**>(&original));
}
```

The return type, parameter types and order, instance pointer, hidden `MethodInfo*`, and generic invocation form must match the target ABI. Static methods usually do not have an instance pointer. Do not call the original function when its pointer is null, and do not install multiple hooks at the same address.
