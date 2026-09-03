# Configuration System

Default path:

```text
/data/data/<package>/files/Nebula/config.json
```

If the package name cannot be obtained, the path falls back to `/data/local/tmp/NebulaIL2CPP/config.json`.

```cpp
auto& config = Nebula::Config::Get();
bool enabled = config.GetBool("my_mod.enabled", false);
int damage = config.GetInt("my_mod.damage", 100);
float speed = config.GetFloat("my_mod.speed", 1.0F);

config.SetBool("my_mod.enabled", enabled);
config.SetInt("my_mod.damage", damage);
config.SetFloat("my_mod.speed", speed);
config.Save();
```

The configuration system supports `bool`, `int`, and `float`. The root node must be a JSON object. If a value has a mismatched type, the default value is returned. Saving creates the parent directory, writes to a temporary file, and then replaces the target file. `SetPath()` can override the default path.

Use keys prefixed with the Mod name, such as `my_mod.enabled` and `sun_mod.enabled`.
