const { Client } = require('coinbase-wallet');

// Create a new Coinbase Wallet client instance
const client = new Client({
    apiKey: 'YOUR_GENERAL_API_KEY',
    apiSecret: 'YOUR_GENERAL_API_SECRET',
});

// Get account balance
client.getAccounts((err, accounts) => {
    if (err) {
        console.error(err);
    } else {
        accounts.forEach(account => {
            console.log(`Account: ${account.name}, Balance: ${account.balance.amount} ${account.balance.currency}`);
        });
    }
});
