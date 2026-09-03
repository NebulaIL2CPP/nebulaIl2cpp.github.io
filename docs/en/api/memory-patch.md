# Reversible MemoryPatch

`MemoryPatch` supports either an absolute address or an IDA-style RVA relative to the current `libil2cpp.so`:

```cpp
Nebula::Hook::MemoryPatch patch(
    "0x212320", "0f 2f a0 aa", "1f 20 03 d5");
if (patch.Apply()) {
    // The patch is active.
}
patch.Restore();
```

The `expected` bytes are checked before every `Apply()`. The replacement byte count must be a multiple of 4, the address must be 4-byte aligned, and the expected length must match. A patch cannot be reconfigured after it has been applied, and the object must outlive every control path that may call `Restore()`.

`ResolveIl2CppRva()` only adds the RVA to the base address; it does not automatically validate the mapped range or executable permissions. This capability is version-sensitive and should be validated only in an isolated, authorized testing environment.
