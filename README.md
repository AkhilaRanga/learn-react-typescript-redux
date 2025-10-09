### Table of contents

#### [Setup](./00-setup/README.md)
- [Typescript setup (with best practices)](./00-setup/typescript-setup/README.md)

#### Folder structure
<pre>
<code>
├── .husky/             #setup for all sub folders
├── 00-setup/
├── .gitignore          #setup for all sub folders
├── package.json
└── README.md
</code>
</pre>

#### Root level setup
1. Common package.json
```
npm init --yes
```

2. Common monorepo style husky hook setup
```
npm install husky --save-dev
npx husky init
npm run prepare
# Update .husky/pre-commit file with
cd 00-setup/typescript-setup && npm run lint:fix
chmod +x .husky/pre-commit
git commit -m "Test"
```
