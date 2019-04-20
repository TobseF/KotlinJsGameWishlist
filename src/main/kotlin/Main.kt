val API_URL = js("getGameApiUrl()") as String

fun main(args: Array<String>) {
  val bookStorePresenter = WishListPresenter()
  val bookStorePage = WishListPage(bookStorePresenter)
  bookStorePage.show()
}
