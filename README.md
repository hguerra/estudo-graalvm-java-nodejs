# Configurando GraalVM

https://www.graalvm.org/docs/getting-started/

https://www.graalvm.org/reference-manual/js/JavaInteroperability/#enabling-java-interoperability

https://medium.com/graalvm/using-testcontainers-from-a-node-js-application-3aa2273bf3bb


```bash
asdf install java graalvm-21.2.0+java8

asdf local java graalvm-21.2.0+java8

java -version
js -version

gu install nodejs

$JAVA_HOME/bin/node -v
```


## Node.js

Executando express com GraalVM:

```
take express

$JAVA_HOME/bin/npm install colors ansispan express

touch app.js

$JAVA_HOME/bin/node app.js

$JAVA_HOME/bin/node --jvm app.js
```


## Acessando Classes do Jar

```
cd java-jar

./gradlew shadowJar

ls build/libs/java-jar-1.0-SNAPSHOT-all.jar

$JAVA_HOME/bin/node --jvm --vm.cp=build/libs/java-jar-1.0-SNAPSHOT-all.jar app.js
```


## Criando projeto com NestJS

```
npm i -g @nestjs/cli

nest new nest-java

rm -rf nest-java/.git

rm -rf nest-java/node_modules

cd nest-java

$JAVA_HOME/bin/npm --jvm install

$JAVA_HOME/bin/npm --jvm run start:dev
```
