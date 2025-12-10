# Mini Server Investigation — Full Exercise

## Step 1 — Started a Server on Port 5000
Command:
- python3 -m http.server 5000

Result:
- Server started successfully and began listening on port 5000.

---

## Step 2 — Found the Process ID Using lsof
In a second terminal, I checked which process was using port 5000.

Command:
- lsof -i :5000

Actual output from my system:
COMMAND  PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
python3 5153 azhar    3u  IPv4  23098      0t0  TCP *:5000 (LISTEN)

From this output I identified:
- Command running the server: python3
- PID of the server: 5153
- User running the process: azhar

---

## Step 3 — Verified the Server in Browser
Opened:
- http://localhost:5000

Result:
- The directory listing was visible, confirming the server was working.

---

## Step 4 — Killed the Process
After confirming it was working, I stopped the server.

Command:
- kill 5153

Verification:
- The server stopped in Terminal A.
- Browser stopped responding on port 5000.

---

## Step 5 — Checked That the Port Was Free
Commands:
- lsof -i :5000

Result:
- No output from lsof.
- Port 5000 was free.

---

## Step 6 — Restarted the Server on a New Port (7000)
Command:
- python3 -m http.server 7000

Verification:
- http://localhost:7000 loaded properly.
- Directory listing displayed again.

---

## What I Learned
- lsof -i :<port> shows which process is using a port.
- Port conflicts happen when another process is already listening.
- kill <PID> cleanly stops the service.
- A port becomes free as soon as the owning process stops.
- Restarting servers on new ports helps debug and test locally.
