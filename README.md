# Buglogs


### Dev setup steps

#### 1: Clone
```sh
git clone https://github.com/debojyoti/buglogs
```

#### 2: Install required packages

2.1: Global packages

> Note: If already installed, skip
```sh
npm i -g @angular/cli
```
or
```sh
yarn global add @angular/cli
```

2.2: Local packages

Navigate to project's root directory after cloning
```sh
cd buglogs
```
then
```sh
npm i
```
or
```sh
yarn
```

#### 3: Add Config data

3.1: Create file `app.config.js` in `src/app` directory

3.2: Copy template content form `src/app/app.config.sample.js` and update with real values

3.3: Create file `config.js` in `functions/` directory

3.4: Copy template content form `functions/config.sample.js` and update with real values

#### 4: Run locally
```sh
ng serve
```