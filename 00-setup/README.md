### Setup

#### Install node
1. Install nvm (Node Version Manager) on macOS using Homebrew
`brew install nvm`

2. Create nvm directory
`mkdir ~/.nvm`

3. Add to ~/.zshenv for zsh (or) ~/.bash_profile for bash
```
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # Load nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # Load nvm bash_completion
```

4. Close and reopen terminal (or) run
```
source ~/.zshenv
# or
source ~/.bash_profile
```

5. Check version `nvm --version`

6. Install node and check node and npm (Node Package Manager) version
```
nvm install node
node -v
npm -v
```

#### Typescript setup
- [Typescript setup (with best practices)](./typescript-setup/README.md)
