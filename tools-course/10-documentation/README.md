
# 🔗 Table of Contents

 [🔗 Table of Contents](#-table-of-contents)
- [📁 Files](#-files)
- [🎨 Mermaid Diagrams](#-mermaid-diagrams)
    - [1️⃣ Block Diagram — Web App Architecture](#1️⃣-block-diagram--web-app-architecture)
    - [2️⃣ Flowchart — Login Flow](#2️⃣-flowchart--login-flow)
    - [3️⃣ Sequence Diagram — API Request](#3️⃣-sequence-diagram--api-request)
- [💻 Code Block Examples](#-code-block-examples)
    - [Bash Example](#bash-example)
    - [JavaScript Example](#javascript-example)

---

# 📁 Files

| File | Description |
|------|-------------|
| `drill1-login-mindmap.png` | Mindmap for a login system |
| `drill2-mermaid.md` | Three Mermaid diagrams |
| `drill3-state-machine.md` | Signup flow state machine |
| `architecture-sketch.png` | Architecture diagram (will be added in Drill 5) |
| `large-exercise.md` | Full writing exercise (later) |

---

# 🎨 Mermaid Diagrams

### 1️⃣ Block Diagram — Web App Architecture

```mermaid
graph LR
    Browser --> Backend
    Backend --> Database
    Backend --> ExternalAPI[External API]
    Database --> Storage[(Storage Layer)]
```

---

### 2️⃣ Flowchart — Login Flow

```mermaid
flowchart TD
    A[User submits login form] --> B{Are fields valid?}
    B -->|No| C[Show validation error]
    B -->|Yes| D[Send credentials to backend]
    D --> E{Do credentials match?}
    E -->|No| F[Return error message]
    E -->|Yes| G[Generate JWT token]
    G --> H[Redirect to dashboard]
```

---

### 3️⃣ Sequence Diagram — API Request

```mermaid
sequenceDiagram
    participant Client
    participant Server
    participant Database

    Client->>Server: GET /items
    Server->>Database: Query items
    Database-->>Server: Results
    Server-->>Client: 200 OK + JSON
```

---

# 💻 Code Block Examples

### Bash Example

```bash
# install dependencies
npm install

# run the server
node server.js
```

### JavaScript Example

```js
app.get('/items', async (req, res) => {
  const items = await db.query('SELECT * FROM items');
  res.json(items.rows);
});
```

