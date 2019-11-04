import Mock from 'mockjs'
const LoginUsers=[
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572870567813&di=1e092da2d2875a24bcda7e849e3d9c1f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FgxEcRxc8LHGJzkCZvHInfKXdM4NYzTS%3Dpykgd1pvAfPuR1535995251278.jpeg',
        name: '翟子路'
    }
]

const Users = []

for (let i =0;i<86;i++){
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name:Mock.Random.cname(),
        addr:Mock.mock('@county(true)'),
        'age|18-60':1,
        birth:Mock.Random.date(),
        sex:Mock.Random.integer(0,1)
    }))
}

export {LoginUsers,Users}