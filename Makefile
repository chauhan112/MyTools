
shake:
	bun run tree-shake.js
	sed -i 's/rlib/orlib/g' src/main.ts
	mv src/rlib/ /home/raja/temp

reset:
	rm -rf src/orlib
	sed -i 's/orlib/rlib/g' src/main.ts
	mv /home/raja/temp src/rlib

build:
	make shake
	bun run build
	make reset

deploy:
	sed -i 's/\/assets/.\/assets/g' dist/index.html
	@read -p "📦 Enter app name: " name; \
	if [ -n "$$name" ]; then \
		echo "Adding package: $$name"; \
		mv dist /home/raja/timeline/global/appsDeployed/$$name; \
	else \
		echo "❌ Package name cannot be empty"; \
	fi

update:
	cp ../Makefile .

build-deploy:
	make build
	make deploy