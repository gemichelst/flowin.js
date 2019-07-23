datetime=`date +'%Y%m%d_%H%M%S'`
default: build
stylus:
	./src/node_modules/stylus/bin/stylus -m --include node_modules -u jeet -u axis -u autoprefixer-stylus -u rupture src/stylus/*.styl -o dist/ -w 
fix-perm:
	chown -R www-data:www-data .
build:
	echo "building dist package..."
	cp src/flowin_dev.js dist/flowin.js
	./src/node_modules/stylus/bin/stylus -m --include node_modules -u jeet -u axis -u autoprefixer-stylus -u rupture src/stylus/*.styl -o dist/ 
git-push:
	git add -A && git-commit -m "upgrade-$(datetime)" && git push -u origin master
print-date-time:
	 echo $(datetime)
install:
	echo "installing NPM packages..."
	cd src && npm install
