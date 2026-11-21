# The SpaceX Well

A scroll-driven three.js piece about nine SpaceX programmes. The shaft is lined
with rings of curved screens that narrow and turn faster the deeper they sit;
each screen plays a top-to-bottom recording of one programme's page, and scroll
speed drives both the turning and the playback. Clicking a screen pulls it off
the wall and unrolls it flat. At the bottom a figure stands in a pool of
Prussian-blue light and turns toward whichever screen is centred in view, while
one big screen cranks through the nine, opening each slit by slit. The finale
lifts the camera until the well is a ring of light.

- `index.html` — the whole piece: markup, styles, canvas page painter, Web Audio
  engine (room tone, ratchet clatter, wind), scene, shaders and post chain.
- three.js r169 loads from jsDelivr; Bodoni Moda and Jost from Google Fonts.
  Nothing else is fetched.

Every page is drawn at runtime on a 2D canvas, so the "sites" on the walls are
real type and diagrams rather than video files.

## Figures

Checked 21 November 2026. Starship Flight 15 (13 Nov 2026, 22.5 h, first tower
catch of the ship, booster catch aborted); Flight 14 (28 Sep 2026, first orbital
flight deploying 26 Starlink V3); 11,208 Starlink and 241 Starshield satellites
in orbit on 18 Nov 2026 per Jonathan McDowell's tracker; 12.0 M Starlink
subscribers as of 30 Jun 2026 (SpaceX Q2 2026); Artemis III rescoped to a LEO
docking demonstration in late 2027 with the crewed landing moved to Artemis IV
in early 2028.

The portrait on the transmission panel is drawn in code. It is not a photograph
of anyone. The two quotes are Elon Musk's, from SXSW 2013 (repeated at Davos in
January 2026) and the Starbase all-hands of April 2024.
