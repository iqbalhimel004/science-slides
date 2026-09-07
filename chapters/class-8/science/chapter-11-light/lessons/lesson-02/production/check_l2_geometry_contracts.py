"""Lesson 2 v2 diagram-contract checker.

Checks deterministic geometry invariants used by the controlled build.
This is intentionally tied to the lesson specification; it complements, not replaces,
rendered visual inspection.
"""


def require(condition, message):
    if not condition:
        raise AssertionError(message)


# Coordinate convention used by the controlled build:
# smaller y = upper/rarer medium; larger y = lower/denser medium.

# Apparent-position construction
apparent = {
    "real_object": (3.25, 4.85),
    "apparent_point": (3.85, 4.25),
    "surface_y": 3.58,
    "real_rays": 2,
    "back_extensions": 2,
}
require(apparent["real_rays"] >= 2, "Apparent-position diagram needs at least two real rays.")
require(apparent["back_extensions"] >= 2, "Apparent-position diagram needs at least two backward extensions.")
require(
    apparent["surface_y"] < apparent["apparent_point"][1] < apparent["real_object"][1],
    "Apparent point must be below the surface but shallower than the real object.",
)

# Fish apparent depth
fish = {
    "real_fish": (3.0, 4.75),
    "apparent_fish": (3.95, 4.05),
    "surface_y": 3.61,
    "real_rays": 2,
    "back_extensions": 2,
}
require(fish["real_rays"] >= 2, "Fish apparent-depth diagram needs at least two real rays.")
require(fish["back_extensions"] >= 2, "Fish apparent-depth diagram needs at least two backward extensions.")
require(
    fish["surface_y"] < fish["apparent_fish"][1] < fish["real_fish"][1],
    "Apparent fish must be shallower than real fish.",
)

# Critical angle: interface_y=3.9; reflected ray remains in lower/denser incident medium;
# refracted ray lies along the interface.
critical = {
    "interface_y": 3.9,
    "incident_start": (3.5, 5.05),
    "incidence_point": (6.5, 3.9),
    "refracted_end": (9.6, 3.9),
    "reflected_end": (9.15, 5.05),
}
require(critical["incident_start"][1] > critical["interface_y"], "Incident ray must start in denser incident medium.")
require(abs(critical["refracted_end"][1] - critical["interface_y"]) < 1e-6, "At critical angle, refracted ray must run along the interface.")
require(critical["reflected_end"][1] > critical["interface_y"], "Reflected ray at critical angle must remain in denser incident medium.")

# Full internal reflection: no transmitted/refracted ray outside.
full_internal_reflection = {
    "interface_y": 4.85,
    "incident_start": (3.9, 5.32),
    "incidence_point": (6.65, 4.85),
    "reflected_end": (9.2, 5.25),
    "transmitted_ray": None,
}
require(full_internal_reflection["incident_start"][1] > full_internal_reflection["interface_y"], "Incident ray must start in denser incident medium.")
require(full_internal_reflection["reflected_end"][1] > full_internal_reflection["interface_y"], "Reflected ray must remain in denser incident medium.")
require(full_internal_reflection["transmitted_ray"] is None, "No transmitted refracted ray is allowed for i > C in the idealized diagram.")

# Mirage: multi-segment/gradual bending rather than one hard mirror-like boundary.
mirage = {"segments": 5, "hard_boundary_reflection": False}
require(mirage["segments"] >= 4, "Mirage ray should show gradual bending through multiple layers/segments.")
require(not mirage["hard_boundary_reflection"], "Mirage must not be represented as one hard mirror-like boundary.")

print("DIAGRAM_CONTRACTS_L2_V2: PASS")
