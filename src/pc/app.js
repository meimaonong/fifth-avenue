const services = require("./services/api.service");
const ServiceBroker = require("./broker");

const broker = new ServiceBroker();

broker.createService(services);
