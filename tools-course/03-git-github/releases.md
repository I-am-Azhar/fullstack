# How I Create and Document Releases

Releases mark important stable versions of my project.

## Creating a Tag

1. Create a tag locally:
   git tag v0.1.0

2. Push the tag to GitHub:
   git push origin v0.1.0
   OR push all tags:
   git push --tags

## Creating a GitHub Release

1. Go to the GitHub repository.
2. Open the "Releases" section.
3. Click "Draft a new release".
4. Select the tag (e.g., v0.1.0).
5. Add a release title, such as:
   v0.1.0 — Initial Setup Complete
6. Write release notes summarizing what this version includes.
7. Publish the release.

## Why Releases Are Useful

- They mark stable points in the project.
- They help track versions (v1.0.0, v1.1.0, etc.).
- They allow others to download source code for a specific version.
- They make debugging easier because each version is documented.

## Summary
Tags + Releases = a clear versioning system for stable iterations of a project.
