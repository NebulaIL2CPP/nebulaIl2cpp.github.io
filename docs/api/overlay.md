# Overlay 与输入

`NebulaLoader.attach(Activity)` 会加载 SO、初始化 Download 日志，并通过 `NebulaOverlayView` 添加透明、置顶的全屏 `GLSurfaceView`。View 使用独立 GLES3 上下文，不依赖 Unity 选择 GLES 还是 Vulkan。

```cpp
Nebula::Overlay::UseExternalSurface();
Nebula::Overlay::InitializeExternalOpenGL();
Nebula::Overlay::RenderExternalOpenGL(width, height);
Nebula::Overlay::SubmitExternalTouch(action, x, y);
```

触摸只在 ImGui 当前窗口范围内捕获；窗口可以拖动。音量上键显示菜单，音量下键隐藏菜单。部分 ROM 会提前消费音量键，需要在 Activity 的 `dispatchKeyEvent()` 中适配。

`Install()` 与 Vulkan Present 入口属于实验性后端，受渲染器和 Swapchain 生命周期影响，推荐优先使用独立 surface。
