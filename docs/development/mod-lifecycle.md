# Mod 生命周期

`ModManager` 按注册顺序持有 `std::unique_ptr<IMod>`：

```text
Register() → LoadAll() → 每帧 UpdateAll() → DrawAll()
```

## `OnLoad()`

适合读取配置、解析类型/方法/字段、安装 Hook 和初始化状态。失败时记录日志并安全返回。

## `OnUpdate()`

运行在 Overlay 图形线程，适合轻量状态同步和检查当前场景对象。不要执行磁盘扫描、网络请求或不确定时长的锁等待。

## `OnGUI()`

建议每个 Mod 使用独立 Tab。菜单隐藏时 `OnGUI()` 可能不调用，但 `OnUpdate()` 仍可能继续执行。

## 线程与对象

Bootstrap 线程自动 attach；新建 Native 线程不会自动 attach：

```cpp
Il2Cpp::Get().AttachCurrentThread();
```

跨场景保存托管实例指针容易失效，`SunMod` 每帧重新读取 `Board.Instance`。当前管理器在回调期间持有 mutex，回调中不要重入 Mod 管理接口。
