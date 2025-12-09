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

## Why Binary Files Should Not Be Committed

Binary files such as images, videos, archives, and compiled executables should not be committed to Git because:

1. Git is optimized for text, not binary data.
2. Git cannot show meaningful diffs for binary files.
3. Large binary files make the repository size grow very quickly.
4. Every version of a binary file is stored fully, not as a small diff.
5. Cloning and pulling become slow for everyone on the team.
6. Large binaries do not compress well in Git’s storage model.

## Overall Git Summary

- I now understand how to set up GitHub, configure Git, and use SSH keys for secure authentication.
- I can initialize repositories, create folders for modules, and manage files using git add, commit, and push.
- I understand the purpose of .gitignore and why binary files should not be committed.
- I can view project history using git log, git diff, and git show.
- My environment is now fully prepared for all future Git workflow and bootcamp assignments.
