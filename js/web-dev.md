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

- Multiplexing
- Header compression
- HTTP/2’s “server push” allows a server to proactively send things to the client’s cache for future use.
- RST_STREAM - ask? for push data
- Binary protocol - binary protocols are simpler, and therefore less error-prone
<http://www.mnot.net/blog/2014/01/30/http2_expectations>
