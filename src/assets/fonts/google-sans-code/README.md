# Google Sans Code

Vendored from the official v7.001 release:
https://github.com/googlefonts/googlesans-code/releases/tag/v7.001

Source archive: `GoogleSansCode-v7.001.zip` (not the Android variant).
The Roman and Italic variable TTF files are unmodified, renamed to remove the
axis suffix for simpler asset paths. Weight range: 300–800.

`src/styles/global.css` references these files directly. Vite emits hashed font
assets during the build; serving the site requires no external font service or
build-time font download. This font is used for code only. Chinese characters in
code use the locally bundled LXGW WenKai, followed by system fallback fonts.

License: SIL Open Font License 1.1, included in `OFL.txt`.
