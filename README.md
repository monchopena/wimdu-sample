# Description Module

### Requirements:
1. node - download installer from `http://nodejs.org` or use `brew`
2. bower - `npm install -g bower`
3. gulp - `npm install -g gulp`

### Local setup:
1. Clone repository
2. Install all dependencies:

```
$ npm install
$ bower install
```

### Run server:
1. Inside main dir run `gulp watch`
2. Test environment url: `http://localhost:8000/test`

### More Gulp Tasks:

1. `gulp` - alias for `gulp watch`
2. `gulp watch` - to run development server
3. `gulp clean` - to clean all files


### My Notes 25-08-2015

1. I installed Angular

```
$ bower install --save angular
```

2. Adding bower component angular

```
<!-- build:js scripts/vendor.js -->
<!-- bower:js -->
<script src="bower_components/angular/angular.js"></script>
<!-- endbower -->
<!-- endbuild -->
```

3. Prepare to angular

Into app/index.html

```
<html ng-app="app">
```

And
```
<body ng-controller="MainCtrl">
```

4. Prepare Jasmine to use in angular

```
$ bower install --save angular-mocks
```

5. Adding dependences

```
<script type="text/javascript" src="../bower_components/angular/angular.js"></script>
<script type="text/javascript" src="../bower_components/angular-mocks/angular-mocks.js"></script>
```

