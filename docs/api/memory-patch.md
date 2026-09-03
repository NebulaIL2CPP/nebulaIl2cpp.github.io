# 可恢复 MemoryPatch

`MemoryPatch` 支持绝对地址或相对于当前 `libil2cpp.so` 的 IDA 风格 RVA：

```cpp
Nebula::Hook::MemoryPatch patch(
    "0x212320", "0f 2f a0 aa", "1f 20 03 d5");
if (patch.Apply()) {
    // 补丁已应用
}
patch.Restore();
```

`expected` bytes 会在每次 `Apply()` 前检查；替换字节数量必须是 4 的倍数，地址必须按 4 字节对齐，expected 长度必须匹配。补丁应用后不能重新配置，对象必须长于所有 Restore 控制路径。

`ResolveIl2CppRva()` 只做基址加 RVA，不自动检查映射范围或可执行权限。该能力版本敏感，只在隔离、获授权测试环境验证。
