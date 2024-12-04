import subprocess

def get_staged_diff():
    # Get staged changes
    result = subprocess.run(["git", "diff", "--staged"], stdout=subprocess.PIPE, text=True)
    return result.stdout

def generate_commit_message(diff):
    # Generate commit message using uv run llm
    result = subprocess.run(["uv", "run", "llm", "-t", "git_commit_message"], input=diff, stdout=subprocess.PIPE, text=True)
    return result.stdout.strip()

def main():
    diffs = get_staged_diff()
    if not diffs:
        print("No staged changes to commit.")
        return

    commit_msg = generate_commit_message(diffs)
    print("Would you like to commit staged changes using the following message?")
    print(f"\n{commit_msg}\n")

    options = ["Yes", "No"]
    for i, option in enumerate(options, 1):
        print(f"{i}. {option}")

    try:
        choice = int(input("\nSelect an option: "))
        if choice == 1:
            print("Committing staged changes...")
            subprocess.run(["git", "commit", "-m", commit_msg], check=True)
            print("Changes successfully committed.")
        else:
            print("Staged changes will not be committed.")
    except (ValueError, IndexError):
        print("Invalid selection. Aborting.")

if __name__ == "__main__":
    main()
