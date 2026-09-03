# 配置系统

默认路径：

```text
/data/data/<package>/files/Nebula/config.json
```

无法取得包名时回退到 `/data/local/tmp/NebulaIL2CPP/config.json`。

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

支持 `bool`、`int` 和 `float`。根节点必须是 JSON object，类型不匹配时返回默认值。保存会创建父目录，先写临时文件再替换正式文件；`SetPath()` 可覆盖默认路径。

使用带 Mod 前缀的 key，例如 `my_mod.enabled`、`sun_mod.enabled`。
