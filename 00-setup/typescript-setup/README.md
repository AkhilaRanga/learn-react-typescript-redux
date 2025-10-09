#### Typescript setup (with best practices)

1. Initialize a new Node.js project and install typescript, eslint and prettier packages
```
npm init
# npm init --yes (to bypass interactive prompts)
npm install -D typescript eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

2. Generate tsconfig.json. Ensures that all developers working on the project use the same compilation settings.
```
npx tsc --init
# Uncomment rootDir/outDir
# Create src/index.ts file
```

3. Initialize and configure ESLint (linter tool) in the project. This will create eslint.config.mjs
```
npx eslint --init
# Prompt questions
# What do you want to lint? JavaScript
# How would you like to use ESLint? To check syntax and find problems
# What type of modules does your project use? JavaScript modules (import/export)
# Which framework does your project use? None of these
# Does your project use Typescript? Yes
# Where does your code run? Browser
# Which language do you want your configuration file be written in? Javascript
# The config that you've selected requires the following dependencies, Would you like to install them now? Yes
# eslint, @eslint/js, globals, typescript-eslint
```

4. Integrate prettier into eslint to avoid conflicts
```
npm install -D eslint-config-prettier eslint-plugin-prettier
# import prettier in eslint.config.mjs
import prettierPlugin from 'eslint-plugin-prettier';
# Add below to eslint.config.mjs defineConfig
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
```

5. Add scripts to package.json
```
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "lint": "eslint .  --ignore-pattern dist/ --ignore-pattern node_modules/",
    "lint:fix": "eslint .  --ignore-pattern dist/ --ignore-pattern node_modules/ --fix",
    "format": "prettier --write \"src/**/*.{ts,js,json,md}\""
  },
```

6. Create `.gitignore` for git hygiene
```
node_modules
dist
# to ignore in any folder
**/node_modules
**/dist
```

7. Setup pre commit git hook with husky
```
npm install husky --save-dev
npx husky init
# Update .husky/pre-commit file to have 'npm run lint:fix'
# You can add similar .husky/pre-push file
```

8. Run project with `npm install && npm run build && npm start`