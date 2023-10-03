const mqtt = require('mqtt');

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");


client.on('connect', function () {
  console.log('Connected to MQTT broker for publishing');

  setInterval(() => {
    const batteryLevel = Math.floor(Math.random() * 101); 
    const message = JSON.stringify({ batteryLevel });
    client.publish('/drones/LongDistanceDrone/Battery', message);
    console.log(`Published Battery Level: ${batteryLevel}`);
  }, 5000); 


  
  setInterval(() => {
      const latitude = Math.random() * 90; 
      const longitude = Math.random() * 180; 
      const message = JSON.stringify({ latitude, longitude });
      client.publish('/drones/LongDistanceDrone/LatLong', message);
      console.log(`Published Lat & Long: ${latitude}, ${longitude}`);
  }, 5000); 


  setInterval(() => {
    const altitude = Math.random() * 100;  
    const message = JSON.stringify({altitude});
    client.publish('/drones/LongDistanceDrone/Altitude', message);
    console.log(`Published speed: ${altitude}`);
}, 5000); 


  setInterval(() => {
    const speed = Math.random() * 100;  
    const message = JSON.stringify({speed});
    client.publish('/drones/LongDistanceDrone/Speed', message);
    console.log(`Published speed: ${speed}`);
}, 5000); 


});


