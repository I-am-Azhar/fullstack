# 🚀 Server Setup — Drills 1 to 9 (Full Summary)

## **Drill 1 — Create a Free VM (AWS EC2)**

### ✅ What I Did

- Logged into AWS Console
- Created an EC2 instance (Ubuntu 22.04 LTS)
- Selected **t2.micro (Free Tier)**
- Created SSH key `aws-key.pem`
- Opened SSH port (22) **only for my IP**
- Launched the instance successfully

### 🌍 Public IP

```
16.170.214.82

```

---

## **Drill 2 — SSH Into the Server**

### 🔧 Command Used

```bash
ssh -i ~/.ssh/aws-key.pem ubuntu@16.170.214.82
```

### ✅ What I Did

- Connected to EC2 server using SSH
- Verified access with private key

---

## **Drill 3 — Create a Non-Root User (student)**

### 👤 Commands Used

```bash
sudo adduser student
sudo usermod -aG sudo student
sudo mkdir -p /home/student/.ssh
sudo cp /home/ubuntu/.ssh/authorized_keys /home/student/.ssh/authorized_keys || true
sudo chown -R student:student /home/student/.ssh
sudo chmod 700 /home/student/.ssh
sudo chmod 600 /home/student/.ssh/authorized_keys
```

### 🔐 SSH Test

```bash
ssh -i ~/.ssh/aws-key.pem student@16.170.214.82

```

---

## **Drill 4 — SSH Config Setup**

### 📝 File Edited

`~/.ssh/config`

```ssh
Host myserver
    HostName 16.170.214.82
    User student
    IdentityFile ~/.ssh/aws-key.pem
```

### 🚀 Connect Using Alias

```bash
ssh myserver
```

---

## **Drill 5 — Install Essential Tools**

### 📦 Commands Used

```bash
sudo apt update
sudo apt install -y git curl htop jq build-essential
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install -y python3 python3-pip
```

### 🔍 Versions Installed

| Tool    | Version |
| ------- | ------- |
| git     | 2.34.1  |
| node    | 24.11.1 |
| npm     | 11.6.2  |
| htop    | 3.0.5   |
| jq      | 1.6     |
| curl    | 7.81.0  |
| python3 | 3.10.12 |
| pip     | 22.0.2  |

---

## **Drill 6 — Mirror Folder Structure**

### 📁 Commands Used

```bash
mkdir -p ~/work ~/notes ~/bin
echo "hello from AWS $(date)" > ~/work/hello.txt
```

---

## **Drill 7 — File Transfer (Local ↔ Server)**

### ⬆ Upload File

```bash
scp -i ~/.ssh/aws-key.pem ~/testfile.txt student@13.61.148.103:~/work/
```

### ⬇ Download File

```bash
scp -i ~/.ssh/aws-key.pem student@13.61.148.103:~/work/hello.txt ~/Downloads/
```

### 🔄 Sync Local Folder → Server

```bash
rsync -avz --progress -e "ssh -i ~/.ssh/aws-key.pem" ~/projects/myproject/ student@13.61.148.103:~/work/myproject/
```

---

## **Drill 8 — DNS Setup Using DuckDNS**

### 🌐 Domain Created

```
iamazhar.duckdns.org
```

### ↔ Mapped To IP

```
16.170.214.82

```

### 🔍 Verification Commands

```bash
ping -c 3 iamazhar.duckdns.org
dig +short iamazhar.duckdns.org
```

### 🔓 AWS Security Group Changes

- Opened **Port 80 (HTTP)**
- Opened **Port 443 (HTTPS)**

---

## **Drill 9 — Port Awareness**

### 🕵️‍♂️ Command Used

```bash
sudo ss -tulnp | head -n 20
```

### 📡 Observations

- **Port 22** → SSH
- **Ports 80/443** → open externally but **no services running yet**
- These ports will be used later by **Caddy (for HTTPS)**

---

# ✅ All Drills (1–9) Successfully Completed
