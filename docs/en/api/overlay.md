# Overlay and Input

`NebulaLoader.attach(Activity)` loads the SO, initializes Download logging, and adds a transparent, always-on-top, full-screen `GLSurfaceView` through `NebulaOverlayView`. The View uses an independent GLES3 context and does not depend on whether Unity selects GLES or Vulkan.

```cpp
Nebula::Overlay::UseExternalSurface();
Nebula::Overlay::InitializeExternalOpenGL();
Nebula::Overlay::RenderExternalOpenGL(width, height);
Nebula::Overlay::SubmitExternalTouch(action, x, y);
```

Touch input is captured only within the bounds of the current ImGui window, and the window can be dragged. The volume-up key shows the menu, while the volume-down key hides it. Some ROMs consume volume-key events before they reach the overlay, requiring adaptation in the Activity's `dispatchKeyEvent()`.

`Install()` and the Vulkan Present entry point are experimental backends affected by the renderer and Swapchain lifecycle. Prefer the independent surface approach.
