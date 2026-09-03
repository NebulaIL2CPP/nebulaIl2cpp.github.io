# Create a Minimal Mod

## Lifecycle Interface

```cpp
#include "Nebula/Mods/IMod.h"

class MyMod final : public Nebula::IMod {
public:
    void OnLoad() override;
    void OnUpdate() override;
    void OnGUI() override;
};
```

`OnLoad()` is called only once; `OnUpdate()` is called on every Overlay frame; `OnGUI()` draws ImGui controls.

## Registration and Compilation

```cpp
Nebula::ModManager::Get().Register(
    std::make_unique<MyMod>());
```

Registration must occur before `ModManager::LoadAll()`. Then add the `.cpp` file to `app/jni/CMakeLists.txt` and include it in the Runtime registration path.

## Minimal Implementation

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

Every successful `BeginTabItem()` call must have a matching `EndTabItem()` call. Do not perform long-running blocking operations in lifecycle callbacks.

