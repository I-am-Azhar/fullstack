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

I am updating this workflow as part of Drill 6.

## Git History and Diff Observations

- `git log` shows all past commits with details such as commit ID, author, date, and message. It helps me understand the timeline of changes.
- `git diff` shows the exact line-by-line differences between files. It helps me see what changed before committing or between commits.
- `git show <commit>` displays the complete details of a commit including author, message, and the exact code changes (diff) to clearly see what was modified in that commit.
- These commands are useful for debugging, reviewing history, understanding mistakes, and learning how the project evolved.
- Diffs are easy to read because Git is optimized for text files.

## Overall Workflow Summary

This workflow ensures that my development process stays clean, organized, and professional:
- Branches isolate features and prevent conflicts.
- Clear commit messages make history easy to understand.
- Pulling and merging regularly avoids large conflicts.
- Tags and releases help track stable versions.
- Using git status, diff, and log helps me review and manage changes effectively.

I will use this standardized workflow for all future bootcamp projects.
