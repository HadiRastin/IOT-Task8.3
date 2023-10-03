const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");




client.on('message', function (topic, message) {
    console.log(`Received message on topic: ${topic}, Message: ${message.toString()}`);
  });



// Connect to the MQTT broker
client.on('connect', function () {
  console.log('Connected to MQTT broker');

  // Scenario a: Subscribe to all drone messages
  client.subscribe('/drones/#');

  // Scenario b: Subscribe to the Speeds of Short distance drones
  client.subscribe('/drones/ShortDistanceDrone/Speed');

  // Scenario c: Subscribe to the battery levels of all drones
  client.subscribe('/drones/+/Battery');

  // Scenario d: Subscribe to the latitude and longitude values of all Long distance drones
  client.subscribe('/drones/LongDistanceDrone/LatLong');
});


