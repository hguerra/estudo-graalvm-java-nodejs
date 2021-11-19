
generic = Java.type('org.testcontainers.containers.GenericContainer')
container = generic.new('nginx')
container.setExposedPorts([80])
container.start();

puts "#{container.getContainerIpAddress()}:#{container.getMappedPort(80)}"
