# Built-in Examples

The examples are located in `app/jni/src/Mods/`. They demonstrate how APIs can be combined and are not general-purpose scripts.

## ExampleMod

Demonstrates locating `Assembly-CSharp::Player`, resolving `Player.TakeDamage(int)`, installing a Dobby Hook, retrieving the `Player.health` field, and using ImGui with JSON configuration. `Player`, `TakeDamage`, the field layout, and the ABI are placeholders; the damage multiplier is a configuration/UI example and does not mean that the Hook behavior is changed automatically.

## SunMod

Demonstrates resolving the static `Board.Instance` field, retrieving the current `Board` on every frame, obtaining the offset of `Board.theSun`, and avoiding retention of stale object pointers across scenes. It targets the repository's current example target and is not a general-purpose Unity Mod.

