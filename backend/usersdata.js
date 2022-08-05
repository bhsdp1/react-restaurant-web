import bcrypt from 'bcryptjs'
const data = {
    users:[
        {
            name: 'soham',
            email: 'sohampurao12@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin : true,
        },
        {
            name: 'user',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin : false,
        }
    ],
}

export default data;