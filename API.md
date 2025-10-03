# API (Draft)

> This is a **draft** surface for early SDK experiments. Subject to change.

## Base URL
`https://api.creatorshub.global` *(placeholder during MVP)*

## Endpoints (proposed)
- `GET /v1/creators/{id}` – fetch a public creator profile
- `GET /v1/creators/{id}/content` – list public content items
- `POST /v1/exports` – request an "Export All" bundle (creator-owned data)
- `GET /v1/exports/{exportId}` – download export (authorized)
- `GET /v1/creatorpass/{id}` – read-only attributes for CreatorPass (tiers/badges) *(public subset)*

### Notes
- Authentication, rate-limits, and scopes will be defined as we ship.
- No private admin or payout endpoints live in this public repo.
