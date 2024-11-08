#!/bin/bash

# Define the XML file path and check if it exists
TEMPLATE_PATH="/Users/max/Coding/CPSC_Courses/CPSC_298_LLM/assignments/git-llm/commit_template.xml"
if [[ ! -f $TEMPLATE_PATH ]]; then
    echo "XML template file not found at $TEMPLATE_PATH."
    exit 1
fi

# Read the XML template
XML_TEMPLATE=$(cat "$TEMPLATE_PATH")

# Generate the commit message using the LLM
commit_message=$(llm --system "Generate a git commit message following this XML template" --input "$XML_TEMPLATE" --model gpt-4 --output)

# Check if the LLM returned a commit message
if [[ -z "$commit_message" ]]; then
    echo "No commit message generated. Please check your LLM configuration."
    exit 1
fi

# Make the git commit with the generated message
git commit -m "$commit_message"
