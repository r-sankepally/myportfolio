# High-Throughput Raft Distributed KV Store

Fault-tolerant key-value database implementing Raft consensus protocol with Log-Structured Merge (LSM) storage engine.

---

## ⚡ Overview & Research Focus

Distributed databases often trade off linearizable consistency for write throughput. This project was developed as an exploratory systems research prototype to stress-test leader election, log compaction, and replication under severe network partitions.

The engine achieves 120,000+ linearizable writes/second while maintaining strict safety guarantees under simulated chaos injection.

---

## 🏗️ Storage & Consensus Architecture

- **Strict Raft Protocol**: Randomized election timeouts, term validation, and heartbeat lease pipelining.
- **Log-Structured Merge (LSM) Engine**: Batched memory writes via SkipList memtables, flushing to tiered SSTables on disk.
- **Bloom Filters & Sparse Indexing**: Microsecond point lookups that avoid unnecessary disk reads.
- **Write-Ahead Log (WAL) Compaction**: Incremental background snapshots that eliminate log replay bottlenecks during recovery.

---

## ✨ Key Architectural Highlights

- **120,000 Writes/Sec**: High throughput with batched fsync and zero-copy byte buffers.
- **Jepsen Tested**: Formally verified against network splits, split-brain conditions, and sudden node termination.
- **Linearizable Read Leases**: Serves reads from the leader without consensus log append overhead.
- **Deterministic Fuzz Testing**: Chaos injection harness verifying state machine convergence.

---

## 🛠️ Technologies & Stack

- **Language**: Go 1.22
- **Protocols**: Raft Consensus, Protobuf 3, gRPC
- **Storage Primitives**: LSM-Tree, SkipList, Bloom Filters, Memory-Mapped Files

