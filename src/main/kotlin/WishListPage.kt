import kotlinx.browser.document
import org.w3c.dom.HTMLDivElement

class WishListPage(private val presenter: WishListContract.Presenter) : WishListContract.View {

  private val loader = document.getElementById("loader") as HTMLDivElement
  private val content = document.getElementById("content") as HTMLDivElement

  private val cardBuilder = GameCardBuilder()

  fun show() {
    presenter.attach(this)
    presenter.loadBooks()
  }

  override fun showGames(games: List<Game>) {
    games.forEach { book ->
      val card = cardBuilder.build(book)
      content.appendChild(card)
    }
  }

  override fun showLoader() {
    loader.style.visibility = "visible"
  }

  override fun hideLoader() {
    loader.style.visibility = "hidden"
  }
}
