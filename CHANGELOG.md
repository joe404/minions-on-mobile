## Trace the bundle size

1. rm -rf build
1. npm run build
1. check build/public/minions.js

### Commit: react init

- Dependencies
  - react
  - react-dom
  - react-router (not used)
  - hisory (not used)
- Bundle size
  - minions.js: 131KB
  - Compares to
    - [react.min.js 0.14.3](https://cdnjs.com/libraries/react): 135.6KB

### Commit: react-router in

- Dependencies
  - react
  - react-dom
  - react-router
  - hisory
- Bundle size
  - minions.js: 192KB (+61KB)
  - Compares to
    - [react.min.js 0.14.3](https://cdnjs.com/libraries/react): 135.6KB
    - [ReactRouter.min.js 1.0.0](https://cdnjs.com/libraries/react-router)(include history?): 49.9KB (+49.9KB)


### Commit: material-ui half in

minions.js size depend on how to import svg icon in Navbar.js:

```
import SvgIcons from 'material-ui/lib/svg-icons';
<SvgIcons.AvMovie color={Colors.red300}/>
```
- minions.js: 991KB

```
import {AvMovie} from 'material-ui/lib/svg-icons';
<AvMovie color={Colors.red300}/>
```
- minions.js: 990KB

```
import AvMovie from 'material-ui/lib/svg-icons/av/movie';
AvMovie color={Colors.red300}/>
```
- minions.js: 573KB (+381KB)
