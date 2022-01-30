# Install Hook:
# ln -s ./hooks/pre-commit.sh .git/hooks/pre-commit

# Remove Hook:
# rm .git/hooks/pre-commit

echo "running deno fmt..."
deno fmt
echo "running deno lint..."
deno lint
echo "running deno test..."
deno test
