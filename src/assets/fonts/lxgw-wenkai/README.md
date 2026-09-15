# LXGW WenKai

Vendored from the official v1.522 release:
https://github.com/lxgw/LxgwWenKai/releases/tag/v1.522

Source: `LXGWWenKai-Regular.ttf`, unmodified (weight 400).
Bold and italic text use browser synthesis.

`src/styles/global.css` references the local font file. Vite emits a hashed asset
during the build; no external font service or build-time download is required.
The app font stack uses LXGW WenKai for Chinese, Latin characters, and digits.
Code uses Google Sans Code, with LXGW WenKai as its Chinese fallback.

License: SIL Open Font License 1.1, included in `OFL.txt`.
