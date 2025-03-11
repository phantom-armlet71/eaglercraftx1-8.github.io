class LargeChestPlugin {
    constructor(client) {
        this.client = client;
        this.init();
    }

    init() {
        this.client.on('open_window', (data) => {
            if (data.windowType === 'minecraft:chest') {
                this.expandChest(data);
            }
        });
    }

    expandChest(data) {
        // Ensure the chest can hold 200 slots
        if (data.slots < 200) {
            data.slots = 200;
            console.log('Expanded chest storage to 200 slots!');
        }
    }
}

// Register the plugin in Primerine
function registerPlugin(client) {
    new LargeChestPlugin(client);
}

module.exports = registerPlugin;
