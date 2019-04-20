import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLImageElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass

class GameCardBuilder {

    fun build(game: Game): Element {
        val containerElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val priceElement = document.createElement("div") as HTMLDivElement
        val descriptionElement = document.createElement("div") as HTMLDivElement
        val viewDetailsButtonElement = document.createElement("button") as HTMLButtonElement

        // bind data
        bind(game = game,
            imageElement = imageElement,
            titleElement = titleElement,
            priceElement = priceElement,
            descriptionElement = descriptionElement,
            viewDetailsButtonElement = viewDetailsButtonElement)

        // apply styles
        applyStyle(containerElement,
            imageElement = imageElement,
            titleElement = titleElement,
            priceElement = priceElement,
            descriptionElement = descriptionElement,
            viewDetailsButtonElement = viewDetailsButtonElement)

        containerElement.appendChild(imageElement,
            titleElement,
            descriptionElement,
            priceElement,
            viewDetailsButtonElement)
        return containerElement
    }

    // Apply CSS Classes
    private fun applyStyle(containerElement: HTMLDivElement,
        imageElement: HTMLImageElement,
        titleElement: HTMLDivElement,
        priceElement: HTMLDivElement,
        descriptionElement: HTMLDivElement,
        viewDetailsButtonElement: HTMLButtonElement) {

        containerElement.addClass("card", "card-shadow")
        imageElement.addClass("cover-image")
        titleElement.addClass("text-title", " float-left")
        descriptionElement.addClass("text-description", " float-left")
        priceElement.addClass("text-price", " float-left")
        viewDetailsButtonElement.addClass("view-details", "ripple", "float-right")
    }

    // Bind data to the view
    private fun bind(game: Game,
        imageElement: HTMLImageElement,
        titleElement: HTMLDivElement,
        priceElement: HTMLDivElement,
        descriptionElement: HTMLDivElement,
        viewDetailsButtonElement: HTMLButtonElement) {

        imageElement.src = game.coverUrl

        titleElement.innerHTML = game.title
        priceElement.innerHTML = game.price
        descriptionElement.innerHTML = game.description
        viewDetailsButtonElement.innerHTML = "view details"

        viewDetailsButtonElement.addEventListener("click", {
            window.open(game.url)
        })
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }
}
