# IL2CPP Runtime API

头文件：`app/jni/include/Nebula/Il2Cpp/Il2Cpp.h`

Nebula 从已加载的 `libil2cpp.so` 动态解析导出 API，公共头文件只需要 opaque 声明。

## 初始化

```cpp
auto& il2cpp = Nebula::Il2Cpp::Get();
if (!il2cpp.IsReady() || !il2cpp.IsRuntimeInitialized()) return;
```

另有 `Initialize()`、`ObserveRuntimeInitialization()` 和 `GetBaseAddress()`。

## 查找类和方法

```cpp
Il2CppClass* player = il2cpp.GetClass(
    "Assembly-CSharp", "", "Player");
const MethodInfo* method = il2cpp.GetMethod(
    "Assembly-CSharp", "", "Player", "TakeDamage", 1);
uintptr_t address = il2cpp.GetMethodAddress(method);
```

程序集匹配大小写敏感，可带或不带 `.dll` 后缀。重载方法传入正确参数数量；解析失败返回空指针或 `0`。

> 当前 `GetMethodAddress()` 把 `MethodInfo` 首字段解释为方法指针，依赖支持版本的 `MethodInfo::methodPointer` 布局；不同 Unity 版本、泛型共享方法或特殊调用约定可能不兼容。

## 字段访问

优先使用 Runtime 字段 API：

```cpp
FieldInfo* field = il2cpp.GetField(player, "health");
int32_t health = 0;
if (instance != nullptr && field != nullptr) {
    il2cpp.GetFieldValue(instance, field, &health);
    health = 9999;
    il2cpp.SetFieldValue(instance, field, &health);
}
```

另有 `GetFieldOffset()`、`ReadField<T>()`、`WriteField<T>()` 和静态字段 API。托管引用字段使用 `SetReferenceField()`，以便 Runtime 执行 GC write barrier。

## 调用与对象

`Invoke()` 调用 `il2cpp_runtime_invoke`，通过 `Il2CppException**` 接收异常；`params` 是参数存储指针数组。另有 `Unbox<T>()`、`NewString()`、`StringToUtf8()`、`GetObjectClass()` 和 `NewObject()`。
