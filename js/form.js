class Form {
    constructor() {
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h3")
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {
        var title = createElement("h1")
        title.html('carRacing game')
        title.position(width/2-100, 0)

        this.input.position(width/2-100, height/2)


        this.button.position(width/2-50, height/2+100)

        this.button.mousePressed(()=> {
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.update(player.name)
            player.updateCount(playerCount)
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width/2, height/2)

        })
    }
}