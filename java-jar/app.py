import java
generic = java.type('org.testcontainers.containers.GenericContainer')
container = generic('nginx')
container.setExposedPorts([80])
container.start();

print('%s:%s' % (container.getContainerIpAddress(), container.getMappedPort(80)));
