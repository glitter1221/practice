kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1]
})

const moveSpeed = 120
const jumpForce = 360
let bigJumpForce = 550
let currentJumpForce = jumpForce
let isJumping = true
const enemySpeed = 20
const fallDeath = 400

// loadRoot('')
loadSprite('coin', './images/coin.png')
loadSprite('evil-shroom', './images/evil-shroom.png')
loadSprite('brick', './images/brick.png')
loadSprite('block', './images/block.png')
loadSprite('mario', './images/mario.png')
loadSprite('mushroom', './images/mushroom.png')
loadSprite('surprise', './images/surprise.png')
loadSprite('unboxed', './images/unboxed.png')
loadSprite('pipe-top-left', './images/pipe-top-left.png')
loadSprite('pipe-top-right', './images/pipe-top-right.png')
loadSprite('pipe-bottom-left', './images/pipe-bottom-left.png')
loadSprite('pipe-bottom-right', './images/pipe-bottom-right.png')

loadSprite('blue-block', './images/blue-block.png')
loadSprite('blue-brick', './images/blue-brick.png')
loadSprite('blue-steel', './images/blue-steel.png')
loadSprite('blue-evil-shroom', './images/blue-evil-shroom.png')
loadSprite('blue-surprise', './images/blue-surprise.png')


scene("game", ({ level, score }) => {
    layers(['bg','obj','ui'], 'obj')

    const maps = [
        [
            '                                           ',
            '                                           ',
            '                                           ',
            '                                           ',
            '                                           ',
            '                                           ',
            '                                           ',
            '                                           ',
            '                                           ',
            '         %    =*=%=                        ',
            '                                           ',
            '                                           ',
            '                             -+            ',
            '                 ^     ^     ()            ',
            '===============================   ========='
        ],
        [
            '~                                           ~',
            '~                                           ~',
            '~                                           ~',
            '~                                           ~',
            '~                                           ~',
            '~                                           ~',
            '~                                           ~',
            '~                                           ~',
            '~                                     x     ~',
            '~         %    =*=%=                x x     ~',
            '~                                 x x x     ~',
            '~                               x x x x     ~',
            '~                             x x x x x  -+ ~',
            '~          z           z    x x x x x x  () ~',
            '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
        ]
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=' : [sprite('block'), solid()],
        '$' : [sprite('coin'), 'coin'],
        '%' : [sprite('surprise'), solid(), 'coin-surprise'],
        '*' : [sprite('surprise'), solid(), 'mushroom-surprise'],
        '}' : [sprite('unboxed'), solid()],
        '(' : [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        ')' : [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        '-' : [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
        '+' : [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
        '^' : [sprite('evil-shroom'), solid(), 'dangerous'],
        '#' : [sprite('mushroom'), solid(), 'mushroom', body()],
        '!' : [sprite('blue-block'), solid(), scale(0.5)],
        '~' : [sprite('blue-brick'), solid(), scale(0.5)],
        'z' : [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
        '!' : [sprite('blue-block'), solid(), scale(0.5), 'coin-surprise'],
        'x' : [sprite('blue-block'), solid(), scale(0.5)],
        
    }

    const gameLevel = addLevel(maps[level], levelCfg)

    const scoreLabel = add([
        text(score),
        pos(30,6),
        layer('ui'),
        {
            value: score,
        }
    ])

    add([text('level' + parseInt(level + 1)), pos(40,6)])

    function big() {
        let timer = 0
        let isBig = false
        return {
            update() {
                if(isBig) {
                    currentJumpForce = bigJumpForce
                    timer -= dt()
                    if(timer <= 0) {
                        this.smallify()
                    }
                }
            },
            isBig() {
                return isBig
            },
            smallify() {
                this.scale = vec2(1)
                currentJumpForce = jumpForce
                timer = 0
                isBig = false
            },
            biggify() {
                this.scale = vec2(2)
                timer = time
                isBig = true
            }
        }
    }

    const player = add([
        sprite('mario'), solid(),
        pos(30, 0),
        body(),
        big(),
        origin('bot')
    ])

    action('mushroom', (m) => {
        m.move(10, 0)
    })

    player.on('headbump', (obj) => {
        if (obj.is('coin-surprise')) {
            gameLevel.spawn('$', obj.gridPos.sub(0, 1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0, 0))
        }
        if (obj.is('mushroom-surprise')) {
            gameLevel.spawn('#', obj.gridPos.sub(0, 1))
            destroy(obj)
            gameLevel.spawn('}', obj.gridPos.sub(0, 0))
        }
    })

    player.collides('mushroom', (m) => {
        destroy(m)
        player.biggify(6)
    })

    player.collides('coin', (c) => {
        destroy(c)
        scoreLabel.value++
        scoreLabel.text = scoreLabel.value
    })

    action('dangerous', (d) => {
        d.move(-20, 0)
    })

    player.collides('dangerous', (d) => {
        (isJumping) ? 
        destroy(d) :
        go('lose', { score: scoreLabel.value })
    })

    player.action(() => {
        camPos(player.pos)
        if (player.pos.y >= fallDeath) {
            go('lose', { score: scoreLabel.value })
        }
    })

    player.collides('pipe', () => {
        keyDown('down', () => {
            go('game', {
                level : (level + 1) % maps.length,
                score : scoreLabel.value
            })
        })
    })

    keyDown('left', () => {
        player.move(-moveSpeed, 0)
    })

    keyDown('right', () => {
        player.move(moveSpeed, 0)
    })

    player.action(() => {
        if (player.grounded()) {
            isJumping = false
        }
    })

    keyDown('space', () => {
        if (player.grounded()) {
            isJumping = true
            player.jump(currentJumpForce)
        }
    })
})

scene('lose', ({ score }) => {
    add([text(score, 32), origin('center'), pos(width() / 2, height() / 2)])
})

start("game", { level : 0, score : 0 })