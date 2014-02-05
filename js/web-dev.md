---
layout: default
title:  "Web Dev"
---

## Same origin policy

Scripts can only read properties of windows and documents that were loaded from the same web server.

- prevents external scripts to read document information
- prevents external scripts to register events on the document
- protects the user's session on a given site from being seen or modified by another site

-> prevents interference with unrelated sites

Origin = protocol + host + port = http: + example.com + 4000

-> 2 documents that don't have the same origin can't communicate

## HTTP/2

