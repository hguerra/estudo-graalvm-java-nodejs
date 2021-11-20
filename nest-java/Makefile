.PHONY: configure clean install test build start start.dev

NODE_DIR = $(JAVA_HOME)/bin
BIN_DIR = $(PWD)/node_modules/.bin
LIB_PATH = $(BIN_DIR)/commons-lang3.jar
NPM_CMD = $(NODE_DIR)/npm --jvm
NPM_CMD_VM_CP = $(NPM_CMD) --vm.cp=$(LIB_PATH)

configure:
	asdf install
	gu install nodejs

clean:
	rm -rf node_modules

install:
	$(NPM_CMD) install
	curl --output $(LIB_PATH) https://repo1.maven.org/maven2/org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar

build:
	$(NPM_CMD) run build

# make run args=format
run:
	$(NPM_CMD) run $(args)

start:
	$(NPM_CMD_VM_CP) run start

start.dev:
	$(NPM_CMD_VM_CP) run start:dev
