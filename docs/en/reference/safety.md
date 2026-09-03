# Safety, Authorization, and Boundaries

NebulaIL2CPP is intended only for security research, compatibility testing, Unity projects you own, or application testing for which you have obtained explicit authorization. Users must verify the target application's license, terms of service, testing scope, data-handling requirements, and applicable local laws.

The project does not provide a general-purpose injector, signature bypasses, integrity-check bypasses, Root tools, game assets, or third-party application data. This documentation is not a guide to bypassing authorization, anti-tamper mechanisms, or security controls.

## Risk-Minimization Practices

1. Use isolated test devices, emulators, and test accounts.
2. Preserve the original APK, build hashes, and modification records.
3. Enable only the Mods required for testing, and provide safe returns for failure paths.
4. Do not collect unrelated user data or upload logs to public locations.
5. Review third-party dependency licenses and the target application's license before release.

Hooks, field writes, and object creation can all cause process crashes or data loss. Validate them in a non-production environment and keep original artifacts available so every experiment can be rolled back.

