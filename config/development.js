import path from 'path';

export default {
    app: {
        host: 'localhost',
        port: 8000,
        jwtKey: 'GuJxOyUxLaUdKS17coYwdwEvAl5L0Du2zeA8NOTLNQ4=',
        defaultCurrency: 'ARS'
    },
    database: {
        servers: [
            {
                host: process.env.DB_PORT_28015_TCP_ADDR || 'localhost',
                port: process.env.DB_PORT_28015_TCP_PORT || 28015
            }
        ],
        name: 'atlas'
    },
    logs: {
        folder: path.join(__dirname, '../logs/'),
        streams: [
            {
                level: 'debug',
                stream: process.stdout // log INFO and above to stdout
            }
        ]
    },
    uploads: {
        provider: 'atlas',
        folder: path.join(process.cwd(), 'uploads'),
        baseUrl: 'localhost:8000/uploads'
    },
    emails: {
        from: {
            name: 'bananacat.co',
            email: 'ventas@bananacat.co'
        }
    },
    storefront: {
        label: 'bananacat.co',
        baseUrl: 'https://localhost:3000',
        defaultLocale: 'es'
    },
    switchPayments: {
        enabled: true,
        baseUrl: 'https://api-test.switchpayments.com/v2',
        accountId: process.env.SWITCH_ACCOUNT_ID,
        privateKey: process.env.SWITCH_PRIVATE_KEY
    },
    mailgun: {
        domain: 'sandboxfcb78c7c3cac4157898debc6c4b5f7c5.mailgun.org',
        apiKey: 'key-e0532bed06afd709d7894a4cdce18d50'
    }
}
