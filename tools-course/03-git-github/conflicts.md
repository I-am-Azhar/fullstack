# How I Handle Merge Conflicts

Merge conflicts happen when Git cannot automatically combine changes from two branches. Here is the process I follow to resolve them:

## Steps to Resolve Conflicts

1. Check which files have conflicts:
   git status

2. Open the conflicted file. I will see markers like:

<<<<<<< HEAD
my version of changes
=======
incoming changes from the other branch
>>>>>>> branch-name

3. Decide which changes to keep:
- Keep my changes
- Keep the other branch’s changes
- Or manually combine both

4. Remove the conflict markers (<<<<<<<, =======, >>>>>>>).

5. Save the file.

6. Stage the resolved file:
   git add <file>

7. Complete the merge by committing:
   git commit

8. Push the merge result (if needed):
   git push

## Summary
Merge conflicts are normal in collaborative work. The key is to review the conflicting sections carefully, choose the correct version, and commit the resolution.
