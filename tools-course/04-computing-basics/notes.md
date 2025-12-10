# Computing Basics for Developers — Notes

## Drill 1 — Identify Who I Am
Commands I used:
- whoami
- echo $HOME

What I learned:
- whoami shows which Linux user I am logged in as.
- echo $HOME shows the path of my home directory.

---

## Drill 2 — Explore Running Processes
Commands I used:
- ps
- ps aux

What I learned:
- ps shows processes running in the current terminal.
- ps aux shows all processes on the system.
- I was able to recognize running programs by their names like bash, python3, chrome, etc.

---

## Drill 3 — Create and Execute a Simple Script
Steps:
- Created a file: nano hello.sh
- Wrote: echo "Hello from my script"
- Made it executable: chmod +x hello.sh
- Ran it: ./hello.sh

What I learned:
- chmod +x adds execute permission to a file.
- ./file runs the file as a script.
- echo prints text to the terminal.

---

## Drill 4 — Inspect Permissions
Commands:
- ls -l
- chmod -x hello.sh
- chmod +x hello.sh

What I learned:
- ls -l shows file permissions in rwx format.
- Owner, group, and others each have separate permissions.
- Removing x prevents a script from running.
- Adding x allows execution again.

---

## Drill 5 — Start a Tiny Server
Commands:
- python3 -m http.server 8000

What I learned:
- This starts a simple HTTP server on port 8000.
- Visiting http://localhost:8000 shows the directory contents.
- The server keeps running until stopped manually.

---

## Drill 6 — Inspect and Stop the Server
Commands:
- lsof -i :8000
- ps aux | grep http.server
- kill <PID>

What I learned:
- lsof shows which process is using a port.
- I found the python process running the server.
- kill <PID> stops the running server.
- After killing, port 8000 becomes free again.

---

## Drill 7 — Port in Use Scenario
What I did:
- Started a server on port 3000.
- Tried starting another on the same port and got “Address already in use”.
- Used lsof -i :3000 to find the process.
- Killed the process using kill <PID>.
- Verified the port became free.

What I learned:
- Only one process can listen on a port at a time.
- “Address already in use” means a previous server didn’t stop.
- lsof and kill help debug port conflicts.
- Restarting the server works only when the port is free.

---


