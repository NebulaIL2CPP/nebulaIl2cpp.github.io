# 内置示例

示例位于 `app/jni/src/Mods/`，用于展示 API 组合方式，不是通用脚本。

## ExampleMod

演示查找 `Assembly-CSharp::Player`、解析 `Player.TakeDamage(int)`、安装 Dobby Hook、获取 `Player.health` 字段，以及使用 ImGui 和 JSON 配置。`Player`、`TakeDamage`、字段布局和 ABI 都是占位内容；damage multiplier 是配置/UI 示例，不代表已自动改变 Hook 行为。

## SunMod

演示解析 `Board.Instance` 静态字段、每帧取得当前 `Board`、获取 `Board.theSun` 偏移，并避免跨场景保存旧对象指针。它面向仓库当前示例目标，不是通用 Unity Mod。
