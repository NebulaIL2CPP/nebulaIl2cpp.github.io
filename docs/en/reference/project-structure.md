# Project Structure

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

When adding a Mod, add files under `app/jni/include/Nebula/Mods/` and `app/jni/src/Mods/`, then update `CMakeLists.txt` and the registration logic. The startup flow is implemented in `Entry.cpp` and `Runtime.cpp`; Java integration is implemented in `NebulaLoader.java` and `NebulaOverlayView.java`.

