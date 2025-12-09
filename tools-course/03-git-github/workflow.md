# My Git Workflow

This is the basic workflow I will follow for all projects:

1. Make changes in files.
2. Check what changed:
   git status
3. Stage the changes:
   git add <file> 
   or
   git add .
4. Commit the changes:
   git commit -m "meaningful message"
5. Push changes to GitHub:
   git push

## Pulling Updates
- If I need new updates from GitHub:
  git pull

## Branch Workflow
- Create a new branch for features:
  git checkout -b feature/my-change
- Push branch:
  git push -u origin feature/my-change
- After review, merge it back into main.
