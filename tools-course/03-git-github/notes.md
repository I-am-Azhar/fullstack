# Git & GitHub Setup Notes

## GitHub Account
- I confirmed my GitHub account is active.
- I verified my username and email are correct.

## SSH Key Setup
Steps I followed:
1. Generated SSH key using:
   ssh-keygen -t ed25519 -C "my-email"
2. Started ssh-agent:
   eval "$(ssh-agent -s)"
3. Added my private key:
   ssh-add ~/.ssh/id_ed25519
4. Added the public key to GitHub under SSH Keys.
5. Tested connection using:
   ssh -T git@github.com

## Git Configuration
- Set global username and email.
- Set default branch to `main`.
- Initialized my repository in ~/fullstack/
