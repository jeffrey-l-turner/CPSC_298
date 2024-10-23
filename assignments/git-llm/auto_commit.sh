#!/bin/zsh

# Get the changes in the working directory
changes=$(git diff)

# Check if there are any changes
if [[ -z "$changes" ]]; then
    echo "No changes to commit."
    exit 0
fi

# Summarize the changes using LLM
summary=$(llm "Summarize the following git changes into a concise commit message: $changes")

# Add all changes to the staging area
git add .

# Commit the changes
git commit -m "$summary"

# Push the commit to the remote repository
git push

echo "Changes committed and pushed successfully."
