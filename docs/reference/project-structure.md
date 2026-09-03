# 项目结构

```text
NebulaIL2CPP/
├── app/
│   ├── build.gradle
│   ├── src/main/java/dev/nebula/il2cpp/
│   │   ├── NebulaLoader.java
│   │   └── NebulaOverlayView.java
│   └── jni/
│       ├── CMakeLists.txt
│       ├── include/Nebula/{Config,Core,Hook,Il2Cpp,Mods,UI}
│       ├── src/{Config,Core,Hook,Il2Cpp,Mods,UI}
│       └── external/{Dobby,imgui,json}
├── build-nebula.ps1
├── MOD_DEVELOPMENT.md
├── NOTICE-THIRD_PARTY.md
└── README.md
```

新增 Mod 时，在 `app/jni/include/Nebula/Mods/` 和 `app/jni/src/Mods/` 添加文件，并更新 `CMakeLists.txt` 与注册逻辑。启动流程位于 `Entry.cpp`、`Runtime.cpp`，Java 接入位于 `NebulaLoader.java` 与 `NebulaOverlayView.java`。
