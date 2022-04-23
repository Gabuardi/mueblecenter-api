const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Después (Código Seguro)
app.get('/user/info', (req, res) => {
    res.json(getUserInfo(117))
})


app.get('/user/118/info', (req, res) => {
    res.json({
        id: 118,
        name: 'Andrea Vargas',
        account: {
            type: 'user',
            creationDate: new Date('March 20, 2022 20:15:34')
        },
        payment: [
            {
                holder: 'ANDREA VARGAS B.',
                issuingNetworking: 'Visa',
                cardNumber: '4916935002832394',
            }
        ],
        addressBook: [
            {
                country: 'CR',
                state: 'San José',
                zip: 10238,
                addressLine: 'Curridabat, Entrada Oeste de Urbanización Guayabos'
            }
        ]
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function getUserInfo(id) {
    return {
        id: 117,
            name: 'Josué Gabuardi',
        account: {
        type: 'user',
            creationDate: new Date('March 17, 2022 15:24:00')
    },
        payment: [
            {
                holder: 'JOSUE GABUARDI',
                issuingNetworking: 'Visa',
                cardNumber: '4485423059102178',
            }
        ],
            addressBook: [
        {
            country: 'CR',
            state: 'San José',
            zip: 10098,
            addressLine: 'Calle Matute, Casa planta alta'
        }
    ]
    }
}
