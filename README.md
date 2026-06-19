# YieldLens — Backend

**REST API that indexes Soroban event emissions & Stellar ledger state to power the YieldLens dashboard.**

## The Problem

Stellar's DeFi ecosystem (Soroswap, Phoenix, Aquarius) generates yield data across two distinct layers — Soroban WASM smart contract events and classic Stellar ledger state diffs. Tracking positions, calculating impermanent loss, and surfacing historical APY manually is impractical. The backend exists to ingest, normalize, and serve this data so the frontend (and other consumers) always have a clean, real-time view.

## What This Project Does

- Listens to Soroban event emissions from supported protocols
- Pulls Stellar native pool ledger state diffs
- Computes **impermanent loss**, **realized vs. unrealized P&L**, and **historical APY**
- Exposes a REST API consumed by the YieldLens frontend

## Related Projects

| Project | Description |
|---------|-------------|
| [YieldLens-frontend](../YieldLens-frontend) | React + TypeScript dashboard |
| [YieldLens-contract](../YieldLens-contract) | Soroban smart contracts for on-chain data helpers |

## Stack

- **Runtime:** Node.js
- **Blockchain:** Stellar / Soroban

## Development

```bash
# coming soon
```

## License

MIT
