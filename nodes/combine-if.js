module.exports = function (RED) {
    class CombineIfNode {
        constructor(config) {
            RED.nodes.createNode(this, config);
            this.status({fill: 'grey', shape: 'ring', text: 'false'});
            this.on('input', msg => {
                this.state = Boolean(msg.payload);
                if (msg.topic === config.topic) {
                    if (this.state) {
                        this.status({fill: 'blue', shape: 'dot', text: 'true'});
                        this.send([msg, null]);
                    } 
                    else {
                        this.status({fill: 'blue', shape: 'dot', text: 'true - no payload'});
                        this.send([msg, null]);
                else {
                    this.status({fill: 'grey', shape: 'ring', text: 'false'});
                    this.send([null, msg]);
                }
            });
        }
    }
    RED.nodes.registerType('combine-if', CombineIfNode);
};
