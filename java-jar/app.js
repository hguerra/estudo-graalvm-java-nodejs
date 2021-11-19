const readline = require('readline');
var GenericContainer = Java.type(
  'org.testcontainers.containers.GenericContainer'
);
var container = new GenericContainer('nginx');
container.setExposedPorts([80]);
container.start();
console.log(
  container.getContainerIpAddress() + ':' + container.getMappedPort(80)
);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Type something to quit? ', (answer) => {
  console.log(`Thank you! Bye!`);
  rl.close();
});
