interface WishListContract {

  interface View {
    fun showGames(games: List<Game>)
    fun showLoader()
    fun hideLoader()
  }

  interface Presenter {
    fun attach(view: View)
    fun loadBooks()
  }
}
