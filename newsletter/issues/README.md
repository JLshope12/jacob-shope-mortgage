# Dated issues

After the connection has passed review, the existing Sunday content automation writes exactly one fresh, approved issue here as `YYYY-MM-DD.json` on `main`. The push triggers delivery; there is no additional cron job. Do not commit subscriber lists, client information, API responses, keys, or private research notes.

Use `../issue.schema.json` and the runtime requirements in `../README.md`. This directory deliberately contains no real or sample issue that could accidentally be sent. Unit tests construct synthetic content entirely in memory.
