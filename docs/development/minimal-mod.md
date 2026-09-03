# 创建最小 Mod

## 生命周期接口

```cpp
#include "Nebula/Mods/IMod.h"

class MyMod final : public Nebula::IMod {
public:
    void OnLoad() override;
    void OnUpdate() override;
    void OnGUI() override;
};
```

`OnLoad()` 只调用一次；`OnUpdate()` 每个 Overlay 帧调用；`OnGUI()` 绘制 ImGui 控件。

## 注册和编译

```cpp
Nebula::ModManager::Get().Register(
    std::make_unique<MyMod>());
```

注册必须发生在 `ModManager::LoadAll()` 之前。然后把 `.cpp` 加入 `app/jni/CMakeLists.txt`，并在 Runtime 注册路径中 include。

## 最小实现

```cpp
#include <imgui.h>
#include "Nebula/Config/Config.h"

namespace { bool enabled = false; }

void MyMod::OnLoad() {
    enabled = Nebula::Config::Get().GetBool(
        "my_mod.enabled", false);
}

void MyMod::OnUpdate() {}

void MyMod::OnGUI() {
    if (!ImGui::BeginTabItem("My Mod")) return;
    if (ImGui::Checkbox("Enabled", &enabled)) {
        Nebula::Config::Get().SetBool("my_mod.enabled", enabled);
        Nebula::Config::Get().Save();
    }
    ImGui::EndTabItem();
}
```

每个成功的 `BeginTabItem()` 必须对应 `EndTabItem()`。不要在生命周期回调中执行长时间阻塞操作。
