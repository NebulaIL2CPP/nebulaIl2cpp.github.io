# Hook 与 ABI

头文件：`app/jni/include/Nebula/Hook/Hook.h`

Dobby 在 ARM64 上安装 Inline Hook，成功时 `original` 接收原函数 trampoline：

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

返回类型、参数类型和顺序、实例指针、隐藏 `MethodInfo*` 以及泛型调用形式必须与目标 ABI 一致。静态方法通常没有实例指针。原函数指针为空时不要调用；不要重复安装同一地址的 Hook。
