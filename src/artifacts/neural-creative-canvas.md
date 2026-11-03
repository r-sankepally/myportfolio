# Real-Time Neural Creative Canvas

Interactive WebGL-accelerated infinite whiteboard with generative AI copilot, real-time multi-cursor syncing, and spatial audio notes.

---

## ⚡ Overview & Problem Statement

Collaborative design tools often grind to a halt when handling tens of thousands of vector shapes, leading to UI thread locks, lagging cursors, and dropped frames during collaborative sessions. 

The **Neural Creative Canvas** solves this with a custom 60 FPS WebGL rendering pipeline decoupled from the browser DOM, coupled with conflict-free replicated data types (CRDTs) to ensure zero-latency local edits with deterministic multi-user convergence.

---

## 🏗️ Technical Architecture

- **Custom WebGL 2.0 Engine**: Renders 50,000+ vector paths with dynamic level-of-detail (LOD) and hardware instancing.
- **Conflict-Free Replicated Data Types (Yjs)**: Enables peer-to-peer and server-relayed CRDT synchronization with sub-15ms roundtrip latency.
- **Web Workers Computation**: Offloads boundary hit testing, quadtree spatial partitioning, and bezier curve flattening away from the main thread.
- **Context-Aware Generative Copilot**: Infers design intentions from drawn wireframes and proposes component layout variants in real time.

---

## ✨ Key Architectural Highlights

- **Hardware Acceleration**: 60 FPS panning, zooming, and drawing regardless of canvas density.
- **Offline-First Resilience**: Full offline editing with automatic CRDT state reconciliation upon reconnection.
- **Zero-Latency Optimistic UI**: Deterministic undo/redo stack with local-first optimistic state mutations.
- **Spatial Audio & Notes**: Peer-to-peer WebRTC audio streams spatially localized based on canvas position.

---

## 🛠️ Technologies & Stack

- **Frontend**: React 19, TypeScript, WebGL 2.0, Web Audio API
- **State & Collaboration**: Yjs, WebSockets, WebRTC
- **Styling**: Tailwind CSS, CSS Modules
- **Build**: Vite 6, Web Workers

